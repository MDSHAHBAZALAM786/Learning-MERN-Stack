import React from "react";
import { useContext } from "react";
import {data} from '../App'
function Compc(){
    const firstname=useContext(data)
    return(
        <>
            <h2>My name is {firstname}</h2>
        </>
    )
}
export default Compc