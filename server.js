const express=require('express');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const path=require('path');
const cors =require('cors')

const db=require('./database/db.js');
db.con(mongoose);
admission=db.admission;
deptsActivity=db.deptsActivity;
guestsActivity=db.guestsActivity;
otherActivity=db.otherActivity;
university=db.university;
result=db.result;
img=db.img;
pdflinks=db.pdflinks;
usefullink=db.usefullink;
newsupdate=db.newsupdate;
pastdeans=db.pastdeans;
organos=db.organos;
anatomystaff=db.anatomystaff;
physiologystaff=db.physiologystaff;
researchs=db.researchs;
awards=db.awards;


app=express();
app.use(express.json());
app.use('/uploads',express.static(path.join(__dirname,'/uploads')));
app.use(cors());
app.get('/api/pdflinks',(req,res)=>{

	pdflinks.find({},(err,pdflinks1)=>{

		if(err)console.log(err);
		console.log(pdflinks1);
			res.send(pdflinks1);
	})
});

app.get('/api/university',(req,res)=>{



			university.find({},(err,university1)=>{

				if(err)console.log(err);
				console.log(university1);
					res.send(university1);
			})

});

app.get('/api/awards',(req,res)=>{

			awards.find({},(err,awards1)=>{

				if(err)console.log(err);
				console.log(awards1);
					res.send({awards:awards1});
			})

});



app.get('/api/research',(req,res)=>{
	var journals=[],resources=[];

	researchs.find({},(err,research1)=>{
		console.log(research1)
		 journals=research1.filter(r=>(r.status==='journals'));
		console.log(journals);
		 resources=research1.filter(r=>(r.status==='resources'));
			pdflinks.findOne({status:'publication'},(err,publication)=>{
				pdflinks.find({status:'eduvideo'},(err,eduvideo)=>{
					pdflinks.find({status:'usefullinks'},(err,usefullinks)=>{
						res.send({research1,publication,eduvideo,usefullinks});
						console.log(journals,resources,publication,eduvideo,usefullinks)
				})
			})
	 })
 })

});



app.get('/api/hospital',(req,res)=>{




	awards.find({},(err,awa)=>{
			if(awa){console.log(awa);}
	})

	awards.updateMany({},{status:'Anatomy'},(err,awa)=>{
		if(err)console.log("error: ",err);
			if(awa){console.log("Updated ",awa);}
	})

			pdflinks.findOne({status:'hospital'},(err,hospital)=>{

				if(err)console.log(err);
				console.log(hospital);
				res.send({hospital:hospital.link});
			})

});


app.get('/api/teaching_staff',(req,res)=>{

	anatomystaff.find({},(err,anatomyStaff1)=>{
		if(err)console.log(err);
		console.log(anatomyStaff1);
		physiologystaff.find({},(err,physiologyStaff1)=>{
			if(err)console.log(err);
			console.log(physiologyStaff1);

			res.send({AnatomyDept:anatomyStaff1,PhysiologyDept:physiologyStaff1});


		});
	});

});


app.get('/api/about',(req,res)=>{

			pastdeans.find({},(err,pastdeans1)=>{
				organos.find({},(err,organos1)=>{
						pdflinks.findOne({status:'committee'},(err,committee1)=>{
								pdflinks.findOne({status:'hospital'},(err,hospital1)=>{
									console.log(pastdeans1);
									console.log(organos1);
									console.log(committee1);
									console.log(hospital1);


							 	res.send({deans:pastdeans1,organogram:organos1,committees:committee1.link,hospital:hospital1.link});
							})
					 })
				})
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

app.get('/api/getDataForHome',(req,res)=>{




			usefullink.find({},(err,usefulLink1)=>{
				if(err)console.log(err);
				console.log(usefulLink1);
					newsupdate.find({},(err,newsUpdate1)=>{
						if(err)console.log(err);
						console.log(newsUpdate1);
							res.send({usefulLink:usefulLink1,newsUpdate:newsUpdate1});
						})
			})
});

app.get('/api/gallery',(req,res)=>{


			img.find({},(err,img1)=>{
				if(err)console.log(err);
				console.log(img1);

					res.send({img:img1});
			})

});
/*
var bodyParser = require('body-parser');
var mongoose=require('mongoose');
var express=require('express');
path=require('path');

app=express();

//app.use(express.static(path.join(__dirname, 'client','build')));

app.get('*',(req,res)=>{
	res.sendFile(path.join(__dirname,'client','build','index.html'));
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/*
require('./server/security/passport.js')(passport);
require('./server/routes/mainRoutes.js')(app,passport,bcrypt,nodemailer,randomstring);


const arr=[1,2,3,5,4];
const res=arr.reduce((total,num)=>{return total+num});
console.log(res);
arr.sort((a,b)=>{return (a<b)?1:(a>b)?-1:0; });
console.log(arr);
*/
var port=   5000;

app.listen(port,()=>{console.log('Server On');});



//aabcdefff
