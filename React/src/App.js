import React,{useState} from "react";
import HeaderUp from "./HeaderUp";
import DownDiv from "./DownDiv";
import Alert from './Alert'
import './HeaderUp.css'

const Profiles=[
  {img:'https://th.bing.com/th/id/OIP.UDeXygALlGOe_yH6lJHp5QHaIr?pid=Api&rs=1',
    title:'רונית אבו רמזון רוקח'
},
{img:'https://th.bing.com/th/id/OIP.UDeXygALlGOe_yH6lJHp5QHaIr?pid=Api&rs=1',
    title:'עיסאוי פריג'
},
{img:'https://th.bing.com/th/id/OIP.UDeXygALlGOe_yH6lJHp5QHaIr?pid=Api&rs=1',
    title:'דליה לב'
},
{img:'https://th.bing.com/th/id/OIP.UDeXygALlGOe_yH6lJHp5QHaIr?pid=Api&rs=1',
    title:'דליה לב'}
]



function App() { 
  
  const [alertMessage,SetAlertMessage] = useState("");

function SendAllData(){
  console.log("X")
  const allVotes = localStorage.getItem('allVotes')
  let checker = localStorage.getItem('Sent?');

  console.log("im checker " +checker)
    console.log("voted ? " +   checker === 'true' )
  console.log("show all votes " + allVotes)
  if(localStorage.getItem('Sent?') === 'true'){
    console.log("danger alert")
    SetAlertMessage(<Alert messageKind="Danger" strongSentence="Voted already !" regularSentence="You Can Only Vote Once Thank you!" />)
 return;
  }
 if(allVotes === null || allVotes === ""){
  console.log("fill alert")

    SetAlertMessage(<Alert messageKind="Fill" strongSentence="Please Rate At Least For 1 !" regularSentence="Thank you ..." />)
return;
  }

  if(localStorage.getItem('Sent?') === null){
    console.log("sucess alert")

    fetch("/Get-setVotePoints", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ allVotes })
    });

    SetAlertMessage(<Alert messageKind="Sucess" strongSentence="Sucessfully Vote!" regularSentence="Thank you for voting..." />)
   
    localStorage.setItem('Sent?',true);
    return;
  }}




  return (
    <div className="App">
{alertMessage}
        <div className='contanier'>
        <HeaderUp 
        titleName='בנק הפועלים'  
        precent='18.3%' 
        title='שיעור ההחזקה שלך' />  
        </div>

        <DownDiv Profiles={Profiles}/>
        <div className='middle'>
       <button className='sendbutton' onClick={SendAllData}> שלח את ההצבעה שלי </button>
       </div>

    </div>
    
  );
}

export default App;

