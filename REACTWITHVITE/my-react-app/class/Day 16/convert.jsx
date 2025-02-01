import { createRoot } from "react-dom/client"
var uid="Lovely Professional University"

let num1=prompt("Enter fisrt number")
let num2=prompt("First second number")


createRoot(document.getElementById('root')).render(
    <>
    <h1>Welcome to React Using Vite</h1>
    {/* <h1>{30+50}</h1> */}
    {/* <h1>{result}</h1> */}
    <h1>Total value of ${num1} and ${num2} is {num1*num2}</h1>
    </>
)