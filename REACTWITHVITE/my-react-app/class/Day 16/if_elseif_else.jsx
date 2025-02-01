import { createRoot } from "react-dom/client"
const obj=new Date()
let h=obj.getHours()
let message
if(h<=12){
    message="Good Morning"
}else if(h>12 && h<=17){
    message="Good Afternoon"
}else{
    message="Good Night"
}


createRoot(document.getElementById('root')).render(
    <>
    <h1>Welcome to React using vite</h1>
    <h2>{message}</h2>
    </>
)