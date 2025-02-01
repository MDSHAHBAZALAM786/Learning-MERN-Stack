import { createRoot } from "react-dom/client"
const obj=new Date()
let h=obj.getHours()
let m=obj.getMinutes()
let s=obj.getSeconds()


createRoot(document.getElementById('root')).render(
    <>
    <h1>Welcome t React using vite</h1>
    <h2>{h}:{m}:{s}</h2>
    </>
)