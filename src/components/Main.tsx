import dice from "../assets/icon-dice.svg";
import divider from "../assets/pattern-divider-desktop.svg";
import { useState, useEffect} from "react";
import axios from "axios";
import '../App.css'

function Main(){
   const [advice, setAdvice] = useState(null);
   const [id, setId] = useState(null);

   //initial advice on page mount
   useEffect(() => {
      axios.get("https://api.adviceslip.com/advice").then((response) => {
            setAdvice(response.data.slip.advice);
            setId(response.data.slip.id)
      })
   }, [])

   //get new advice from api call
   const makeApiCall = () => {
      axios.get("https://api.adviceslip.com/advice").then((response) => {
         setAdvice(response.data.slip.advice);
         setId(response.data.slip.id)
   })
   }

   return (
   <div className="advice-container">
   <p>ADVICE #{id}</p>
   <h1>"{advice}"</h1> 
   <div className="divider">
      <div><img src={divider} alt="two divider columns" /></div>
   </div>
   <button onClick={makeApiCall}><img src={dice} /></button>
   </div>
   );
}

export default Main;