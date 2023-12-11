
import { Route, Routes} from 'react-router-dom'
import { ProductsPage } from '../pages/ProductsPage'
import { ProducstDetail } from '../pages/ProducstDetail'
import { Navbar } from '../components/navbar/Navbar'

export const ProductsRoutes = () => {


  return (
    <>
      <Navbar/>
    <Routes>
        <Route path='/' element={<ProductsPage/>}/>
        <Route path='/category/:id' element={<ProductsPage/>}/>
        <Route path='/category/item/:id' element={<ProducstDetail/>}/>

    </Routes>
    </>
    
  )
}
