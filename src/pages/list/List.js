import React, { useState } from 'react'
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/navbar/header/Header';
import "./list.css"
import { useLocation } from 'react-router-dom';
import { DateRange } from 'react-date-range';
// import { DateRange } from 'react-date-range';
const List = () => {

  const[opendate, setOpenDate] = useState(false);
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
              {/* <span onClick={() => setOpenDate(!openDate)}>{`${form at(date[0].startDate, "MM/dd/yyyy")} to ${format(
                date[0].endDate,
                "MM/dd/yyyy"
              )}`}</span> */}

              {openDate && ( <DateRange onChange={(item) => setDate([item.selection])}
              minDate={new Date()}
              ranges={date}
              />
              )}
              
            </div>
            <div className='lsItem'>
              <label>options</label>
              
            </div>

            
          </div>

            <div className='listResult'></div>
        </div>
      </div>
    </div>
  )
}

export default List;
