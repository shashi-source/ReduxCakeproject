import axios from 'axios';
import React,{useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Card from './Card';
import Carousel from './Carousel'
import {setProducts} from '../service/action/ProductAction';


const Home=()=> {
    const products  = useSelector((state) => state);
     const dispatch = useDispatch();

    const fetchProduct= async ()=>{
        const response= await axios("https://apifromashu.herokuapp.com/api/allcakes").catch((err)=>{
            console.log("Error",err);
        });
        dispatch(setProducts(response.data));
    }
    useEffect(()=>{
        fetchProduct();
    },[]);

    console.log("Products",products)

    return(
        <div>
          <Carousel/>  
        <div className="row">
            <Card/>
        </div>
        </div>
    )
}

export default Home
