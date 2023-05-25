import { products as initialProducts } from "./assets/mocks/products.json"
import { Products } from "./components/Products"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { useFilter } from "./hooks/useFilters"


function App() {
  const {filterProducts} = useFilter()
  const filteredProducts = filterProducts(initialProducts)

  return(
    <>
      <Header/>
      <Products products={filteredProducts}/>
      <Footer />
    </>
  )
}
 
export default App
