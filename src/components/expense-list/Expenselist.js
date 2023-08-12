import React from 'react';
import './Expenselist.css';
import Card from './card';
import { useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Expenselist = () => {
  const { expenseList: list, query } = useSelector((state) => state.expenses);

  // Filter the list based on the query
  const filterList = list.filter((item) => item.title.includes(query));

  const notifySuccess = () => toast.success('Expense Deleted');

  return (
    <div className='expense-list'>
      <ToastContainer
        position='bottom-left'
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
      />
      {filterList.length ? (
        filterList.map((item) => <Card item={item} key={item.createdAt} notifySuccess={notifySuccess} />)
      ) : (
        <div className='empty-state'>
          <img src='empty.jpg' alt='Empty List' className='empty_image' />
          <label>Uh Oh! Your expense list is empty</label>
        </div>
      )}
    </div>
  );
};

export default Expenselist;
