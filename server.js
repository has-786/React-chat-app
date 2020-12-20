const express=require('express');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const path=require('path');


const db=require('./database/db.js');
db.con(mongoose);
admission=db.admission;
deptsActivity=db.deptsActivity;
guestsActivity=db.guestsActivity;
otherActivity=db.otherActivity;
university=db.university;
result=db.result;
img=db.img;


app=express();
app.use(express.json());
app.use('/uploads',express.static(path.join(__dirname,'/uploads')));


app.get('/api/university',(req,res)=>{

			university.find({},(err,university1)=>{

				if(err)console.log(err);
				console.log(university1);
					res.send(university1);
			})

});


app.get('/api/result',(req,res)=>{

			result.find({},(err,result1)=>{
				if(err)console.log(err);
				console.log(result1);
					res.send(result1);
			})

});


app.get('/api/admission',(req,res)=>{
			let ug={type:[],other:[]};
			let pg={type:[],other:[]};

			admission.find({},(err,admission1)=>{
				if(err)console.log(err);
				console.log(admission1);

				ug.type=admission1.filter(a=>a.level=='ug' && a.type==1);
				ug.other=admission1.filter(a=>a.level=='ug' && a.type==0);
				pg.type=admission1.filter(a=>a.level=='pg' && a.type==1);
				pg.other=admission1.filter(a=>a.level=='pg' && a.type==0);

					res.send({ug,pg});
			})

});



app.get('/api/academicActivities',(req,res)=>{

			deptsActivity.find({},(err,deptsActivity1)=>{
				if(err)console.log(err);
				console.log(deptsActivity1);
				depts=deptsActivity1;
				guestsActivity.find({},(err,guestsActivity1)=>{
					if(err)console.log(err);
					console.log(guestsActivity1);
					guests=guestsActivity1;

					otherActivity.find({},(err,otherActivity1)=>{
						if(err)console.log(err);
						console.log(otherActivity1);
						others=otherActivity1;

						res.send({deptsData:depts,guestsData:guests,otherData:others});

					});
				});
			});

});



app.get('/api/gallery',(req,res)=>{


			img.find({},(err,img1)=>{
				if(err)console.log(err);
				console.log(img1);

					res.send({img:img1});
			})

});



const port=5000;
app.listen(port,()=>{console.log('Server On');});



//aabcdefff
