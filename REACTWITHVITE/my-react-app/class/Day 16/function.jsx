import { createRoot } from "react-dom/client"
import './style.css'
import name,{place,age,demo,users,person} from './data'

createRoot(document.getElementById('root')).render(
    <>
    <h1>Welcome to react using vite</h1>
    <h2>{name}</h2>
    <h2>{place}</h2>
    <h2>{age}</h2>
    <h2>{demo()}</h2>
    <h2>{users}</h2>
    <h2>{person.fname}</h2>
    </>
)