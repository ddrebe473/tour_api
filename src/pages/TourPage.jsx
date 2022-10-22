import {useState, useEffect} from 'react';
import content from '../content'
import TourApi from '../components/TourApi';

const url = 'https://course-api.com/react-tours-project'

const TourPage = ()=> {

    const [tours, setTours ] = useState(content)
    const removeTours = (id)=>{
    let newTours = tours.filter((location) => location.
    id !== id)
    setTours(newTours)
  }

    const getTourSpots = async () =>{
        const response = await fetch(url)
        const data = await response.json()
        setTours(data)
    }

    useEffect(()=>{
        getTourSpots()
    }, [])

    return(
        <>
        {tours.map((data)=>{
            return(<TourApi {...data} 
            remove = {removeTours}
            key ={data.id}
            />)
        })
     }
        <button className="m-3 px-20 bg-red-700 text-white border-2 border-white hover:bg-white hover:text-red-700 hover:border-2 hover:border-red-700 transition-colors duration-500 rounded self-center"onClick={()=>setTours([])}>Clear all</button>
        
        <button className=" m-3 px-20 bg-blue-700 text-white border-2 border-white hover:bg-white hover:text-blue-700 hover:border-2 hover:border-blue-700 transition-colors duration-500 rounded self-center"onClick={()=>getTourSpots()}>Reset</button>
      </>
    )
}

export default TourPage