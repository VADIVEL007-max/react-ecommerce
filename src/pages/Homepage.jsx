
import { useContext } from 'react'
import Herosection from './Herosection'
import Productsection from './Productsection'
import AppContext from '../context/AppContext'
import ProductIcon from './ProductIcon';


function Homepage() {
  const data=useContext(AppContext);
  console.log(data);
  const fetch =useContext(AppContext);
  console.log("fetch datas",fetch);
  
  
  
 
  
  return(<>

  {/* <h1>hello</h1>
  <ProductIcon/> */}
  <Herosection/>
{/* / */}
  <Productsection/>

  </>)
}

export default Homepage