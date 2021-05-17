import React from 'react'
import {useSelector} from 'react-redux'


const Card=()=> {
    const products  = useSelector((state) => state.allProducts.products);
    let allCakes=products.data;
    console.log("AllCakes",allCakes)

    let renderList = allCakes.map((product)=>{
        const {id,name,price,image}=product;
        return(
            <div>            
            <div key={id}  class="card shadow p-3 mb-5 bg-white rounded" style={{width: "15rem" , margin:"1rem",top:"50px",marginLeft:"60px"}}>
            <img style={{height:"15em"}} src={image} class="card-img-top" alt="..."></img>
            <div class="card-body">
                <h5 class="card-title">{name}</h5>                
                <p class="card-text">Rs{price}</p>                  
            </div>
           </div> 
            </div>)
            });
    
        return(<>
            {renderList}
             </>);
}
export default Card