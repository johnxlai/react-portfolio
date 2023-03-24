import React from 'react';

export default function Form() {
  return (
    <div className="container mx-auto">
      <form className="w-1/2 mx-auto">
        <div className="flex flex-col">
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email">Email address:</label>
          <input type="email" name="email" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="message">Message:</label>
          <textarea name="message" rows="5" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
