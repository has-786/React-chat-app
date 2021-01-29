const mongoose=require('mongoose');
function con(mongoose){
	//mongodb://localhost/test
	// mongodb+srv://has_786:<password>@cluster0.torm7.mongodb.net/test
//mongodb+srv://react:react@cluster0.vvcms.mongodb.net/test?retryWrites=true&w=majority
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true, useUnifiedTopology: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Database is connected');
});
}
const integer={type:Number, validate : {validator : Number.isInteger}};

const usersSchema=new mongoose.Schema({id:String,name:String,action:{type:String,default:'None'},status:{type:String,default:'Active'}})
const users=mongoose.model('users',usersSchema)

const approvalsSchema=new mongoose.Schema({vendor:String,level:integer,type:String,users:[usersSchema]})
const approvals=mongoose.model('approvals',approvalsSchema)

const vendorsSchema=new mongoose.Schema({name:String,levels:integer,status:{type:String,default:'Active'}})
const vendors=mongoose.model('vendors',vendorsSchema)

module.exports={con,approvals,vendors};

/*
 [
{
    "_id" : ObjectId("6012e7ff0925205565c49419"),
    "vendor" : "vendor 1",
    "level" : NumberInt(1),
    "type" : "Sequential",
    "users" : [
        {
            "id" : "1",
            "name" : "Elsa Ingram",
            "action" : "None",
            "status":"Active"
        },
        {
            "id" : "2",
            "name" : "Nick Holden",
            "action" : "None",
            "status":"Active"

        }
    ]
}
{
    "_id" : ObjectId("6012e87b0925205565c49429"),
    "vendor" : "vendor 1",
    "level" : NumberInt(2),
    "type" : "Round-robin",
    "users" : [
        {
            "id" : "3",
            "name" : "Paul Marsh",
            "action" : "None",
            "status":"Active"
        },
        {
            "id" : "4",
            "name" : "D Joshi",
            "action" : "None",
            "status":"Active"
        },
        {
            "id" : "5",
            "name" : "John",
            "action" : "None",
            "status":"Active"
        }
    ]
}
{
    "_id" : ObjectId("6012e9410925205565c49434"),
    "vendor" : "vendor 1",
    "level" : NumberInt(3),
    "type" : "Any-one",
    "users" : [
        {
            "id" : "2",
            "name" : "Nick Holden",
            "action" : "None",
            "status":"Active"
        },
        {
            "id" : "5",
            "name" : "John",
            "action" : "None",
            "status":"Active"
        }
    ]
}
]

*/
