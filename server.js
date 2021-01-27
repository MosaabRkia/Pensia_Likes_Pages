const express = require("express");
const app = express();

app.use(express.static("example1/build"));
var bodyParser = require("body-parser");

app.use(bodyParser.json());

let allVotesServer = [{id:"1",score:1}];


app.post("/Get-setVotePoints", (req, res) => {
  let check = null;
  let num;
  const {allVotes} = req.body;
  let temp = JSON.parse(allVotes);
  if(temp !== null){
    for (let index = 0; index < temp.length; index++) {

      for (let index1 = 0; index1 < allVotesServer.length; index1++) {
        if(temp[index].voteUpOrDown === "Up")
          { num = 1;}
          else if(temp[index].voteUpOrDown === "Down") {num = -1}

        check = null;
        if(temp[index].id === allVotesServer[index1].id){
           check = true;
         allVotesServer[index1].score = allVotesServer[index1].score + num ;
         break;
        }
        else{
          check = false;
        }
   
      }
      if(check === false || check === null ){
   allVotesServer.push({id:temp[index].id , score: num});
      }}
  }

  
console.log(allVotesServer)
 
  })

  app.get('/getVotePoints',(req, res)=>{
    res.send(allVotesServer);
  })


const port = process.env.PORT || 3002;

app.listen(port, function () {
  console.log("listening", port);
});



/*
const listOfEmails=[
    {email:'6@gmail.com'},
    {email:'1@gmail.com'},
    {email:'2@gmail.com'},
    {email:'3@gmail.com'},
    {email:'4@gmail.com'},
    {email:'5@gmail.com'},
]

const LoginUsers =[
    {user:"tal" , password:"tal123"}
]

app.get('/get-emails',(req, res)=>{
    res.send(listOfEmails)
  })


  app.post('/add-email',(req,res)=>{
      const {email} = req.body;
      if(listOfEmails.findIndex(emaili => emaili.email === email) === -1){
        listOfEmails.push({email:email});
        res.send(listOfEmails)
      }

  })

app.post('/login',(req, res)=>{
    console.log("arrived")
    const { user, password } = req.body;
    const index = LoginUsers.findIndex(login => login.user === user && login.password === password);
    if (index === -1) {
        res.send({ login: false })
    }
    res.send({ login: true })
    
})*/