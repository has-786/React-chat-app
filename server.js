const express=require('express');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const Config=require('./ConfigApproval.js').Config;
//const path=require('path');
const cors =require('cors')
app=express();
app.use(bodyParser.json());




app.use(cors());
port=5000;
const db=require('./database/db.js');

db.con(mongoose);
const Approvals=db.approvals;
const Vendors=db.vendors;

app.post('/config',(req,res)=>{


		// Check if vendor Id status is Active or not
		Config(req,res,Approvals,Vendors)


})


app.post('/final',(req,res)=>{
	const vendorId=req.body.vendorId;
	Vendors.findOne({id:vendorId}).then(vendor=>{
      const response={Active:'The workflow is still active',Terminated:'The workflow was terminated',Executed:'The workflow was executed successfully'}
			const finalResult=response[vendor.status]
			console.log(finalResult)
			res.send({finalResult})

	})
})


app.listen(port,()=>{console.log(`Server running on port ${port}`);});
