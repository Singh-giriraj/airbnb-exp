import React from "react";
import image from "../images/swim.png";
import star from "../images/star.png";
export default function Card(props) {
  let availability;
  if (props.item.openSpots === 0) {
    availability = "SOLD OUT!";
  } else if (props.item.location === "Online") {
    availability = "Online";
  }
  return (
    <div className="card">
      <img src={image} alt="" className="card--img" />
      <div className="card--stats">
        <img src={star} alt="" className="star" />
        {props.item.stats.rating}{" "}
        <span>
          ({props.item.stats.reviewCount}) -{props.item.location}
        </span>
      </div>
      <p className="card--title">{props.item.title}</p>
      <p className="card-text">
        <strong>From ${props.item.price}</strong> / person
      </p>
      <div className="card--availabilty">{availability}</div>
    </div>
  );
}
