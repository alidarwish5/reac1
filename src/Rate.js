import React, { useState } from 'react';

function Rate() {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    alert(`Thank you for rating us ${rating} stars!\nComment: ${comment}`);
    setRating(0);
    setComment('');
  };

  return (
    <div className="container">
      <h2>Rate Our Service</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Rating:</label><br/>
          <select value={rating} onChange={e => setRating(e.target.value)} required>
            <option value="">Select rating</option>
            <option value="1">1 ⭐</option>
            <option value="2">2 ⭐⭐</option>
            <option value="3">3 ⭐⭐⭐</option>
            <option value="4">4 ⭐⭐⭐⭐</option>
            <option value="5">5 ⭐⭐⭐⭐⭐</option>
          </select>
        </div>
        <div>
          <label>Comment:</label><br/>
          <textarea value={comment} onChange={e => setComment(e.target.value)} required />
        </div>
        <button type="submit">Submit Rating</button>
      </form>
    </div>
  );
}

export default Rate;