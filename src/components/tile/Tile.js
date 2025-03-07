import React, { useEffect } from "react";

export const Tile = (props) => {
  return (
    <div className="tile-container">
      <p className="tile-title">{props.name}</p>
      {Object.values(props.description).map((contact, index) => {
        return (
          <p key={index} className="tile">{contact}</p>
        )
      })}
      <hr></hr>
    </div>
  );
};
