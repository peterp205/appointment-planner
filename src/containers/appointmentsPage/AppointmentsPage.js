import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = (props) => {
  const [currentName, setCurrentName] = useState("");
  const [contact, setContact] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
   props.onAdd({ currentName, contact, date, time });
    setCurrentName('');
    setContact('');
    setDate('');
    setTime('');
  };

  const onChangeName = (e) => {
    setCurrentName(e.target.value);
  };
  const onChangeContact = (e) => {
    setContact(e.target.value);
  };  
  const onChangeDate = (e) => {
    setDate(e.target.value);
  };
  const onChangeTime = (e) => {
    setTime(e.target.value);
  };
  

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm 
          name={currentName}
          contacts={props.contacts}
          date={date}
          time={time}
          setName={onChangeName}
          setContact={onChangeContact}
          setDate={onChangeDate}
          setTime={onChangeTime}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList 
          contacts={props.appointments} 
        />
      </section>
    </div>
  );
};