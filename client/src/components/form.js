import './form.css';
import React, {useState, useContext} from 'react';
import { GlobalContext } from '../context/globalState';



function Form() {
  const [title, handleChangeTitle] = useState('');
  const [date, handleChangeDate] = useState('2026-05-22T08:17');
  const [venue, handleChangeVenue] = useState('');
  const { addSingleEvent} = useContext(GlobalContext);
  
  const onSubmit = e => {
    e.preventDefault();
    const newItem = {}
    newItem.title = title;
    newItem.date = date;
    newItem.venue = venue;

    const URL = "http://localhost:3001/events/";
    fetch(URL, 
      { headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        method: "post", body: JSON.stringify(newItem)
      })
        .then(res => res.text())
        .then(res => console.log(res))
        
    addSingleEvent(newItem);  
    handleChangeTitle('');
    handleChangeDate('');
    handleChangeVenue('');
  }

  return (
    <div className="form-container">
      <form onSubmit={onSubmit} >
        <div className="form-elements">
          <h4>Create a new Event</h4>
          <p>Title</p>
          <input type="text" name="title" value={title} onChange={(e) => handleChangeTitle(e.target.value)} placeholder="Enter title..." ></input>
          <p>Date</p>
          <input type="datetime-local" name="date" placeholder={String(Date.now())} value={date} onChange={(e) => handleChangeDate(e.target.value)} min="2000-01-01" max="2030-12-31"></input>
          <p>Venue</p>
          <input type="text" name="venue" value={venue} onChange={(e) => handleChangeVenue(e.target.value)} placeholder="Enter venue..."></input>
          <button  type="submit" value="Submit" >Create</button>   
        </div>
      </form>
    </div> 
  );
}

export default Form;