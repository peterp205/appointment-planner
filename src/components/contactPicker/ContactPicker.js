import React from "react";

export const ContactPicker = ({
  contacts,
  onChangeContact,
  value,
  name,
}) => {
  return (
    <select onChange={onChangeContact} value={value} name={name}>
      <option default value="">No Contact Selected</option>
      {contacts.map((contact, index) => {
        return (
          <option key={index} value={contact.name}>
            {contact.name}
          </option>
        );
      }
    )};
    </select>
  );
};
