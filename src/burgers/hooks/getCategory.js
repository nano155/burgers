import { useEffect, useState } from 'react'
import arrayList from '../data/productos.json'

export const getCategory = () => {
   const [categoria, setCategoria] = useState([])

   const get =(arrayList)=>{
    arrayList.forEach(arreglo => {
        if( categoria.includes(arreglo.category)){
            return
        } 
        setCategoria([...categoria ,arreglo.category])
    })
   }

   useEffect(() => {
        get(arrayList)
    
   }, []) 
   return{
    categoria
   }
}
