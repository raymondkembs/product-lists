import '../App.css';
import Confirm from './confirm';
import React from 'react';

export default function Cart(prop){
    let totalPrice, nocount=0;
    prop.selectedCard !== undefined? nocount = prop.selectedCard.length : console.log(null)
    prop.selectedCard !== undefined? totalPrice = (
        totalPrice = prop.selectedCard.reduce((accumulator, e) => accumulator + e.price, 0)
    ):console.log(null)
    
    console.log(prop.selectedCard)

    return(
        <div className="conRight">
            <div className="cart-title">Your Cart ({nocount})</div>
            {prop.selectedCard == undefined? (
            <>
                <div className="cart-imgs">
                    <img src="/images/illustration-empty-cart.svg" alt="image of emptiness"/>
                </div>
                <div className="cart-info">Your added items will appear here</div> 
            </>
            ):(
                <div className="cart-details">
                    
                    {prop.selectedCard.map((e)=>{
                        const x = 5.01
                        const price = x * e.count;
                        return(
                            <div key={e.id} className="cart-one">
                                <p className="one-title">{e.name}</p>
                                <p><span className="span-one">{e.count}x</span><span className="span-two">@ {e.price} </span><span className="span-three"> ${e.price * e.count}</span></p>
                                <div className="cart-img">
                                    <img 
                                        src="/images/icon-remove-item.svg" 
                                        alt="delete"
                                        onClick={()=>{
                                            prop.handleImageClick(e.id);
                                        }}
                                    />
                                </div>
                            </div>
                        )
                    })}
                    
                    <div className="cart-two">
                        <p className="total-info">Order Total</p>
                        <p className="total-price">${totalPrice}</p>
                    </div>
                    <div className="cart-three">
                        <img src="/images/icon-carbon-neutral.svg" alt="img of a tree"/>
                        <p>This is a <span className="three-info">carbon-neural</span> delivery</p>
                    </div>
                        <Confirm 
                            selectedCard = {prop.selectedCard}
                            handleDisplay = {prop.handleDisplay}
                        />
                </div>
            )}
        </div>
    )
}