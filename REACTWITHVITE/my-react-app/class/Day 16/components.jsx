import { createRoot } from "react-dom/client"
import './style.css'
import Comp from "./components/Comp"

createRoot(document.getElementById('root')).render(
    <>
    <h1>Welcome to react using vite</h1>
    <Comp/>
    <Comp/>
    <Comp/>
    </>
)