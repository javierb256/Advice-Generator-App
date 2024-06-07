import dice from "../assets/icon-dice.svg";
import { useState, useEffect} from "react";

function Main(){
   const [advice, setAdvice] = useState([]);
   const [id, setId] = useState([]);
   let count = 0;

   
   useEffect(() => {
      makeApiCall();
   }, [])
   const makeApiCall = () => {
      fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((data) => {
         console.log(data.slip.advice)
         setAdvice(data.slip.advice);
         setId(data.slip.id)
         count +1
         console.log(count)
      })
      .catch((err) => {
         console.log(err.message)
      })
   }

   return (
   <div className="advice-container">
   <p>ADVICE #{id}</p>
   <h1>"{advice}"</h1>
   <p>{count}</p>
   <hr />
   <button onClick={makeApiCall} ><img src={dice} /></button>
   </div>
   );
}

export default Main;