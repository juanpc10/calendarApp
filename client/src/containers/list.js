import './list.css';
import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/globalState';
import ApiClient from '../context/ApiClient';
import { SingleEvent } from '../components/singleEvent';

const Moment = require('moment');



function List() {
  const { items } = useContext(GlobalContext);
  const { addSingleEvent } = useContext(GlobalContext);
  
  useEffect(() => {
    ApiClient.getAllEvents()
      .then(data => data.map(item => addSingleEvent(item))); // eslint-disable-next-line
  }, []);
  const sortedArray  = items.sort((a,b) => new Moment(a.date).format('YYYYMMDD') - new Moment(b.date).format('YYYYMMDD'));
  
  return ( 
    <div className='left-side'>
      {
        sortedArray.map(item => ( <SingleEvent key={item.id} title={item.title} date={item.date} venue={item.venue}/>))
      }
    </div>
  )
}

export default List;