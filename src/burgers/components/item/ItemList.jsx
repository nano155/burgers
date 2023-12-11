
import { ItemCard } from './ItemCard'
// import { useHook } from '../../hooks/useHook'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Items from '../../data/productos.json'

export const ItemList = () => {
    // const url = '/src/burgers/data/productos.json'
    // const {Items} = useHook(url)

    const [productos, setProductos] = useState([])
    const { id } = useParams()

    useEffect(() => {
        const datos = async () => {
            try {
                const data = await new Promise(resolve => {
                        resolve(id ? Items?.filter(item => item.category === id) : Items)                  
                })
                setProductos(data)
            } catch (error) {
                console.log('Error', error);

            }
        }
        datos()
    }, [id])



    return (
        <>
            {
                productos?.map(item => (
                    <ItemCard key={item.id} {...item} />
                ))
            }
        </>
    )
}
