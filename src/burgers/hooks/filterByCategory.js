import { useEffect, useState } from "react"
import { useHook } from "./useHook"


//xavier
export const filterByCategory = (category) => {
    const [filtro, setFiltro] = useState([])
    const url = '/src/burgers/data/productos.json';
    const {Items} = useHook(url)
    // llega Items console.log(Items)
    useEffect(() => {
        console.log("renderiza")
        const result = Items?.filter(item => item.category === category);
        console.log(result)
        setFiltro(Items?.filter(item => item.category === category ))
    }, [category])
    
    return{
        filtro
    }
}
