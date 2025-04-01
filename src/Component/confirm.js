import { useState } from 'react';
import '../App.css';

function Confirm(prop) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
        <button 
            className="cart-four"   
            variant="primary"
            onClick = {()=>{
                handleShow()
                prop.handleDisplay(0)
            }}
        >
            Confirm Order
        </button>
        {show?(
            <div className='myModal'>
                <div className="cart-confirm-img">
                    <img 
                        src="/images/icon-order-confirmed.svg" 
                        alt="confirm"
                    />
                </div>
                <div className="myModalTitle">
                    <h1>Order Confirmed</h1>
                    <p>We hope you enjoy your food!</p>
                </div>
                <div className="cart-confirm">
                        {prop.selectedCard !== undefined?
                        (prop.selectedCard.map((e)=>{
                            console.log(prop.selectedCard)
                            return(
                                <div key={e.id} className="confirm-all">
                                    <div className="confirm-one">
                                        <img 
                                            src={e.thumbnail} 
                                            alt="confirm"
                                        /> 
                                    </div>
                                    <div className="confirm-two">
                                        <p className="my-title">{e.name}</p>
                                        <p><span className="my-value">{e.count}</span><span className="my-price">@ ${e.price}</span><span className="my-addedprice">${prop.totalPrice}</span></p>  
                                    </div>
                                </div>
                            )
                        })):(null)}
                        <div className="confirm-three">
                            <p className="total-info">Order Total</p>
                            <p className="total-price">$5.0</p>
                        </div>
                </div>
                <button 
                    className="cart-four"   
                    variant="primary"
                    onClick={()=>{
                        handleClose()
                        prop.handleDisplay(1)
                    }}
                >
                    Start New Order
                </button>
            </div>
        ):(
            null
        )}
    </>
  );
}

export default Confirm;