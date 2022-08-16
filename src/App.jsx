import React from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import data from "./components/data";
import "./App.css";

function App() {
  const cardsDecked = data.map((el) => {
    return (
      <Card
        key={el.id}
        imgSource={el.imageUrl}
        location={el.location}
        mapsUrl={el.googleMapsUrl}
        title={el.title}
        startDate={el.startDate}
        endDate={el.endDate}
        description={el.description}
      />
    );
  });

  return (
    <div className="App">
      <Navbar />
      <section className="cardss">{cardsDecked}</section>
    </div>
  );
}

export default App;
