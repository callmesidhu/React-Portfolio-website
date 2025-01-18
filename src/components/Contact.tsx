// src/components/Contact.js
import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="p-5">
      <h2 className="text-2xl font-semibold">Contact Me</h2>
      <form className="mt-4 space-y-4">
        <label className="block">
          Name:
          <input type="text" name="name" className="block w-full border border-gray-300 rounded p-2 mt-1" />
        </label>
        <label className="block">
          Email:
          <input type="email" name="email" className="block w-full border border-gray-300 rounded p-2 mt-1" />
        </label>
        <label className="block">
          Message:
          <textarea name="message" className="block w-full border border-gray-300 rounded p-2 mt-1"></textarea>
        </label>
        <button type="submit" className="bg-blue-600 text-white p-2 rounded">Send</button>
      </form>
    </section>
  );
};

export default Contact;