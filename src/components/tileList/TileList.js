import React, { useEffect } from "react";
import { Tile } from "../tile/Tile.js";

export const TileList = (props) => {
  return (
    <div>
      {props.contacts.map((contact, index) => {
        const { name, ...rest } = contact;
        const description = rest;
        
        return (
          <Tile 
            key={index}
            name={name}
            description={description}
          />
        );
      })}
    </div>
  );
};