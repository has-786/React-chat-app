
async function Config(req,res,Approvals,Vendors){

	const userId=req.body.userId;
	const vendorId=req.body.vendorId;
	const level=parseInt(req.body.level);
	const action=req.body.action;
	let levels;

	let success=1;
	let msg="Updated Successfully";

		await	Vendors.findOne({id:vendorId})
			.then(vendor=>{
				if(!vendor){msg='Vendor not found';	success=0;}
				else{
							levels=vendor.levels;
							if(vendor.status!='Active'){
								msg='Approval was completed for the vendor'
								success=0;
							}
				}
			})
			.catch(err=>{console.log(`Error ${err}`); success=0; msg='Oops!! Something went wrong'; })

      if(!success){console.log(msg);res.send({msg});return}

			if(level!=1){
												await	Approvals.findOne({vendor:vendorId,level:level-1,users:{'$elemMatch':{'action':'None'}}})
													.then(approval=>{
														if(approval){
															msg='Previous level not completed'
															success=0;
														}})
													.catch(err=>{console.log(`Error ${err}`); success=0; msg='Oops!! Something went wrong'; })

													if(!success){
														console.log(msg)
														res.send({msg})
														return
													}
					    }


			await Approvals.findOne({vendor:vendorId,level})
			.then(async approval=>{

						if(!approval){
							 msg="Vendor or level is invalid"
							 console.log(msg)
							 success=0;
						 }
						 if(!success){return new Promise((resolve,reject)=>resolve({msg}));}
						// Check whether approver or not

						let users=approval.users;
						let user=users.find(u=>u.id==userId)
						if(!user){
							 msg='Sorry!! You are not an approver'
							 console.log(msg)
							 success=0;
						}
						if(!success){console.log('nikal lo'); return new Promise((resolve,reject)=>resolve({msg}));}

						// Check if approval is already done

						 if(user.action!='None'){
							  msg='Approval was already completed'
							 console.log(msg)
							 success=0;
						}
						if(!success){console.log('nikal lo'); return new Promise((resolve,reject)=>resolve({msg}));}

						// if approval type is Sequential check if user approvals are in order or not

						if(approval.type==='Sequential')
						{
											let index=users.indexOf(user)

											// Checking for in order approval
											if(index!=0)
											{
													let prevuser=users[index-1]
													if(prevuser.action==='None')
													{
														msg='Approval is of Sequential type, wait for previous approver'
														console.log(msg)
														success=0;
													}
											 }
						 }
						 if(!success){console.log('nikal lo'); return new Promise((resolve,reject)=>resolve({msg}));}


						// If approval type is Any-one then set action for this user and -- for others




						else if(approval.type==='Any-one')
						{
							console.log('Any-one zone')

									const u=approval.users;

									for(let i=0;i<u.length;i++){
																							if(u[i].id==userId){u[i].action=action; u[i].status='Active';}
																							else {u[i].action='--'; u[i].status='--';}
																					}

								 await Approvals.updateOne({_id:approval._id},{users:u})
								 .then(update=>{
										 if(approval.level==levels)return Vendors.updateOne({id:vendorId},{status:'Executed'})
									})
								 .then(update=>{})
								 .catch(err=>{console.log(`Error ${err}`); success=0; msg='Oops!! Something went wrong';  })
						}
						if(!success){console.log('nikal lo'); return new Promise((resolve,reject)=>resolve({msg}));}

						// Update all the levels of vendor approvals and make status Terminated
						// and make action of users to -- who are yet to take action

						if(action=='Rejected')
						{
							  console.log('rejected zone')
																await Approvals.find({vendor:vendorId,level:{$gte:level},users:{$elemMatch:{action:'None'}}})
																.then(async approval=>{
																							approval.map(async a=>{
																											for(let i=0;i<a.users.length;i++)
																											{
																												if(a.users[i].id==userId && a.level==level){a.users[i].action=action; a.users[i].status='Terminated';}
																												else if(a.users[i].action=='None'){a.users[i].action='--'; a.users[i].status='Terminated'; }
																											}

																										await	Approvals.updateOne({_id:a._id},{users:a.users})
																											.then(update=>{})
																											.catch(err=>{console.log(`Error ${err}`); success=0; msg='Oops!! Something went wrong'; })
																							})

																							if(!success){ return; }

																							await Vendors.updateOne({id:vendorId},{status:'Terminated'})
																								.then(update=>{})
																								.catch(err=>{console.log(`Error ${err}`); success=0; msg='Oops!! Something went wrong'; })
																	})
																	.catch(err=>{console.log(`Error ${err}`); success=0; msg='Oops!! Something went wrong'; })

																	if(!success){console.log('nikal lo'); return new Promise((resolve,reject)=>resolve({msg}));}
						}
						else {
							console.log('Not rejected')

							await Approvals.updateOne({vendor:vendorId,level,users:{$elemMatch:{id:userId}}},{$set:{'users.$.action':action}})
							.then(async update=>{

														if(approval.level==levels && !approval.users.find(u=>(u.action=='None')))
														{
															await Vendors.updateOne({id:vendorId},{status:'Executed'})
															.then(update=>{})
															.catch(err=>{console.log(`Error ${err}`); success=0; msg='Oops!! Something went wrong'; })
														}
							})
							.catch(err=>{console.log(`Error ${err}`); success=0; msg='Oops!! Something went wrong'; })

						}
						return new Promise((resolve,reject)=>resolve({msg}));

			})

			.then(update=>{
				console.log('update: '+ JSON.stringify(update))
			   console.log(update.msg); res.send({msg:update.msg});
			})
			.catch(err=>{ console.log(`Error ${err}`); msg='Oops!! Something went wrong'; res.send({msg});})

}

module.exports={ Config};
