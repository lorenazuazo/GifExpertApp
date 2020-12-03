
import { useEffect, useState } from "react"
import { getGif } from "../helpers/getGif";


export const useFetchGifs = (categoria) => {
    
   const [state, setState] = useState({
       data:[],
       loading:true
   });
    useEffect(()=>{
        getGif(categoria)
            .then(img =>(
                // el tiemaut no va solo fue una prueba
                setTimeout(()=>(
                    setState({
                        data:img,
                        loading:false
                    })
                ),3000)
                
            ))
    },[categoria]);

return state;
}


