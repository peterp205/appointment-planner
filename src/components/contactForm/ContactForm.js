import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input 
        type="text" 
        id="name" 
        value={name}
        onChange={setName} 
        required 
      />
      <label htmlFor="phone">Phone:</label>
      <input 
        type="tel"
        id="phone" 
        pattern="^[+]447\d{9}$"
        value={phone} 
        onChange={setPhone}
        required 
      />
      <label htmlFor="email">Email:</label>
      <input 
        type="email" 
        id="email"
        value={email}
        onChange={setEmail}
        required 
      />
      <button type="submit">Submit</button>
    </form>
  );
};

