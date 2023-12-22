import React, { useState } from 'react'
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/navbar/header/Header';
import "./list.css"
import { useLocation } from 'react-router-dom';
const List = () => {

  const location = useLocation()
  const [destination, setDestination] = useState(location.state.destination)
  const [date, setDate] = useState(location.state.destination)
  const [options, setOptions] = useState(location.state.destination)

  return (
    <div>
      <Navbar />
      <Header type="list"  />
      <div className='listContainer'>
        <div className='listWrapper'>
          <div className='listSearch'>
            <h1 className='lsTitle'>Search</h1>
            <div className='lsItem'>
              <label>Destination</label>
              <input placeholder='{destination}' type='text' />
            </div>
            <div className='lsItem'>
              <label>Check in Date</label>
              {/* <span>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                date[0].endDate,
                "MM/dd/yyyy"
              )}`}</span> */}
            </div>

            
          </div>

            <div className='listResult'></div>
        </div>
      </div>
    </div>
  )
}

export default List;
