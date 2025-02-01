import { createRoot } from "react-dom/client"
import x from './assets/a3.jpg'

createRoot(document.getElementById('root')).render(
    <>
    <h1>Welcome to React using vite</h1>
    <img src={x}/>
    </>
)