import { useState } from "react";
import './Game.css'
import Feedback from "./Feedback"

function Game() {
    const [numeroPredict, setNumeroPredict] = useState(null)
    const [numeroRandom, setNumeroRandom] = useState(0)
    const [feedback, setFeedback] =useState ("")
    
    const posiblesNumeros = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
        11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
        31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
        41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
        51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
        61, 62, 63, 64, 65, 66, 67, 68, 69, 70,
        71, 72, 73, 74, 75, 76, 77, 78, 79, 80,
        81, 82, 83, 84, 85, 86, 87, 88, 89, 90,
        91, 92, 93, 94, 95, 96, 97, 98, 99, 100
      ];
      const incognita  = () => {
        const numRandom = Math.floor(Math.random() * posiblesNumeros.length); 
        setNumeroRandom(numRandom);
        console.log(numeroRandom)
      };
      const comparar = () => {

        if (numeroRandom > predict) {
          setFeedback("El número es muy alto.");
        } else if (numeroRandom < predict) {
          setFeedback("El número es muy bajo.");
        } else {
          setFeedback("Los números son iguales.");
        }
    }
    const predict = (res) =>{
            setNumeroPredict(res.target.value)
    }
    return (
        <>
        <h1>tu numero es:</h1>
        <div className="numero">?</div>
        <input onChange={predict} type="text" />
        <button onClick={comparar}>comprobar</button>
        <button onClick={incognita}>Generar adivinanza</button>
        <Feedback message = {feedback}/>
        </>
    );
}
export default Game