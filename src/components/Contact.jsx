import React, { useState } from 'react';
import '../index.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [buttonText, setButtonText] = useState('Send');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) {
      alert('Please fill in all fields before sending!');
      return;
    }

    setButtonText('Sending...');

    console.log({ name, email, message });
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4 sm:p-6 lg:p-8 rounded-xl shadow-[8px_8px_16px_#0e0e0e,-8px_-8px_16px_#161616] hover:shadow-[4px_4px_8px_#0e0e0e,-4px_-4px_8px_#161616] transition-all duration-300">
      <h1 className="Poppins text-3xl sm:text-4xl lg:text-5xl mt-4 sm:mt-6 text-center sm:text-left">
        Have an Idea in Your Mind?
      </h1>
      
      <form onSubmit={handleSubmit} className="mt-8 sm:mt-10 space-y-6">
        <div>
          <input
            type="text"
            placeholder="What's your Good name?"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full text-lg sm:text-xl outline-none rounded-3xl p-4 sm:p-5 shadow-[8px_8px_16px_#0e0e0e,-8px_-8px_16px_#161616] hover:shadow-[4px_4px_8px_#0e0e0e,-4px_-4px_8px_#161616] transition-all duration-300 bg-[#1a1a1a] text-white placeholder-gray-400"
          />
        </div>
        
        <div>
          <input
            type="email"
            placeholder="What's Email Address?"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full text-lg sm:text-xl outline-none rounded-3xl p-4 sm:p-5 shadow-[8px_8px_16px_#0e0e0e,-8px_-8px_16px_#161616] hover:shadow-[4px_4px_8px_#0e0e0e,-4px_-4px_8px_#161616] transition-all duration-300 bg-[#1a1a1a] text-white placeholder-gray-400"
          />
        </div>
        
        <div>
          <textarea
            placeholder="What you want to say?"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows="4"
            className="w-full text-lg sm:text-xl outline-none rounded-3xl p-4 sm:p-5 shadow-[8px_8px_16px_#0e0e0e,-8px_-8px_16px_#161616] hover:shadow-[4px_4px_8px_#0e0e0e,-4px_-4px_8px_#161616] transition-all duration-300 bg-[#1a1a1a] text-white placeholder-gray-400 resize-none"
          />
        </div>
        
        <div className="text-center">
          <button
            type="submit"
            className="text-lg sm:text-xl outline-none px-8 sm:px-12 py-4 sm:py-5 rounded-full shadow-[8px_8px_16px_#0e0e0e,-8px_-8px_16px_#161616] hover:shadow-[4px_4px_8px_#0e0e0e,-4px_-4px_8px_#161616] transition-all duration-300 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium min-w-[200px]"
          >
            {buttonText}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
