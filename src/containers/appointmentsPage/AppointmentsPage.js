import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = (props) => {
  const [currentName, setCurrentName] = useState("Peter");
  const [contact, setContact] = useState("Jhon");
  const [date, setDate] = useState("08/03/2025");
  const [time, setTime] = useState("14:00");

  const handleSubmit = (e) => {
    e.preventDefault();
   props.addAppointment({ currentName, contact, date, time });
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
        <Appoint
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
      </section>
    </div>
  );
};