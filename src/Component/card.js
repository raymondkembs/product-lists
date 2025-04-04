import { useState, useEffect } from 'react';
import './card.css';

export default function Card(prop){
    const [count, setCount] = useState(1);
    const [show, setShow] = useState(true);

    const handleDecrement = () =>{
        if(count > 1){
            setCount(count - 1);
            // prop.lighter(0);
        }
    }
    
    const handleIncrement = () => {
        setCount(count + 1);
        // prop.lighter(1);
    }
    return(
        <div className="card-con">
            <div className="card-img">
                <img className="img" src={prop.img} alt="image of a product"
                style={{
                    borderColor: show? null :"red",
                    borderSize: show? null : 2 + "px",
                    borderStyle: show? null : "solid"  
                  }}/>
                <button 
                    className="card-btn"
                    onClick={()=>{
                        prop.myText(prop.id,prop.name, prop.price, count, prop.thumbnail);
                        setShow(false)
                    }}
                >
                    {show?(
                        <>
                            <div className="alternative">
                                <img src="/images/icon-add-to-cart.svg" />
                                Add to Cart
                            </div>
                        </>
                    ):(
                        <>
                            <div
                                className="minus"
                                onClick={handleDecrement}
                            >-</div>
                            <div
                                className="count"
                            >{count}</div>
                            <div
                                className="plus"
                                onClick={handleIncrement}
                            >+</div>
                        </>
                    )}
                </button>
            </div>
            <div className="card-details">
                <p className="name">{prop.name}</p>
                <p className="description">{prop.description}</p>
                <p className="price">${prop.price}</p>
            </div>
        </div>
    )
}
