import Product from './components/Product';
import { useEffect, useState } from 'react';



export default function App() {
  const baseUrl = 'https://dummyjson.com/'
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(products);
  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(`${baseUrl}products`);
        if(response.ok) {
          const jsonData = await response.json();
          setFilteredProducts(jsonData.products)
          setProducts(jsonData.products)
        }
      } catch(error){
        console.log(error)
      }
    } 
    fetchProducts()
  }, [])
  function handleSearch(event) {
    setSearchTerm(event.target.value); 
    const searchTerm = event.target.value.toLowerCase();
    const searchProducts = products.filter((product) => {
      return (product.title.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm))
    })
    setFilteredProducts(searchProducts);
  }

  return (
    <div>
      <input type="text" 
        value={searchTerm}
        onChange={handleSearch}
      />
      <ul>
        {filteredProducts.map((product) => {
          return(
            <li key={product.id}>
              <Product product={product} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}
