import React, { useContext } from 'react' 
import { GlobalContext } from '../Context/Context';

function Catagorie() {
  const btn = [
    {btn :"All-products", color:"bg-sky-700"},
     {btn :"smartphones", color:"bg-sky-700"},
     {btn :"laptops", color:"bg-red-700"},
     {btn :"fragrances", color:"bg-sky-700"},
     {btn :"skincare", color:"bg-blue-700"},
     {btn :"groceries", color:"bg-red-700"},
     {btn :"home-decoration", color:"bg-sky-700"}, 
  ];
  const {filterText, setFilterText} = useContext(GlobalContext) 
  const handleBtnText = (e)=>{ 
     const text = (e.target.innerText).toLowerCase();
     if (text==="all-products") {
        setFilterText("")
     }else{
       setFilterText(text)
     }
  } 
  return (
    <div className='my-10 justify-between md:my-20 flex flex-wrap'>
      {
         btn.map((btn, index) => (
           <button key={index} onClick={handleBtnText} className={`categoryBtn mt-4 mx-2 ${btn.color}`}>{
             btn.btn == "all-prodcuts" ? "" : btn.btn
           }</button>
         ))
      }
    </div>
  )
}

export default Catagorie