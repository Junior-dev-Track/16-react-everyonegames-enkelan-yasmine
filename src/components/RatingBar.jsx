import React from "react";

function RatingBar({ ratings }) {
  return (
    <div
      style={{
        fontSize: "15px",
        height: "40px",
        display: "flex",
        borderRadius: "20px",
        marginBottom: "80px",
        overflow: "hidden",
      }}
    >
      {ratings.map((rating) => (
        <div
          key={rating.id}
          style={{
            width: `${rating.percent}%`,
            backgroundColor: getColor(rating.id),
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {rating.percent}%
        </div>
      ))}
    </div>
  );
}

function getColor(id) {
  switch (id) {
    case 5:
      return "#FF6347";
    case 4:
      return "green";
    case 3:
      return "orange";
    case 1:
      return "red";
    default:
      return "#808080";
  }
}

export default RatingBar;
