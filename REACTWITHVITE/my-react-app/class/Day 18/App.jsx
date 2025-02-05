import { createContext } from "react"
import Compc from './components/Compc'
export const data=createContext()
const fname="Md Shahbaz Alam"
function App(){
  return(
    <>
      <data.Provider value={fname}>
        <Compc />
      </data.Provider>
    </>
  )
}
export default App