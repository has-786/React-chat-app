
FinalResult=(req,res,Vendors)=>{

  const vendorId=req.body.vendorId;
  Vendors.findOne({id:vendorId})
  .then(vendor=>{
      const response={Active:'The workflow is still active',Terminated:'The workflow was terminated',Executed:'The workflow was executed successfully'}
      const finalResult=response[vendor.status]
      console.log(finalResult)
      res.send({finalResult})

  })
  .catch(err=>{console.log(err); res.send({finalResult:'Some Error in finding final result'}); })
}

module.exports={FinalResult}
