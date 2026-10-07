import { useState } from "react"
function Forms(){
    const[name,setName]=useState("");
    return(
        <>
        <form>
            <input type="text" value={name}
            onChange={(e)=>setName(e.target.value)}></input>  
        </form>
        <p>{name}</p>
        </>
    )
}export default Forms