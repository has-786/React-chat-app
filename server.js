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
const {multer,storage}=require('./multer.js');

const io = require('socket.io')(http, {transports: ['websocket','polling']});
const appMail='sociowe9163@gmail.com'
const appMailPassword='YAali@786'
const secret='access_token_secret'

const db=require('./database/db.js');
db.con(mongoose)
const Users=db.users
const Rooms=db.rooms
const Posts=db.posts
const Chats=db.chats

let room;


  const generate=(email1,email2)=>{
      let email4=(email1>email2)?email1:email2
      let email3=(email1<email2)?email1:email2

      return email3+'-'+email4
  }


io.sockets.on('connection',(socket)=>{

		socket.on('create', function (myroom) {
			console.log(myroom)
		  socket.join(myroom);
		});

	// When new user joins
		socket.on('user-joined',(name,room)=>{
			console.log(`user joined: ${name} on room ${room}`)
			socket.to(room).emit('user-joined',name)

		})

	// When user sends a message
		socket.on('send',message=>{

			console.log(message)
      const {email,room,roomName,link}=message

			if(message.img){
				 fs.writeFile("uploads/"+message.path, message.img,'base64',function(err) {
					 io.to(message.room).emit('receiveimg',{room:message.room,flag:message.flag,email:message.email,message:null,path:message.path,name:message.name,time:message.time})

					 if(!err){
									 Rooms.updateOne({name:message.room},{$push:{msgs:{$each:[{flag:message.flag,email:message.email,message:null,path:message.path,name:message.name,time:message.time}],$position:0}}})
						 			.then(update=>console.log(`Room ${message.room} message updated successfully`))
						 			.catch(err=>console.log(err))

									 socket.to(message.room).emit('receive',{room:message.room,flag:message.flag,email:message.email,message:null,path:message.path,name:message.name,time:message.time})
				    }
						else console.log(err)
				 });
			 }
			else {

  				socket.to(message.room).emit('receive',{room:message.room,flag:message.flag,email:message.email,message:message.msg,salt:message.salt,iv:message.iv,name:message.name,time:message.time})

  				Rooms.updateOne({name:message.room},{$push:{msgs:{$each:[{flag:message.flag,email:message.email,message:message.msg,salt:message.salt,iv:message.iv,path:message.path,name:message.name,time:message.time}],$position:0}}})
  				.then(update=>console.log(`Room ${message.room} message updated successfully`))
  				.catch(err=>console.log(err))

		   }


      Users.updateOne({email},{ $pull:{recentChat:{roomName:roomName}}   })
              .then(update=>{console.log('Chat updated')  })
              .catch(err=>console.log(err))

       Users.updateOne({email},{ $push:{recentChat:{$each:[{room,roomName,link}],$position:0}}   })
       .then(update=>{console.log('Chat updated')  })
       .catch(err=>console.log(err))

	  })

		// on disconnect
		 socket.on('disconnect',reason=>{
			 socket.disconnect(true)
			 console.log(reason)
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




app.post('/forgotPassword',(req,res)=>{
	const email=req.body.email;
	console.log(email,appMail);
	const pat=email.substring(email.lastIndexOf('.'));
	console.log(pat);
  if(pat!='.com' && pat!='.co.in' && pat!='.in'){ res.send({status:0,msg:"Email Id not correct"}); }
	else{
		Users.findOne({email:email},(err,user1)=>{
	    if(err)res.send({status:0,msg:"Something went wrong"});
		  else if(!user1)res.send({status:0,msg:"User not registered"});
			else{
					 const otp=Math.floor(Math.random()*(9999-1000)+1000);
					 const transporter = nodemailer.createTransport({service:'Gmail',secure: false,auth: {user:appMail,pass:appMailPassword},tls: {
	          rejectUnauthorized: false
	         }});
					 const mailOptions = {from: appMail, to: email, subject: 'Socio We OTP for forgot password', text:'Your otp is '+otp};
					 transporter.sendMail(mailOptions, function (err, info) { if(err){res.send({status:0,msg:"Email Id not correct"}); console.log(err);}else {  console.log(info);  res.send({status:1,msg:'An OTP is sent to this email id',otp:otp}); }});

		     	}
	   });
	}
});



app.post('/changePassword',(req,res)=>{

	const email=req.body.email;
	const password=req.body.password;
	console.log(password)
	// store to database
		bcrypt.hash(password,12,(err,hash)=>{
					console.log(hash)

					Users.updateOne({email},{pass:hash})
					.then(update=>{
						if(!update)res.send({status:0})
						else res.send({status:1})
					})
					.catch(err=>{console.log(err); res.send({status:0})})
			});
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
                                          const token=jwt.sign({_id:user2._id,email,name},secret,{  expiresIn:'1h'  })
//																					res.cookie('token',token,{maxAge:3600,httpOnly:true,sameSite:true})

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
	console.log(email,pass)

	 Users.findOne({email})
    .then(function(user1) {
      //if(!user1){user1={pass:'null'}}
			console.log(user1.pass)
		  if(user1) return bcrypt.compare(pass,user1.pass);
    })
    .then(function(samePassword) {
         console.log(samePassword);
		 	   if(samePassword==true){
					 Users.findOne({email:email},(err,user2)=>{
						 console.log(user2);
          	 const token=jwt.sign({_id:user2._id,email:email,name:user2.name},'access_token_secret',{expiresIn:'1h'})
          	 console.log('token '+token);

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
  const name=req.userData.name
	const email=req.userData.email

	Users.findOne({_id})
	.then(user=>{
		console.log(user)
		res.send({rooms:user.rooms,latest:user.latest,status:1,email,name})
	})
	.catch(err=>{console.log(err);	res.send({status:0})})
})


router.post('/getMessages',checkAuth,(req,res)=>{
	const room=req.body.room
	const page=req.body.page
	const size=10

	const firstIndex=(page-1)*size
	lastIndex=page*size
	console.log(room)
  Rooms.findOne({name:room},{msgs:{$slice:[firstIndex,lastIndex-firstIndex+1]}})
	.then(room=>{
		console.log(room)
		if(!room)res.send({msgs:null,status:0})
		else{
					let end=0
					let msgs=room.msgs
					if(msgs.length<=size)end=1
					else msgs.pop()

					res.send({msgs:msgs.reverse(),status:1,end})
	  }
	})
	.catch(err=>{console.log(err); res.send({msgs:null,status:0});})
 })


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


router.get('/getUser',checkAuth,(req,res)=>{
	res.send({name:req.userData.name,email:req.userData.email})
})



router.get('/getFriend',checkAuth,(req,res)=>{
	const _id=req.userData._id
	Users.findOne({_id})
	.then(user=>{
			res.send({name:req.userData.name,email:req.userData.email,friends:user.friends,pendings:user.pendings,sent:user.sent,status:1})
	})
	.catch(err=>{res.send({status:0})})
})


router.post('/setFriend',checkAuth,(req,res)=>{
		const _id=req.userData._id
		const name=req.userData.name
		const email=req.userData.email
		const profile=req.body.profile
		const profile2={name,email}

		const option=req.body.option
		console.log(profile)

		if(option=='Accept'){

				 Users.updateOne({_id},{$pull:{pendings:{email:profile.email}},$push:{friends:profile}})
				.then(update=>{	console.log(update); 	})
				.catch(err=>{     res.send({status:0})  })

				 Users.updateOne({email:profile.email},{$pull:{sent:{email}},$push:{friends:profile2}})
				 .then(update=>{		console.log(update); 	})
				 .catch(err=>{     })

				 console.log("Email "+email+" Profile "+profile.email)
				 const roomName=generate(email,profile.email)

				 Rooms.findOne({name:roomName})
				 .then(room=>{
					 if(room){console.log(roomName+' already'); res.send({status:1}); }
					 else {
										const Newroom=new Rooms({name:roomName,online:[],msgs:[]});
										Newroom.save((err,room)=>{ if(err){console.log(err); res.send({msg:"Someting Went Wrong",status:0}); }
																							 else if(room){
																								 console.log(roomName+' created');
																								 res.send({msg:"Successfully created",status:1});
																							}
																							else {
																								console.log('Error')
																									res.send({msg:"Someting Went Wrong",status:1});
																							}
										});
					 }
				 })

		}

		else if(option=='Disconnect' || option=='Cancel request')
		{
			Users.updateOne({_id},{$pull:{sent:{email:profile.email}},$pull:{pendings:{email:profile.email}},$pull:{friends:{email:profile.email}} })
			.then(update=>{		console.log(update);	})
			.catch(err=>{     })

			Users.updateOne({email:profile.email},{$pull:{sent:{email:email}},$pull:{pendings:{email:email}},$pull:{friends:{email:email}}} )
			.then(update=>{		console.log(update); 	res.send({status:1})	})
			.catch(err=>{     res.send({status:0})  })
		}

		else
		{
			Users.updateOne({_id},{$push:{sent:profile}})
			.then(update=>{ 	console.log(update); 			})
			.catch(err=>{       })

			Users.updateOne({email:profile.email},{$push:{pendings:profile2}})
			.then(update=>{		console.log(update); res.send({status:1})	})
			.catch(err=>{  res.send({status:0})  })
		}
})

router.post('/getProfile',checkAuth,(req,res)=>{
   Users.findOne({email:req.body.email})
  .then(user=>{if(!user)res.send({status:0}); else res.send({name:user.name,email:user.email,status:1});})
  .catch(err=>res.send({status:0}) )
})


router.post('/searchPeople',checkAuth,(req,res)=>{
    const searchstring=req.body.searchstring
    if(searchstring==='')res.send({users:[],status:1})
    else{
     Users.find({$or:[{email:{$regex:`.*${searchstring.toLowerCase()}.*`,$options:'i'}},{name:{$regex:`.*${searchstring.toLowerCase()}.*`,$options:'i'}}]})
    .then(users=>{console.log(users); res.send({users,status:1});})
    .catch(err=>res.send({status:0}) )
    }
})


router.get('/getChat',checkAuth,(req,res)=>{
   const email=req.userData.email

   Users.findOne({email})
  .then(chats=>{ console.log(chats); res.send({chats:chats.recentChat,status:1});})
  .catch(err=>res.send({status:0}) )
})


router.post('/uploadpost',checkAuth,multer({storage}).single('file'),(req,res)=>{
  const img=req.body.img
  const path=req.body.path
  const uploaderName=req.body.uploaderName
  const uploaderEmail=req.body.uploaderEmail
  const desc=req.body.desc
  const time=req.body.time
  const date=req.body.date
  console.log("Req body img "+req.body.img)

      const Newpost=new Posts({uploaderName,uploaderEmail,path,desc,time,date})
      Newpost.save((err,post)=>{
                   if(err){console.log(err); res.send({status:0,msg:'Something went wrong'}); }
                   else {console.log(post);  res.send({status:1,msg:'Your post was successfully uploaded',post}); }
      })

})

app.post('/likePost',checkAuth,(req,res)=>{
  const {email,_id,liked}=req.body
  if(liked){
    Posts.updateOne({_id},{$pull:{like:email}})
    .then(update=>{console.log(update); res.send({status:1}); })
    .catch(err=>{console.log(err); res.send({status:1}); })
  }
  else
  {
    Posts.updateOne({_id},{$addToSet:{like:email}})
    .then(update=>{console.log(update); res.send({status:1});})
    .catch(err=>{console.log(err); res.send({status:0});})
  }
})

app.post('/deletePost',checkAuth,(req,res)=>{
  const {email,_id}=req.body

    Posts.deleteOne({_id,uploaderEmail:email})
    .then(deleted=>{console.log(deleted); res.send({status:1});})
    .catch(err=>{console.log(err); res.send({status:0});})

})

app.get('/getPost',checkAuth,(req,res)=>{
      const email=req.userData.email
      Users.findOne({email})
      .then(user=>{
          const friends=user.friends
          let friendsEmail=[]
          friends.map(f=>friendsEmail.push(f.email))

          Posts.find({$or:[{uploaderEmail:{$in:friendsEmail}},{uploaderEmail:email}]})
          .then(post=>{
            let returnPost=JSON.parse(JSON.stringify(post))
            for(let i=0;i<returnPost.length;i++)
            {
              returnPost[i].likeCount=returnPost[i].like.length
              returnPost[i].liked=(returnPost[i].like.includes(email))?true:false;
            }
            console.log(returnPost)

            res.send({status:1,post:returnPost})
          })
          .catch(err=>res.send({status:0}))
      })
      .catch(err=>res.send({status:0}))

})


app.use('/',router)
app.use('/chat',router)
app.use('/chat/:room',router)
app.use('/personal/:room/',router)
app.use('/personal/:room/:emails',router)
app.use('/profile',router)
app.use('/profile/:profile',router)
app.use('/enterroom',router)
app.use('/newroom',router)

// rendering front-end
const routes=['/','/signin','/signup','/newroom','/enterroom','/chat/:room','/friends','/profile/:profile','/personal/:room/:emails']
routes.map(route=>app.use(route,express.static(path.join(__dirname, 'client','build'))))
routes.map(route=>app.get(route,(req,res)=>{res.sendFile(path.join(__dirname,'client','build','index.html'));}))

/*
const Tesseract=require('tesseract.js');
Tesseract.recognize('https://i.pinimg.com/originals/b9/5c/ec/b95cece7d94a3d54fbf9d58fa8a26357.jpg','eng',{logger:m=>console.log(m)})
.then(({data:{text}})=>console.log(text))
*/








http.listen(port,()=>{console.log(`Server running on port ${port}`)});
