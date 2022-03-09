import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";

export default function App() {
  const Data = data.map((item) => {
    return <Card key={item.id} item={item} />;
  });
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <section className="cards">{Data}</section>
    </div>
  );
}
