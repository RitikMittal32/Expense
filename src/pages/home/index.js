import React from 'react'
import './home.css';
import Topfold from '../../components/topfold/topfold';
import Expenselist from '../../components/expense-list/Expenselist';

const Home = () => {
  return (
    <div className='home'>
        <Topfold />
        <Expenselist />
    </div>
  )
}

export default Home
