import React from 'react'
import Topfold from '../../components/topfold/topfold'
import './Addexpense.css';
import Addform from '../../components/Addform/Addform';

const Addexpense = () => {
  return (
    <div className='add-expense'>
      <Topfold />
      <Addform />
    </div>
  )
}

export default Addexpense
