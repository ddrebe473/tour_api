const TourApi = ({id,image, name, price, info, remove})=> {

    return(
        <>
        <ul className="tours bg-slate-200  py-5 px-20">
                <li key={id} className="pt-5 bg-white" >
                    <div className="mx-20 px-20">
                        <img src = {image} alt={name}/>
                        <div className=" flex flex-col">
                            <h1 className="text-3xl">{name}</h1>
                            <h2 className="font-bold text-3xl py-5">${price}</h2>
                            <h4>
                                {info}
                            </h4>
                             <button className="m-3 bg-red-700 text-white border-2 border-white hover:bg-white hover:text-red-700 hover:border-2 hover:border-red-700 transition-colors duration-500 rounded self-center"onClick={()=>{remove(id)}}>Not interested</button>
                            </div>
                        </div>
                    </li>
        </ul>
        </>
    )
}   
export default TourApi