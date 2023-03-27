import React, { useState, useEffect } from 'react';

export default function Form() {
  const [errName, setErrName] = useState('');
  const [errEmail, setErrEmail] = useState('');
  const [errMessage, setErrMessage] = useState('');

  const handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    validateForm(name, value);
  };

  const validateForm = (fieldName, value) => {
    switch (fieldName) {
      case 'name':
        value.length < 1 ? setErrName('Name is required') : setErrName('');
        break;
      case 'email':
        //Rexgex for email validation
        !value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
          ? setErrEmail('Correct Email address is required')
          : setErrEmail('');
        break;
      case 'message':
        value.length < 1
          ? setErrMessage('Message is required')
          : setErrMessage('');
        break;

      default:
        break;
    }
  };
  return (
    <div className="container mx-auto">
      <form
        action=""
        method="get"
        id="contactForm"
        className="md:w-1/2 mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            name="name"
            type="text"
            placeholder="Your Name"
            onChange={(e) => {
              handleUserInput(e);
            }}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="email"
            id="email"
            type="email"
            placeholder="Email"
            required
            onChange={(e) => {
              handleUserInput(e);
            }}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="message"
            rows="5"
            required
            onChange={(e) => {
              handleUserInput(e);
            }}
          />
        </div>

        <p className="form-error text-red-400 mb-3">{errMessage}</p>

        <div className="flex items-center justify-between">
          <input
            className="bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            value="Submit"
          />
        </div>
      </form>
    </div>
  );
}
