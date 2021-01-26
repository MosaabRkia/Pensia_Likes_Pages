const express=require('express')
const app=express();
const port = process.env.PORT ||3001;
app.use(express.static('pensiaLikes/build'))
// object array [{id:X,counter:X}]
const VoteRate =[]


app.post("/setVotePoints", (req, res) => {
  console.log(body);
  });
  
  app.get("/GetVotePoint", (req, res) => {
    res.send(VoteRate);
  });
  
  
 /* console.log(VoteUpOrDown,id)
    if (VoteRate.findIndex((e) => e.id === id) === -1)
    VoteRate.push({ id: id, score: 1 });

    else if(VoteUpOrDown === "Up"){
        let X = VoteRate.findIndex((e) => e.id === id);
        VoteRate[X].score = VoteRate[X].score + 1 
    }
    else if(VoteUpOrDown === "Down"){
        let X = VoteRate.findIndex((e) => e.id === id);
        VoteRate[X].score = VoteRate[X].score - 1
    }
    console.log(VoteRate)
*/