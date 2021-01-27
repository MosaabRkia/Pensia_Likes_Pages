import React from "react";
import HeaderUp from "./HeaderUp";
import DownDiv from "./DownDiv";
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

function SendAllData(){
  const allVotes = localStorage.getItem('allVotes')
  fetch("/Get-setVotePoints", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ allVotes })
  });
}

function justseeit(){
  const X = fetch('/getVotePoints');
  const R = X.json();
  console.log(R);
}

  return (
    <div className="App">

        <div className='contanier'>
        <HeaderUp 
        titleName='בנק הפועלים'  
        precent='18.3%' 
        title='שיעור ההחזקה שלך' />  
        </div>

        <DownDiv Profiles={Profiles}/>
        <div className='middle'>
       <button onLoad={justseeit} className='sendbutton' onClick={SendAllData}> שלח את ההצבעה שלי </button>
       </div>

    </div>
    
  );
}

export default App;

