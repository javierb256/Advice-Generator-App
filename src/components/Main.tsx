import dice from "../assets/icon-dice.svg";
import { useState, useEffect} from "react";
import axios from "axios";

function Main(){
   const [advice, setAdvice] = useState(null);
   const [id, setId] = useState(null);

   //initial advice on page mount
   useEffect(() => {
      axios.get("https://api.adviceslip.com/advice").then((response) => {
            setAdvice(response.data.slip.advice);
            setId(response.data.slip.advice)
      })
   }, [])

   //get new advice from api call
   const makeApiCall = () => {
      axios.get("https://api.adviceslip.com/advice").then((response) => {
         setAdvice(response.data.slip.advice);
         setId(response.data.slip.advice)
   })
   }

   return (
   <div className="advice-container">
   <p>ADVICE #{id}</p>
   <h1>"{advice}"</h1> 
   <hr />
   <button onClick={makeApiCall}><img src={dice} /></button>
   </div>
   );
}

export default Main;