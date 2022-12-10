import React from 'react'
import Cardpro from './Cardpro'

function Cardparent() {
    let products = [
        {
          title : 'One Plus Nord 2',
          price : 35000
        },
        {
          title : 'Apple 14 Pro Max',
          price : 140000
        },
        {
          title : 'Pixel 7 Pro',
          price : 70000
        },
        {
          title : 'Vivo X80 Pro',
          price : 80000
        },
        {
            title : 'Poco M2',
            price : 15000
          },
          {
            title : 'Samsung Fold',
            price : 90000
          },
          {
            title : 'Vivo X70 Pro',
            price : 70000
          },
          {
            title : 'Vivo X60 Pro',
            price : 60000
          },
          {
            title : 'One Plus 10',
            price : 65000
          },
          {
            title : 'Redmi Note 5 Pro',
            price : 15000
          }
      ]
  return (
    <div className="container">
      <div className="row">
        {
          products.map((product)=>{
            return <Cardpro title={product.title} price={product.price}></Cardpro>
          })
        }
      </div>
    </div>
  )
}

export default Cardparent