import React, { useState } from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

function Rating() {
  const [rating, setRating] = useState(0);

  const handleClick = (value) => {
    setRating(value === rating ? 0 : value);
  };

  const renderStars = () => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} onClick={() => handleClick(i)} />);
      } else if (i - 0.5 === rating) {
        stars.push(<FaStarHalfAlt key={i} onClick={() => handleClick(i)} />);
      } else {
        stars.push(<FaStar key={i} onClick={() => handleClick(i)} style={{ opacity: 0.5 }} />);
      }
    }

    return stars;
  };

  return (
    <div>
      <p>Your Rating: {rating}</p>
      {renderStars()}
    </div>
  );
}

export default Rating;