import { createRoot } from "react-dom/client"
let clr={}
const obj=new Date()
let h=obj.getHours()
let message

if(h<=12){
    message="Good Morning"
    clr.color="Orange"
}else if(h>12 && h<=17){
    message="Good Afternoon"
    clr.color="Red"
}else{
    message="Good Night"
    clr.color="Green"
}

createRoot(document.getElementById('root')).render(
    <>
    <h1>Welcome to React using vite</h1>
    <h2 style={clr}>{message}</h2>
    </>
)