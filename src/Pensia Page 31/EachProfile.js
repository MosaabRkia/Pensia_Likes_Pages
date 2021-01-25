import './eachProfile.css'
import React,{useState} from "react";

const isLikeRed='https://i.ibb.co/7WmRNwr/like.png';
const isLikeRegular="https://cdn4.iconfinder.com/data/icons/multimedia-75/512/multimedia-10-256.png";
const isLikeGreen ="https://i.ibb.co/TR08cmH/like.png"

export default function EachProfile(props) {

    const [liked, setLiked] = useState(false);
    const [disliked, setDisLiked] = useState(false);



    function changeLike(e){
      console.log(e.target.alt)
      let X = e.target.alt;

if(localStorage.getItem(`Voted${X}`) === null){
  localStorage.setItem(`Voted${X}`,true)
  localStorage.setItem(`CountVote${X}`, localStorage.getItem(`CountVote${X}`) + 1)
}

      if(liked === false && disliked === false)
      {
        setLiked(true)
      }

        
    }

    function checkifLiked(e){
      let X = e.target.alt;
      if(localStorage.getItem(`VotedAlready${X}`) !== null){
          if(localStorage.getItem(`VotedAlready${X}`) === true){
            setLiked(true)
          }
         else{
          setDisLiked(true)
         }
      }
     
    }
    
    function changeUnLike(e){
      let X = e.target.alt;

      
      if(liked === false && disliked === false)
      {
        setDisLiked(true)
      }
        
if(localStorage.getItem(`Voted${X}`)===null){
  localStorage.setItem(`Voted${X}`,true)
  localStorage.setItem(`CountVote${X}`, localStorage.getItem(`CountVote${X}`) - 1)
}
    }

  return(
    <li className='LineInList' id={props.index}>
      <img id='icon' src={props.img} alt={props.index}/>
    <a id='Name' href="#">  {props.title} </a>
      <img id='like' onClick={changeLike} src={liked?isLikeGreen:isLikeRegular} alt={props.index}/>
      <img  id='dislike' onClick={changeUnLike} src={disliked?isLikeRed:isLikeRegular} alt={props.index}/>
      <img src='https://th.bing.com/th/id/OIP.oDzTtuueDFk3YXDCnwBa7AHaHa?pid=Api&rs=1'className='buttonToInfo'/>
      {}
      
    </li>
  )
}
