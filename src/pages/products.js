import { useEffect, useState } from "react"
import axios from "axios"
import styled from "styled-components"
import '../App.css'
import HashLoader from "react-spinners/HashLoader"

export default function Products() {

   const [products, setProducts] = useState([])
   const [loading, setLoading] = useState(false)
   const getProducts = async () => {
      try {
         setLoading(true)
         let response = await axios.get('https://fakestoreapi.com/products')
         // console.log(response.data)
         setProducts(response.data)
         setLoading(false)
      } catch (error) {
         setLoading(false)
         console.log(error.message)
      }
   }
   useEffect(() => {
      getProducts()
   }, [])
   // const [sortProducts, setSortProduct] = useState([])
   // const sortProductsByDes = async () => {
   //    try {
   //       let sortResponse = await axios.get('https://fakestoreapi.com/products?sort=desc')
   //       setSortProduct(sortResponse.data)
   //    } catch (error) {
   //       console.log(error)
   //    }
   // }
   // useEffect(() => {
   //    sortProductsByDes()
   // })

   // const handleOnSort = () =>{
   //    console.log(sortProducts)
   // }


   // Styles

   const Card = styled.div`
      width : 500px;
      height : 300px;
      background-color : #F6FBF4;
      box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
      margin : 5px 5px 10px 10px;
      position: relative;
      border-left-color: yellow;
      padding : 10px;
      border-radius : 20px;
   `


   return (
      <>
         {/* <button onClick={handleOnSort}>Sort!</button> */}

         <h1>Enigma Products</h1>
         {
            loading ?
               <div className="load-page">
                  <HashLoader color="#36d7b7" />
               </div>
               :
               <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'center'
               }}>
                  {products.map((product, index) => {
                     return (
                        <Card key={index}
                           style={{ textAlign: 'center' }}>
                           <div style={{
                              display: 'flex',
                              justifyContent: 'center'
                           }}>
                              <img src={product.image} alt=''
                                 style={{
                                    width: '200px',
                                    height: '200px'
                                 }}
                              />
                              <div>
                                 <h3>{product.title}</h3>
                                 <h5>Category : {product.category}</h5>
                                 {product.price > 100 &&
                                    <div>
                                       <h5>Price : $<strike>{product.price}</strike></h5>
                                       {/* Akhmal Novanda A - Ngulon golek pengalaman Ngetan golek Howo */}
                                       <h4>${product.price - product.price * 10/100}</h4>
                                    </div>
                                 }
                                 {product.price < 100 &&
                                    <h5>Price : ${product.price}</h5>
                                 }
                              </div>
                           </div>
                           <button>Add To Chart</button>
                        </Card>

                     )
                  })}
               </div>}
      </>
   )
}