import { createRoot } from "react-dom/client"
const clr={
    color:'red',
    fontFamily:'arial'
}

createRoot(document.getElementById('root')).render(
    <>
    <h1>Welcome to React using vite</h1>
    <h1 style={clr}>Inline CSS</h1>
    </>
)