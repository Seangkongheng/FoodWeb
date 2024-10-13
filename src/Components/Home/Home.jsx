import React from 'react'
import BackgroundImage from '../../Assets/Artboard 1.png'
import HomeCss from '../Home/Home.css'
import HomeImage from '../../Assets/food.png';
const Home = () => {
  return (
    <div className='home-container'>
        <div className="home-blog">
            <div className="col-7 title-container">
                <h1>JUST COME TO <br />FOODED & ORDER</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae aperiam deleniti perspiciatis accusantium,  sunt temporibus nostrum? Id.</p>
                <div className="button-home-container mt-5">
                    <button className='button-order'>Order Now</button>
                    <button className='button-explore'>Explore More</button>
                </div>
            </div>  
            <div className="col-6 image-container">
                <img src={HomeImage} alt="" />
            </div> 
        </div>
    </div>
  )
}

export default Home