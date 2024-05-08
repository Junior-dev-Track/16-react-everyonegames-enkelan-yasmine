import React from "react";

function RatingBar({ ratings }) {
  return (
    <div>
      {ratings.map((rating) => (
        <div key={rating.id}>
          <span>{rating.title}</span>
          <div
            style={{
              height: "20px",
              width: `${rating.percent}%`,
              backgroundColor: "blue",
              color: "white",
            }}
          >
            {rating.percent}%
          </div>
        </div>
      ))}
    </div>
  );
}

export default RatingBar;
