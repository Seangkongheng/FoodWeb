import React from 'react';
import './Menu.css';
import ImageFood from '../../Assets/food.png'

const Menu = () => {
  return (
    <div className='menu-container'>
      <div className="row  ">
        <div className="col-3">
          <div className="card" style={{ width: '15rem' }}>
            <img className="card-img-top" src={ImageFood} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title text-center">Card title</h5>
              <p className="card-text text-center">Some quick example text to build on the card</p>
              <div className="button-menu">
                    <div>
                        <button className='menu-price'>$10</button>
                    </div>
                    <div>
                        <button className='menu-buynow'>By Now</button>
                    </div>
              </div>         
            </div>
          </div>   
        </div>
        <div className="col-3">
          <div className="card" style={{ width: '15rem' }}>
            <img className="card-img-top" src={ImageFood} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title text-center">Card title</h5>
              <p className="card-text text-center">Some quick example text to build on the card</p>
              <div className="button-menu">
                    <div>
                        <button className='menu-price'>$10</button>
                    </div>
                    <div>
                        <button className='menu-buynow'>By Now</button>
                    </div>
              </div>         
            </div>
          </div>
          
        </div>
        <div className="col-3">
          <div className="card" style={{ width: '15rem' }}>
            <img className="card-img-top" src={ImageFood} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title text-center">Card title</h5>
              <p className="card-text text-center">Some quick example text to build on the card</p>
              <div className="button-menu">
                    <div>
                        <button className='menu-price'>$10</button>
                    </div>
                    <div>
                        <button className='menu-buynow'>By Now</button>
                    </div>
              </div>         
            </div>
          </div>
          
        </div>
        <div className="col-3">
          <div className="card" style={{ width: '15rem' }}>
            <img className="card-img-top" src={ImageFood} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title text-center">Card title</h5>
              <p className="card-text text-center">Some quick example text to build on the card</p>
              <div className="button-menu">
                    <div>
                        <button className='menu-price'>$10</button>
                    </div>
                    <div>
                        <button className='menu-buynow'>By Now</button>
                    </div>
              </div>         
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Menu;
