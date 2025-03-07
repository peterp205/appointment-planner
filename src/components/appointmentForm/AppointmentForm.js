import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker"

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Appointment title</label>
      <input
        id="title"
        type="text"
        name="title"
        placeholder="Title"
        value={title}
        onChange={setTitle}
        required
      />
      <ContactPicker 
        contacts={contacts} 
        onChangeContact={setContact}
        value={contact}
        name="contact"
      />
      <label htmlFor="date">Date</label>
      <input
        id="date"
        type="date"
        name="date"
        value={date}
        onChange={setDate}
        min={getTodayString()}
        required
      />
      <label htmlFor="time">Meeting time</label>
      <input
        id="time"
        type="time"
        name="time"
        value={time}
        onChange={setTime}
        required
      />
      <button type="submit">Add Appointment</button>
    </form>
  );
};
