import React from "react";

const Rating = ({ rating, name }) => {
  return (
    <div className="rating rating-lg">
      <input
        type="radio"
        name={name}
        className="mask mask-star-2 bg-orange-400 transition-transform hover:-translate-y-1"
        checked={rating === 1 ? true : false}
        disabled
      />
      <input
        type="radio"
        name={name}
        className="mask mask-star-2 bg-orange-400 transition-transform hover:-translate-y-1"
        checked={rating === 2 ? true : false}
        disabled
      />
      <input
        type="radio"
        name={name}
        className="mask mask-star-2 bg-orange-400 transition-transform hover:-translate-y-1"
        checked={rating === 3 ? true : false}
        disabled
      />
      <input
        type="radio"
        name={name}
        className="mask mask-star-2 bg-orange-400 transition-transform hover:-translate-y-1"
        checked={rating === 4 ? true : false}
        disabled
      />
      <input
        type="radio"
        name={name}
        className="mask mask-star-2 bg-orange-400 transition-transform hover:-translate-y-1"
        checked={rating === 5 ? true : false}
        disabled
      />
    </div>
  );
};

export default Rating;
