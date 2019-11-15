import React from "react";

export default function Category({ image, name, description, price }) {
  return (
    <div
      className="col-lg-3 col-md-4 col-sm-6 my-2 text-center">
      <div key={name} className="card bg-dark text-black">
        <img className="card-img" src={image} alt={name}/>
        <div className="card-body bg-dark text-white">
          <h5 className="card-title">{name}</h5>
        </div>
      </div>
    </div>
  );
}
