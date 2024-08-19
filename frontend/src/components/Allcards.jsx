import React, { useEffect, useState } from 'react';
import arrow from "../assets/arrow.png";
import axios from "axios";
import "../App.css";
import Card from "./Card.jsx";

function Allcards() {
  const [cards, setCards] = useState([]);
  const [input, setInput] = useState("");
  const [displayCards, setDisplayCards] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/card/getCards")
      .then(res => {
        console.log(res);
        setCards(res.data.data);
        setDisplayCards(res.data.data); // Set initial display cards
      })
      .catch(err => {
        console.error("Fetch Failed", err);
      });
  }, []);

  function handleChange(event) {
    setInput(event.target.value);
  }

  function handleSearch() {
    if (input) {
      const searchedCards = cards.filter((ele) =>
        ele.title.toLowerCase().includes(input.toLowerCase())
      );
      setDisplayCards(searchedCards);
    } else {
      setDisplayCards(cards);
    }
  }

  return (
    <div id='allcards'>
      <div className='div1'>
        <h1>How Can We Help?</h1>
        <div className='image'>
          <input
            type="text"
            placeholder='Search'
            value={input}
            onChange={handleChange}
          />
          <img
            src={arrow}
            alt="Search"
            onClick={handleSearch}
          />
        </div>
      </div>
      <div className='div2'>
        <div className='cards'>
          {displayCards.map((ele) => (
            <Card title={ele.title} description={ele.description} key={ele.id} />
          ))}
          {displayCards.length==0 && <p style={{color:"red"}}>Card Not Found Search Again</p>}
        </div>
      </div>
    </div>
  );
}

export default Allcards;
