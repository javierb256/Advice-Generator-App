import dice from "../assets/icon-dice.svg";

function Main(){
   return (
   <div className="advice-container">
   <p>ADVICE #000</p>
   <h1>Advice</h1>
   <hr />
   <button><img src={dice} /></button>
   </div>
   );
}

export default Main;