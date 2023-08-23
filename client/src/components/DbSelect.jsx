import React from 'react'
import {BiLogoMongodb} from 'react-icons/bi'; 
import {PiFileSqlBold} from 'react-icons/pi';
import {SiSurrealdb} from 'react-icons/si';
import {SiMariadb} from 'react-icons/si';

const DbSelect = () => {
  return (
    <div className='w-[90%] md:w-[60%] mx-auto flex space-x-5'>
        <button className='dbButton'>
          <BiLogoMongodb size={40} color='#3bad11'/>
          <h6>MongoDB</h6>
        </button>
        <button className='dbButton'>
          < PiFileSqlBold size={40} color='#000000'/>
          <h6>SQL</h6>
        </button>
        <button className='dbButton'>
          < SiSurrealdb size={40} color='#b109bd'/>
          <h6>SurrealDB</h6>
        </button>
        <button className='dbButton'>
          < SiMariadb size={40} color='#000000'/>
          <h6>Mariadb</h6>
        </button>

    </div>
  )
}

export default DbSelect