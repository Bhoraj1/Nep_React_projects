import ItemsQuotes from "./components/ItemsQuotes"
import {useState} from "react"

function App() {

const [quotes ,seQuotes] = useState([]);
const [isFetched, setIsFetched] = useState(false);
 
const fetchData = ()=>{
  if(!isFetched){
  return fetch("https://jsonguide.technologychannel.org/quotes.json")
  .then((Response) => Response.json())
  .then((data) => {
   seQuotes(data);
   setIsFetched(true);
  })
}
else{
  seQuotes([])
  setIsFetched(false);
}
}

  return (
    <>

       <div className="flex justify-center">
        <button className="p-3 m-3 px-6 rounded-2xl bg-cyan-600 text-white cursor-pointer"
         onClick={fetchData}>{isFetched ? "Unfetch Quotes" :"Fetch Quotes"}</button>
           </div>
         <div>

        {
          quotes.map((info) =>
             <ItemsQuotes author={info.from} quotes={info.text} /> )
        }
        
       </div>
       </>
  )


}

export default App
