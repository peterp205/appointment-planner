import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = (props) => {
 const [name, setName] = useState("");
 const [email, setEmail] = useState("");
 const [phone, setPhone] = useState("");
 const [isDuplicate, setIsDuplicate] = useState(false);

 useEffect(() => {
  const isDuplicateName = props.contacts.some(contact => contact.name === name);
  setIsDuplicate(isDuplicateName);
}, [props, name]);

const handleSubmit = (e) => {
  e.preventDefault();
  if (!isDuplicate) {
    props.onAdd({ name, email, phone });
    setName('');
    setEmail('');
    setPhone('');
  } else {
    console.log("Contact already exists");
    setTimeout(() => alert("Contact already exists"), 1000);    
  }
};

const onChangeName = (e) => {
  console.log(name);
  setName(e.target.value);
};
const onChangeEmail = (e) => {
  console.log(email);  // For testing purposes, log the email value in console.log  // Remove this line when you're ready to use it.  // In a real-world application, you may want to implement a backend API call to check for duplicates.  // For simplicity, we're just checking the local contacts array for duplicates in this example.  // In a real-world application, you should use a database or server-side storage for this purpose.
  setEmail(e.target.value);
};  
const onChangePhone = (e) => {
  console.log(phone);  // For testing purposes, log the phone value in console.log  // Remove this line when you're ready to use it.  // In a real-world application, you may want to implement a backend API call to check for duplicates.  // For simplicity, we're just checking the local contacts array for duplicates in this example.  // In a real-world application, you should use a database or server-side storage for this purpose.
  setPhone(e.target.value);
};

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm 
          handleSubmit={handleSubmit} 
          setName={onChangeName}
          setEmail={onChangeEmail}
          setPhone={onChangePhone}
          name={name}
          email={email}
          phone={phone} 
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList 
          contacts={props.contacts} 
        />
      </section>
    </div>
  );
};
