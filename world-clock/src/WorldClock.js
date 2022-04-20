import { useEffect, useState, useMemo } from "react";
import { FaTrash } from 'react-icons/fa';

import { FaPlus } from 'react-icons/fa';


const data = [
    {
        "id": 1,
        "country": " 🇯🇵 Japan",
        "tz": "Asia/Tokyo"
    },
    {
        "id": 2,
        "country": "🇦🇪 UAE",
        "tz": "Asia/Dubai"
    },
    {
        "id": 3,
        "country": "🇦🇺 Sydney",
        "tz": "Australia/Sydney"
    },
]
const Clock = ({id,country,tz,onRemoveClock}) => {
    
    const [currentTime, setCurrentTime] = useState(null)
    
    useEffect(() => {
        let id = setInterval(() => {
            let time = new Date().toLocaleString("en-US",{ timeZone: tz});
            setCurrentTime(time);
        },1000)
        return () => clearInterval(id)
    },)
    return ( 
       
                 
  <div className="container flex px-5 py-24 mx-auto border-inherit ">
    <div className="flex flex-wrap -mx-4 -my-8">
      <div className="py-8 px-4 lg:w-1/3">
        <div className="h-full flex items-start">
          <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
            <button className=" pb-2 mb-2 border-b-2 border-gray-200" onClick={()=>onRemoveClock(id)} ><FaTrash/></button>
           
          </div>
          <div className="flex-grow pl-6">
          <h1 className="title-font text-xl font-medium text-gray-900 mb-3">{country}</h1>
            <h2 className="tracking-widest text-xs title-font font-medium text-red-600 mb-1">{currentTime}</h2>
          </div>
        </div>
      </div>
     
     
    </div>
 

            {/* <h2>{country}</h2>
            <h3>{currentTime}</h3>
            <button onClick={()=>onRemoveClock(id)}><FaTrash/></button> */}
        </div>
     );
}


const WorldClock=({onRemoveClock})=>{
    const[currentTimezone,setCurrentTimezone]=useState("Asia/Dubai")
    const [country,setCountry]=useState([])
const handleChange=(e)=>{
    console.log(e.target.value)
    setCurrentTimezone(e.target.value)
}
const handleAdd=()=>{
   const obj=data.find((d)=>d.tz===currentTimezone);
   console.log(obj)
   setCountry((previousData)=>[obj,...previousData])

}
return(
    <div className="grid place-items-center  ">
    {/* <h1>WorldClock</h1> */}
    
<div className="flex"> 
  
<div>
<select value={currentTimezone} onChange={handleChange} className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-grey bg-grey rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-200">
                {data && data.map((timezone) => (
                    <option key={timezone.id} value={timezone.tz}>{timezone.country}</option>
                ))}
                {!data.length && (
                    <option>Not Found!</option>
                )}
                
            </select>
</div>
 <div>
      <button className=" border-black-200 h-10 float-right" onClick={handleAdd}> <FaPlus/></button>
 </div>  
           
</div>
           
           
            <div className="flex">
                {country&& country.map((countryData,i) =>(
            //        <div>
            //        <h2>{countryData.country}</h2>
            //        <h3>{new Date().toLocaleString("en-US", {timeZone: countryData.tz})}</h3>

            //    </div>  
             <Clock key={i}  
           onRemoveClock={
            (id)=>{
                const newWorldClockData=country.filter(countryData=>countryData.id !== id)
                console.log(newWorldClockData)
                setCountry(newWorldClockData)               
           }
        }
              {...countryData}/> 
              
              
              ))}
                {/* <div>
                    <h2>Japan</h2>
                    <h3>{new Date().toLocaleString("en-US", {timeZone: "Asia/Tokyo"})}</h3>

                </div>
            </div>
            <div>
                <div>
                    <h2>UAE</h2>
                    <h3>{new Date().toLocaleString("en-US", {timeZone: "Asia/Dubai"})}</h3>

                </div>
            </div>
            <div>
                <div>
                    <h2>Sydney</h2>
                    <h3>{new Date().toLocaleString("en-US", {timeZone: "Australia/Sydney"})}</h3>

                </div> */}
            </div>
    </div>
);
}

export default WorldClock;