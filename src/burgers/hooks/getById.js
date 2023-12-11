import arrayList from '../data/productos.json'

export const getById = (id) => {
 
    return arrayList.find(element => element.name === id )

}
