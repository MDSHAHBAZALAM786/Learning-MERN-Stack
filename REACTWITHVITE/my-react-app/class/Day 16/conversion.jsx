import { createRoot } from "react-dom/client"
var uid="Lovely Professional University"

let num1=prompt("Enter in Kg")
// let num2=prompt("First Number")
let result=num1*1000

createRoot(document.getElementById('root')).render(
    // <>
    // <h1>Welcome to React Using Vite</h1>
    // <h1>{30+50}</h1>
    // <h1>{result}</h1>
    // </>
    <>
    <h1>Conversion of Kg in Gram</h1>
    <h1>{result}</h1>
    </>
)