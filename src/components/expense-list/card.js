import React from 'react'
import './card.css';
import moment from 'moment';
import { deleteExpense } from '../../redux/actions/expenses';
import { useDispatch } from 'react-redux';

const Card = ({item, notifySuccess}) => {
  const time = moment(item.createdArt).fromNow();
  const dispatch = useDispatch();
  const handleDelete=()=>{
    dispatch(deleteExpense(item));
    notifySuccess();
  }
  return (
    <div className='card' style={{borderRight: `6px solid ${item.category.color}`}}>
         <div className='card-image-container'>
          <div className='card-image'>{item.category.icon}</div>
         </div>
        <div className='card-info'>
          <label className='card-title'>{item.title}</label>
          <label className='card-time'>{time}</label>
        </div>
        <div className='card-right'>
          <div>
            <label className='card-amount'>₹ {item.amount}</label>
          </div>
          <div className='delete-icon' onClick={()=>handleDelete()}><i className='fi-rr-trash'></i></div>
        </div>
    </div>
  )
}

export default Card
