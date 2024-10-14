import { BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import { useState } from "react"
function Home() {
const [nombre,setNombre] = useState("");

const nom = (res) =>{
    setNombre(res.target.value)
}
const guarNom = () =>{
console.log(nombre)
}
    return (
      <>
      <input onChange={nom} type="text"/>
      <button onClick={guarNom} href="/Game" ><a href="/Game">comenzemos el juego</a></button>
      </>
    )
  }
  
  export default Home