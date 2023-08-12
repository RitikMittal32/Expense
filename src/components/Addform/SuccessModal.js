import React from 'react'
import Modal from 'react-modal';
import './successmodal.css';
import {Link} from 'react-router-dom'

const SuccessModal = ({modalOpen,setModalOpen}) => {

          const customStyles = {
                    content: {
                      top: '50%',
                      left: '50%',
                      right: 'auto',
                      bottom: 'auto',
                      marginRight: '-50%',
                      transform: 'translate(-50%, -50%)',
                      backgroundColor:'#71ccca',
                      borderRadius:'12px'
                    },
                  };

          
  return (
          <Modal isOpen={modalOpen} style={customStyles}>
                    <div className='modal-inner'>
                              <label>Expense Added Successfully</label>
                              <img src='success.jpg' alt='Expense Added' className='added-image'/>
                              <Link to='/'>
                              <div className='take-home-button'>
                                <i className='fi-rr-home'></i>
                                Home
                              </div>
                              </Link>
                    </div>
          </Modal>
  )
}

export default SuccessModal
