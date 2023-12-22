import React from 'react'
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/navbar/header/Header';
import "./list.css"
const List = () => {
  return (
    <div>
      <Navbar />
      <Header type="list"  />
      <div className='listContainer'>
        <div className='listWrapper'>
          <div className='listSearch'>
            <h1 className='lsTitle'>Search</h1>
            <div className='listResult'></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default List;
