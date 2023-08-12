import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import './Addform.css';
import categories from '../../constant/addExpense';
import { addExpense } from '../../redux/actions/expenses';
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SuccessModal from './SuccessModal';

const Addform = () => {
const Categories = categories;
const [categoryOpen, setCategoryOpen] = useState(false);
const [title, setTitle] = useState("");
const [amount, setAmount]  = useState("");
const [category, setCategory] = useState();
const [modalOpen,setModalOpen] = useState(false);
const dispatch = useDispatch();
// It is used to connect with reducers of redux
const handleTitle=(e) => {
          setTitle(e.target.value)
} 

const handleAmount=(e) => {
          setAmount(e.target.value)
} 

const handleCategory=(category)=>{
  setCategory(category)
  setCategoryOpen(false)
}

const handleSubmit=()=>{
  if(title === ""||amount===""|!category){
    const notify = () => toast("Please enter valid data!");
    notify();
    return;
  }

  const data={
    title,
    amount,
    category,
    createdAt:new Date()
  };
  dispatch(addExpense(data))
  setModalOpen(true)
}
return (
    <div className='add-form'>
      <ToastContainer
          position="bottom-left"
          autoClose={1500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
      />
      <SuccessModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
      <div className='form-item'>
          <label>Title</label>
          <input placeholder='Give a name to a expenditure' value={title} onChange={(e) => handleTitle(e)} />
      </div>
      <div className='form-item'>
          <label>Amount ₹</label>
          <input value={amount} placeholder='Enter Amount' className='amount-input' onChange={(e) => handleAmount(e)} />
      </div>
      <div className='category-container-parent'>
          <div className='category'>
                    <div className='category-dropdown' onClick={()=>setCategoryOpen(!categoryOpen)}>
                              <label>{category?category.title:'Category'}</label>
                              <i class='fi fi-rr-angle-down'></i>
                    </div>
                    {
                      categoryOpen&&<div className='category-container'>
                        {Categories.map((category)=> (
                          <div className='category-item' style={{borderRight: `5px solid ${category.color}`}} key={category.id} onClick={() => handleCategory(category)}>
                            {/* Notice the use of backticks (`) instead of single quotes (') around the borderRightstyle value. This should correctly interpolate thecategory.color`  */}
                            <label>{category.title}</label>
                            <div>{category.icon}</div>
                          </div>
                        ))}
                      </div>
                    }
          </div>
      </div>
      <div className='form-add-button'>
        <div onClick={()=>handleSubmit()}>
          <label>Add</label>
          <i className='fi-rr-paper-plane'></i>
        </div>
      </div>
    </div>
  );
};

export default Addform
