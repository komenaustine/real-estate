// PropertyCard.js

import React from 'react';


const PropertyCard = ({ property }) => {
  return (
    <div className="property-card">
      <img src={property.image} alt={property.title} />
      <div className="property-details">
        <h2>{property.title}</h2>
        <p><strong>Location:</strong> {property.location}</p>
        <p><strong>Price:</strong> {property.price}</p>
        <p><strong>Bedrooms:</strong> {property.bedrooms}</p>
        <p><strong>Bathrooms:</strong> {property.bathrooms}</p>
        <p><strong>Area:</strong> {property.area}</p>
        <p>{property.description}</p>
      </div>
    </div>
  );
};

export default PropertyCard;
