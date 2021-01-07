const mongoose=require('mongoose');
function con(mongoose){
	//mongodb://localhost/test
	// mongodb+srv://has_786:<password>@cluster0.torm7.mongodb.net/test
//mongodb+srv://react:react@cluster0.vvcms.mongodb.net/test?retryWrites=true&w=majority
mongoose.connect('mongodb+srv://react:react@cluster0.vvcms.mongodb.net/test', {useNewUrlParser: true, useUnifiedTopology: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Database is connected');
});
}
const integer={type:Number, validate : {validator : Number.isInteger}};

var admissionSchema=new mongoose.Schema({name:String,desc:String,type:integer,level:String});
var admission=mongoose.model('admission',admissionSchema);

var deptsActivitySchema=new mongoose.Schema({name:String,events:Array});
var deptsActivity=mongoose.model('deptsActivity',deptsActivitySchema);


var guestsActivitySchema=new mongoose.Schema({name:String,events:Array});
var guestsActivity=mongoose.model('guestsActivity',guestsActivitySchema);


var otherActivitySchema=new mongoose.Schema({subject:String,venue:String,date:String});
var otherActivity=mongoose.model('otherActivity',otherActivitySchema);


var universitySchema=new mongoose.Schema({key:String,value:String});
var university=mongoose.model('university',universitySchema);


var resultSchema=new mongoose.Schema({type:String,link:String});
var result=mongoose.model('result',resultSchema);

var researchSchema=new mongoose.Schema({name:String,desc:String});
var researchs=mongoose.model('researchs',researchSchema);

var usefullinksSchema=new mongoose.Schema({link:String,body:String});
var usefullink=mongoose.model('usefullink',usefullinksSchema);

var newsupdateSchema=new mongoose.Schema({body:String});
var newsupdate=mongoose.model('newsupdate',newsupdateSchema);

var imgSchema=new mongoose.Schema({name:String,link:String});
var img=mongoose.model('img',imgSchema);

var pdflinksSchema =new mongoose.Schema({name:String,link:String,status:String})
var pdflinks = mongoose.model('pdflinks',pdflinksSchema);


var pastdeansSchema=new mongoose.Schema({srno:String,name:String,period:String,subject:String});
var pastdeans=mongoose.model('pastdeans',pastdeansSchema);


var organoSchema=new mongoose.Schema({designation:String,name:String,address:String,contact:String});
var organos=mongoose.model('organos',organoSchema);

var anatomyStaffSchema=new mongoose.Schema({name:String,events:Array});
var anatomystaff=mongoose.model('anatomystaff',anatomyStaffSchema);

var physiologyStaffSchema=new mongoose.Schema({name:String,events:Array});
var physiologystaff=mongoose.model('physiologystaff',physiologyStaffSchema);


var awardSchema=new mongoose.Schema({name:String,arr:Array});
var awards=mongoose.model('awards',awardSchema);

module.exports={con,admission,deptsActivity,guestsActivity,otherActivity,university,result,img,pdflinks,newsupdate,usefullink,pastdeans,organos,
anatomystaff,physiologystaff,researchs,awards};
