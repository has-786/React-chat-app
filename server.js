const port=process.env.PORT || 5000;
const express=require('express')
const path=require('path')
const fs=require('fs')
const checkAuth=require('./check-auth.js');
const jwt=require('jsonwebtoken');
const nodemailer=require('nodemailer');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const bcrypt=require('bcryptjs');
const cookieParser = require('cookie-parser');

const router=express.Router()
const app = express()
const http = require('http').createServer(app);

app.use(bodyParser.json())
app.use(cookieParser());

const cors = require('cors');
app.use(cors());

const io = require('socket.io')(http, {transports: ['websocket','polling']});
const appMail='syedhasnain9163@gmail.com'
const appMailPassword='labbaikyahussain'
const secret='access_token_secret'

const db=require('./database/db.js');
db.con(mongoose)
const Users=db.users
const Rooms=db.rooms
let room;


io.sockets.on('connection',(socket)=>{

		socket.on('create', function (myroom) {
			console.log(myroom)
		  socket.join(myroom);
		});

	// When new user joins
		socket.on('new-user-joined',(name,room)=>{
			console.log(`user joined: ${name} on room ${room}`)
			socket.to(room).emit('user-joined',name)
		})

	// When user sends a message
		socket.on('send',message=>{
			console.log(message)

			if(message.img){
				 fs.writeFile("uploads/"+message.path, message.img,'base64',function(err) {
					 io.to(message.room).emit('receiveimg',{room:message.room,flag:message.flag,email:message.email,message:null,path:message.path,name:message.name,time:message.time})

					 if(!err){
									 Rooms.updateOne({name:message.room},{$push:{msgs:{flag:message.flag,email:message.email,message:null,path:message.path,name:message.name,time:message.time}}})
						 			.then(update=>console.log(`Room ${message.room} message updated successfully`))
						 			.catch(err=>console.log(err))

									 socket.to(message.room).emit('receive',{room:message.room,flag:message.flag,email:message.email,message:null,path:message.path,name:message.name,time:message.time})
				    }
						else console.log(err)
				 });
			 }
			else {

				socket.to(message.room).emit('receive',{room:message.room,flag:message.flag,email:message.email,message:message.msg,salt:message.salt,iv:message.iv,name:message.name,time:message.time})
				Rooms.updateOne({name:message.room},{$push:{msgs:{flag:message.flag,email:message.email,message:message.msg,salt:message.salt,iv:message.iv,path:message.path,name:message.name,time:message.time}}})
				.then(update=>console.log(`Room ${message.room} message updated successfully`))
				.catch(err=>console.log(err))
		   }
	  })

		// on disconnect
		 socket.on('disconnect',(id)=>{
			 socket.disconnect(true)
			 console.log(id)
 	 	 })
 })


app.post('/emailverify',(req,res)=>{
	const email=req.body.email;
	console.log(email,appMail);
	var pat=email.substring(email.lastIndexOf('.'));
	console.log(pat);
    if(pat!='.com' && pat!='.co.in' && pat!='.in'){ res.send({status:0,msg:"Email Id not correct"}); }
	else{
		Users.findOne({email:email},(err,user1)=>{
	    if(err)res.send({status:0,msg:"Something went wrong"});
		  else if(user1)res.send({status:0,msg:"Email Already Registered"});
			else{
					const otp=Math.floor(Math.random()*(9999-1000)+1000);
					var transporter = nodemailer.createTransport({service:'Gmail',secure: false,auth: {user:appMail,pass:appMailPassword},tls: {
	          rejectUnauthorized: false
	         }});
					const mailOptions = {from: appMail, to: email, subject: 'Socio We Email Verification OTP', text:'Your otp is '+otp};
					transporter.sendMail(mailOptions, function (err, info) { if(err){res.send({status:0,msg:"Email Id not correct"}); console.log(err);}else {  console.log(info);  res.send({status:1,msg:'An OTP is sent to this email id',otp:otp}); }});

		     	}
	   });
	}
});





app.post('/localSignup',(req,res)=>{

	const email=req.body.email;
	const name=req.body.name;
	const pass=req.body.pass;
	console.log(pass)
	// store to database

	Users.findOne({email},(err,user1)=>{
	    if(err)console.log(err);
	    else if(user1){ console.log('Already A User');console.log(user1); res.send({msg:"Already Registered",status:0}); }
			else{
			    bcrypt.hash(pass,12,(err,hash)=>{
            //const token
						console.log(hash)
						var Newuser=new Users({name:name,email:email,pass:hash,rooms:[],latest:[],pendings:[],friends:[]});
						Newuser.save((err,user2)=>{ if(err){console.log(err); res.send({msg:"Someting Went Wrong",status:0}); }
						                            else {console.log(user2);
                                          const token=jwt.sign({_id:user2._id,email:email},secret,{  expiresIn:'1h'  })
																					res.cookie('token',token,{maxAge:3600,httpOnly:true,sameSite:true})

                                          console.log('token '+token);
																					console.log("User registered: "+name);


                                          res.send({token:token,name:user2.name,email:user2.email,msg:"Successfully Registered",status:1}); }
						});
				});
			}
	});
  });


app.post('/localSignin',(req,res,next)=>{
	const email=req.body.email;
	const pass=req.body.pass;


	 Users.findOne({email})
    .then(function(user1) {
		if(user1) return bcrypt.compare(pass,user1.pass);
    })
    .then(function(samePassword) {
         console.log(samePassword);
		 	   if(samePassword==true){
					 Users.findOne({email:email},(err,user2)=>{
						 console.log(user2);
          	 const token=jwt.sign({_id:user2._id,email:email},'access_token_secret',{expiresIn:'1h'})
          console.log('token '+token);
					res.cookie('token',token,{maxAge:3600,httpOnly:true,sameSite:true})
					res.send({token,name:user2.name,email:user2.email,msg:"Logged in successfully",status:1});  });
		 }
		 else res.send({name:"Wrong Credentials",status:0});
     })
    .catch(function(error){
        console.log("Error authenticating user: ");
				res.send({name:"Something Went Wrong",status:0});
        console.log(error);
        next();
    });
}  );






