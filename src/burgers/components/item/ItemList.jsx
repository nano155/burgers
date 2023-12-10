
import { ItemCard } from './ItemCard'
import { useHook } from '../../hooks/useHook'

export const ItemList = () => {

    const url = '/src/burgers/data/productos.json'

    const {Items} = useHook(url);

    return (
        <>
        {
            Items?.map(item =>(
                <ItemCard  key={item.id} name={item.name} precio={item.precio}/>
            ))
        }
        </>
    )
}
