import { createRoot } from "react-dom/client"
import './style.css'
import Comp1 from './components/Comp1'
import Comp2 from './components/Comp2'
import Comp3 from './components/Comp3'

createRoot(document.getElementById('root')).render(
    <>
    <Comp1/>
    <Comp2/>
    <Comp3/>
    </>
)