app.post('/newroom',checkAuth,(req,res)=>{

	const name=req.body.name;
	const pass=req.body.pass;
	// store to database
	Rooms.findOne({name},(err,room)=>{
	    if(err)console.log(err);
	    else if(room){ console.log('Already A Room');console.log(room); res.send({msg:"Already Existing",status:0}); }
			else{
			    bcrypt.hash(pass,12,(err,hash)=>{
            //const token
						console.log(hash)
						var Newroom=new Rooms({name,pass:hash,online:[],msgs:[]});
						Newroom.save((err,room)=>{ if(err){console.log(err); res.send({msg:"Someting Went Wrong",status:0}); }
						                            else {console.log(room);

																					console.log("Room created: "+name);
																					Users.updateOne({_id:req.userData._id},{$push:{rooms:name,latest:name}})
																					.then(update=>console.log('User room array updated'))
																					.catch(err=>console.log(err))

                                          res.send({msg:"Successfully created",status:1});
																				}
						});
				});
			}
	});
  });


app.post('/enterroom',checkAuth,(req,res,next)=>{
	const name=req.body.name;
	const pass=req.body.pass;
	Rooms.find({},(err,room)=>console.log(room))
	console.log(req.body)
	 Rooms.findOne({name})
   .then(function(room) {
			console.log(room)
		if(room)return bcrypt.compare(pass,room.pass);
		else throw Error;
    })
    .then(function(samePassword) {
         console.log(samePassword);
		 	   if(samePassword==true){
						 console.log(room);
						 Users.updateOne({_id:req.userData._id,latest:{$ne:name}},{$push:{latest:{$each:[name],$sort:-1}}})
						 .then(update=>console.log('User room array updated'))
						 .catch(err=>console.log(err))

					   res.send({status:1});
					 }
		 		 else res.send({name:"Wrong password",status:0});
     })
    .catch(function(error){
        console.log("Wrong room details");
				res.send({msg:"Wrong room details",status:0});
        console.log(error);
        next();
    });
})


router.get('/getRooms',checkAuth,(req,res)=>{
	const _id=req.userData._id
	Users.findOne({_id})
	.then(user=>{
		console.log(user)
		res.send({rooms:user.rooms,latest:user.latest,status:1})
	})
	.catch(err=>{console.log(err);	res.send({status:0})})
})

app.use('/',router)
app.use('/chat',router)
app.use('/chat/:room',router)
app.use('/enterroom',router)
app.use('/newroom',router)

router.post('/getMessages',checkAuth,(req,res)=>{
	const room=req.body.room
	console.log(room)
	Rooms.findOne({name:room})
	.then(room=>{
		if(!room)res.send({msgs:null,status:0})
		else{console.log(room)
		//	console.log(room.msgs[0].salt)

		res.send({msgs:room.msgs,status:1})
	  }
	})
	.catch(err=>{console.log(err)})
 })

app.use('/chat',router)

app.post('/editRoom',checkAuth,(req,res)=>{
	const room=req.body.room
	const _id=req.userData._id
	const newPassword=req.body.newPassword

	bcrypt.hash(newPassword,12,(err,hash)=>{
		console.log(hash)

		Rooms.updateOne({name:room},{pass:hash})
		.then(update=>{
			if(!update)res.send({status:0})
			else
			{
					console.log(update)
					Users.update({latest:room},{$pull:{latest:room}})
					.then(update=>{
						console.log(update)
						if(!update)res.send({status:0})
						else res.send({status:1})
					})
					.catch(err=>{console.log(err)})

			 }
		})
		.catch(err=>{console.log(err)})});
})


app.post('/exitRoom',checkAuth,(req,res)=>{
	const room=req.body.room
	const _id=req.userData._id
	Users.updateOne({_id},{$pull:{latest:room}})
	.then(update=>{
		if(!update)res.send({status:0})
		else{
			console.log(update)
			res.send({status:1})
	   }
	})
	.catch(err=>{console.log(err)})
		//Config(req,res,Approvals,Vendors)

})



app.post('/deleteRoom',checkAuth,(req,res)=>{
	const room=req.body.room
	Rooms.findOneAndDelete({name:room})
	.then(deleted=>{
		console.log(deleted)
		if(!deleted)res.send({status:0})
		else{
				console.log("Deleted "+deleted)
				Users.updateMany({$or:[{latest:room},{rooms:room}]},{$pull:{latest:room,rooms:room}})
				.then(update=>{
					console.log(update)
				})
				.catch(err=>{console.log(err)})
				res.send({status:1})
	   }
	})
	.catch(err=>{console.log(err)})
})


app.get('/uploads/:img/:token',(req,res)=>{
	try {
			const token = req.params.token
			const decoded = jwt.verify(token, 'access_token_secret');
	} catch (error) {
			return res.status(401).json({
					msg: 'You are not authorized!!!'
			});
	}
			res.download('./uploads/'+req.params.img)
})




// rendering front-end
const routes=['/','/signin','/signup','/newroom','/enterroom','/chat/:room']
routes.map(route=>app.use(route,express.static(path.join(__dirname, 'client','build'))))
routes.map(route=>app.get(route,(req,res)=>{res.sendFile(path.join(__dirname,'client','build','index.html'));}))


http.listen(port,()=>{console.log(`Server running on port ${port}`)});
