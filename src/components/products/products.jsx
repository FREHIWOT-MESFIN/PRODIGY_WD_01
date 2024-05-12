import React from 'react';
import './products.css';
import products from "./productsdata.js";

function Products() {
  return (
    <div className='products-section'>
        <div className="product-headline">
           <h1>Our Products</h1>
           <p>Lorem ipsum dolor sit a hbksblkns, ikjhojklm.</p>
        </div>
        <div className="products-container">
        {products.map((product, index) => (
            <div className="product" key={index}>
              <img src={product.imgUrl} alt="" />
              <div className="namerate">
                <div className="name">
                {product.name}
                </div>
                <div className="rate">
                <img src="/assets/assets/icons/rating2.png" alt="rating" />
                </div>
              </div>
              <div className="price">
                <div>
                price:
                </div> 
                <div>
                ${product.price}
                </div>
              </div>
              <p>
                  Lorem ipsum dolor,
                  sit amet consectetur adipisicing elit. Minus sunt quam ad!
              </p>
              <button className='butbtn'>Buy Now</button>
            </div>
        ))}
        </div>

    </div>
  );
}

export default Products;
