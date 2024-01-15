// YourComponent.js

import React from 'react';
import PropertyCard from './propcard';

const YourComponent = () => {
  // Replace this data with your real estate properties
  const propertiesData = {
    
        "properties": [
          {
            "id": 1,
            "title": "Luxurious Mansion",
            "location": "123 Main Street, Cityville",
            "price": "$5,000,000",
            "bedrooms": 6,
            "bathrooms": 8,
            "area": "10,000 sq. ft.",
            "image": "https://wallpapercave.com/wp/wp3982615.jpg",
            "description": "A stunning mansion with panoramic views, spacious rooms, and state-of-the-art amenities."
          },
          {
            "id": 2,
            "title": "Cozy Cottage",
            "location": "456 Oak Avenue, Suburbia",
            "price": "$300,000",
            "bedrooms": 2,
            "bathrooms": 1,
            "area": "1,500 sq. ft.",
            "image": "https://wallpapercave.com/wp/wp3982615.jpg",
            "description": "A charming cottage surrounded by nature, perfect for a peaceful retreat."
          },
          {
            "id": 3,
            "title": "Modern Condo",
            "location": "789 Downtown Street, Metropolis",
            "price": "$700,000",
            "bedrooms": 3,
            "bathrooms": 2,
            "area": "2,000 sq. ft.",
            "image": "https://wallpapercave.com/wp/wp3982615.jpg",
            "description": "A sleek and contemporary condo in the heart of the city, with high-end finishes and city views."
          },
          {
            "id": 4,
            "title": "Seaside Villa",
            "location": "21 Ocean Drive, Coastal Town",
            "price": "$2,500,000",
            "bedrooms": 4,
            "bathrooms": 5,
            "area": "6,000 sq. ft.",
            "image": "https://wallpapercave.com/wp/wp3982615.jpg",
            "description": "A beautiful villa overlooking the ocean, with private beach access and lush gardens."
          },
          {
            "id": 5,
            "title": "Mountain Retreat",
            "location": "789 Pine Summit, Mountain Village",
            "price": "$800,000",
            "bedrooms": 3,
            "bathrooms": 3,
            "area": "2,500 sq. ft.",
            "image": "https://wallpapercave.com/wp/wp3982615.jpg",
            "description": "A cozy mountain retreat with breathtaking views, perfect for nature lovers."
          },
          {
            "id": 6,
            "title": "City Penthouse",
            "location": "42 Skyscraper Avenue, Downtown",
            "price": "$1,200,000",
            "bedrooms": 2,
            "bathrooms": 3,
            "area": "1,800 sq. ft.",
            "image": "https://wallpapercave.com/wp/wp3982615.jpg",
            "description": "An elegant penthouse in the heart of the city, featuring modern design and a private terrace."
          },
          {
            "id": 7,
            "title": "Rustic Farmhouse",
            "location": "567 Country Road, Countryside",
            "price": "$400,000",
            "bedrooms": 4,
            "bathrooms": 2,
            "area": "3,000 sq. ft.",
            "image": "https://wallpapercave.com/wp/wp3982615.jpg",
            "description": "A charming farmhouse surrounded by rolling hills and peaceful landscapes."
          },
          {
            "id": 8,
            "title": "Lakefront Retreat",
            "location": "876 Lakeside Lane, Lakeshore",
            "price": "$1,000,000",
            "bedrooms": 3,
            "bathrooms": 4,
            "area": "2,200 sq. ft.",
            "image": "https://wallpapercave.com/wp/wp3982615.jpg",
            "description": "A serene lakefront property with a private dock and stunning sunset views."
          },
          {
            "id": 9,
            "title": "Golf Course Estate",
            "location": "234 Fairway Drive, Golf Community",
            "price": "$3,000,000",
            "bedrooms": 5,
            "bathrooms": 6,
            "area": "8,000 sq. ft.",
            "image": "https://wallpapercave.com/wp/wp3982615.jpg",
            "description": "An impressive estate overlooking the golf course, featuring luxury amenities and spacious living areas."
          },
          {
            "id": 10,
            "title": "Ski Chalet",
            "location": "345 Snowy Peaks, Alpine Village",
            "price": "$900,000",
            "bedrooms": 4,
            "bathrooms": 3,
            "area": "2,500 sq. ft.",
            "image": "https://wallpapercave.com/wp/wp3982615.jpg",
            "description": "A cozy chalet nestled in the snowy peaks, ideal for winter sports enthusiasts."
          },
          {
            "id": 11,
            "title": "Beachfront Condo",
            "location": "567 Shoreline Blvd, Beachfront",
            "price": "$1,500,000",
            "bedrooms": 3,
            "bathrooms": 2,
            "area": "1,800 sq. ft.",
            "image": "https://wallpapercave.com/wp/wp3982615.jpg",
            "description": "A stylish beachfront condo with stunning ocean views and modern beach-inspired decor."
          },
          {
            "id": 12,
            "title": "Historic Townhouse",
            "location": "789 Heritage Lane, Historic District",
            "price": "$600,000",
            "bedrooms": 2,
            "bathrooms": 2,
            "area": "1,200 sq. ft.",
            "image": "https://wallpapercave.com/wp/wp3982615.jpg",
            "description": "A beautifully restored historic townhouse with period details and modern conveniences."
          },
          {
            "id": 13,
            "title": "Desert Oasis",
            "location": "123 Sand Dune Road, Desert",
            "price": "$750,000",
            "bedrooms": 3,
            "bathrooms": 2,
            "area": "2,000 sq. ft.",
            "image": "https://wallpapercave.com/wp/wp3982615.jpg",
            "description": "A peaceful oasis in the desert with a private pool and stunning desert views."
          },
          {
            "id": 14,
            "title": "Equestrian Estate",
            "location": "456 Stable Lane, Equestrian Community",
            "price": "$1,800,000",
            "bedrooms": 5,
            "bathrooms": 4,
            "area": "5,000 sq. ft.",
            "image": "https://wallpapercave.com/wp/wp3982615.jpg",
            "description": "An exquisite equestrian estate with stables, riding arenas, and luxurious living spaces."
          },
          {
            "id": 15,
            "title": "Sky High Penthouse",
            "location": "42 Cloud Nine Towers, Skyline District",
            "price": "$2,500,000",
            "bedrooms": 3,
            "bathrooms": 4,
            "area": "3,500 sq. ft.",
            "image": "https://wallpapercave.com/wp/wp3982615.jpg",
            "description": "An opulent penthouse with floor-to-ceiling windows and unparalleled views of the city skyline."
          },
          {
            "id": 16,
            "title": "Riverside Retreat",
            "location": "567 Riverbank Lane, Riverside",
            "price": "$950,000",
            "bedrooms": 4,
            "bathrooms": 3,
            "area": "2,300 sq. ft.",
            "image": "https://wallpapercave.com/wp/wp3982615.jpg",
            "description": "A tranquil riverside retreat with a private dock and lush green surroundings."
          },
          {
            "id": 17,
            "title": "Urban Loft",
            "location": "789 Loft Avenue, Arts District",
            "price": "$1,200,000",
            "bedrooms": 2,
            "bathrooms": 2,
            "area": "1,500 sq. ft.",
            "image": "https://wallpapercave.com/wp/wp3982615.jpg",
            "description": "A stylish urban loft with exposed brick, high ceilings, and contemporary design."
          },
          {
            "id": 18,
            "title": "Treehouse Retreat",
            "location": "123 Treetop Trail, Forest",
            "price": "$400,000",
            "bedrooms": 2,
            "bathrooms": 1,
            "area": "800 sq. ft.",
            "image": "https://wallpapercave.com/wp/wp3982615.jpg",
            "description": "A charming treehouse retreat surrounded by nature, perfect for a unique getaway."
          },
          {
            "id": 19,
            "title": "Garden Oasis",
            "location": "456 Bloomington Lane, Botanical Gardens",
            "price": "$1,000,000",
            "bedrooms": 3,
            "bathrooms": 2,
            "area": "1,800 sq. ft.",
            "image": "https://wallpapercave.com/wp/wp3982615.jpg",
            "description": "A serene garden oasis with beautifully landscaped grounds and a private courtyard."
          },
          {
            "id": 20,
            "title": "Mediterranean Villa",
            "location": "789 Olive Grove Avenue, Mediterranean Coast",
            "price": "$3,200,000",
            "bedrooms": 6,
            "bathrooms": 7,
            "area": "7,000 sq. ft.",
            "image": "https://wallpapercave.com/wp/wp3982615.jpg",
            "description": "An opulent Mediterranean villa with sea views, a private pool, and luxurious interiors."
          },
          {
            "id": 21,
            "title": "Countryside Manor",
            "location": "123 Meadow Lane, Countryside",
            "price": "$1,500,000",
            "bedrooms": 5,
            "bathrooms": 6,
            "area": "4,500 sq. ft.",
            "image": "https://wallpapercave.com/wp/wp3982615.jpg",
            "description": "A picturesque countryside manor with expansive grounds, a pond, and classic architecture."
          },
          {
            "id": 22,
            "title": "Island Paradise",
            "location": "456 Palm Beach, Tropical Island",
            "price": "$4,500,000",
            "bedrooms": 4,
            "bathrooms": 5,
            "area": "6,500 sq. ft.",
            "image": "https://wallpapercave.com/wp/wp3982615.jpg",
            "description": "An exclusive island paradise with pristine beaches, lush vegetation, and luxurious living spaces."
          },
          {
            "id": 23,
            "title": "Historic Brownstone",
            "location": "789 Heritage Street, Historic District",
            "price": "$900,000",
            "bedrooms": 3,
            "bathrooms": 3,
            "area": "2,000 sq. ft.",
            "image": "https://wallpapercave.com/wp/wp3982615.jpg",
            "description": "A beautifully preserved historic brownstone with original details and modern updates."
          },
          {
            "id": 24,
            "title": "Sunny Beach House",
            "location": "123 Sunshine Lane, Beachfront",
            "price": "$1,200,000",
            "bedrooms": 4,
            "bathrooms": 3,
            "area": "2,200 sq. ft.",
            "image": "https://wallpapercave.com/wp/wp3982615.jpg",
            "description": "A bright and sunny beach house with ocean views, spacious decks, and a private beach access."
          },
          {
            "id": 25,
            "title": "Rural Ranch",
            "location": "456 Rustic Road, Rural Area",
            "price": "$600,000",
            "bedrooms": 3,
            "bathrooms": 2,
            "area": "2,500 sq. ft.",
            "image": "https://wallpapercave.com/wp/wp3982615.jpg",
            "description": "A peaceful rural ranch with open spaces, a barn, and a cozy farmhouse."
          }
        ]
      
  };

  return (
    <div >
      {propertiesData.properties.map(property => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
};

export default YourComponent;
