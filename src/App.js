import './App.css';
import './Component/card.js';
import { useState } from 'react';
import Card from './Component/card.js';
import Cart from './Component/cart.js';
import {v4 as uuidv4} from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [show, setShow] = useState(1)
  const [lights, setLights] = useState(0)
  const [selectedCard, setSelectedCard] = useState([]);
  const [items, setItems] = useState([
    {
      id : '1',
      img: '/images/image-waffle-desktop.jpg',
      thumbnail: '/images/image-waffle-thumbnail.jpg',
      name: "waffle",
      description: "Waffle with Berries",
      price: 6.50
    },
    {
      id : '2',
      img: '/images/image-creme-brulee-desktop.jpg',
      thumbnail: '/images/image-creme-brulee-thumbnail.jpg',
      name: "Creme Brulee",
      description: "Vanilla Bean Creme Brulee",
      price: 7.00
    },
    {
      id : '3',
      img: '/images/image-macaron-desktop.jpg',
      thumbnail: '/images/image-macaron-thumbnail.jpg',
      name: "Macaron",
      description: "Macaron Mix of Five",
      price: 8.00
    },
    {
      id : '4',
      img: '/images/image-tiramisu-desktop.jpg',
      thumbnail: '/images/image-tiramisu-thumbnail.jpg',
      name: "Tiramisu",
      description: "Classic Tiramisu",
      price: 5.50
    },
    {
      id : '5',
      img: '/images/image-baklava-desktop.jpg',
      thumbnail: '/images/image-baklava-thumbnail.jpg',
      name: "Baklava",
      description: "Pistachio Baklava",
      price: 4.00
    },
    {
      id : '6',
      img: '/images/image-meringue-desktop.jpg',
      thumbnail: '/images/image-meringue-thumbnail.jpg',
      name: "Pie",
      description: "Lemon Meringue Pie",
      price: 5.00
    },
    {
      id : '7',
      img: '/images/image-cake-desktop.jpg',
      thumbnail: '/images/image-cake-thumbnail.jpg',
      name: "Cake",
      description: "Red Velvet Cake",
      price: 4.50
    },
    {
      id : '8',
      img: '/images/image-brownie-desktop.jpg',
      thumbnail: '/images/image-brownie-thumbnail.jpg',
      name: "Brownie",
      description: "Salted Caramel Brownie",
      price: 5.50
    },
    {
      id : '9',
      img: '/images/image-panna-cotta-desktop.jpg',
      thumbnail: '/images/image-panna-cotta-thumbnail.jpg',
      name: "Panna Cotta",
      description: "Vanilla Panna Cotta",
      price: 6.50
    }
  ])
  
  function lighter(on){
    setLights(on)
    console.log(on)
  }

  function myText(id,name, price, count, thumbnail){
    const light = lights;
    const myobj = {id, name, price, count, light, thumbnail}

    // const itemExists = selectedCard.some((e) => e.id === id);
    const itemExists = selectedCard.findIndex((e) => e.id === id);

    // Only add the item if it doesn't already exist in the displayedItems array
    if (itemExists == -1) {
      setSelectedCard((prevselectedCard) => [...prevselectedCard, myobj]);
      setSelectedCard((prevobj)=>{
        const updatedItems = [...prevobj];
        updatedItems[itemExists] = { ...updatedItems[itemExists], count: 10 };
        return updatedItems;
      })
    }
  }
  const handleImageClick = (id) => {
    setSelectedCard(selectedCard.filter((e) => e.id !== id));
  }
  const handleDisplay = (x) =>{
    setShow(!show);
  }

  return (
    <div className="App">
      <div className="conLeft">
        <h1>Desserts</h1>
        <div className="items">
          {items.map((e)=>{
            return (
                <Card 
                  key = {uuidv4()}
                  id = {e.id}
                  name = {e.name}
                  description = {e.description}
                  price = {e.price}
                  img = {e.img}
                  thumbnail = {e.thumbnail}
                  myText = {myText}
                  lighter = {lighter}
                />
            )
          })}
        </div>
      </div>
      {selectedCard.length > 0?
      (
        <Cart 
          selectedCard = {selectedCard}
          handleImageClick = {handleImageClick}
          handleDisplay = {handleDisplay}
        />
      ):(
        <Cart />
      )
      }
      <div 
        className="backset"
        style={{
          display: show? "none" : "block"
        }}
      ></div>
    </div>
    
  );
}

export default App;
