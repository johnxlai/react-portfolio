import React, { useState } from 'react';

export default function Form() {
  const [errMessage, setErrMessage] = useState('');

  const handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    validateForm(name, value);
  };

  const validateForm = (fieldName, value) => {
    switch (fieldName) {
      case 'name':
        if (value.length < 1) {
          setErrMessage('Name is required');
        }

        // console.log('name', value.length >= 1);
        // nameValid = value.length >= 3;
        break;
      case 'email':
        //Rexgex for email validation
        if (!value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
          setErrMessage('Correct Email address is required');
        }
        // emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);

        break;
      case 'message':
        if (value.length < 1) {
          setErrMessage('Message is required');
        }
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
        className="w-1/2 mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
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
