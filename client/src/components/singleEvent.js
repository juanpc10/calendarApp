import './singleEvent.css';
import React from 'react';
import moment from 'moment';



export const SingleEvent = (props) => {
  let rawDate =  props.date;
  let momentDate = moment(rawDate);
  let dateHrMin = momentDate.format('h:mm a - MMMM Do, YYYY');
  let dateDayMonth = momentDate.format('Do MMM');

  return (

    <div className="event-element-container">
      <div className="event-container">
        <div className="day-month">
          <p>Next event</p>
          <h2>{dateDayMonth}</h2>
        </div>
        
        <div className="event-description">
          <h4>{props.title}</h4>
          <p>{dateHrMin}</p>
          <p>{props.venue}</p>
        </div>
      </div>

    </div>
  )
}
