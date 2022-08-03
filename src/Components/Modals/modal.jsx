import React, { useEffect } from 'react';
import { useContext } from 'react';
import { Shop } from '../../Context/ShopContext';
import ModalCompra from './ModalCompra';
import ModalLogin from './ModalLogin/index.jsx';
import './styles.css';

const Modal = () => {

    const {setModalLogin, setModalCompra, modalLogin, modalCompra} = useContext(Shop);

    const closeModal = () =>{
        setModalCompra(false);
        setModalLogin(false);
    }
    
    return (
        <div className='modalBG'>
            <div className='modal'>
                <div className="form">
                    {modalLogin===true?
                        <ModalLogin/>
                        :
                        null
                    }       
                    {
                        modalCompra===true?
                        <ModalCompra/>
                        :
                        null
                    }             
                </div>

                <button className='closeModal' onClick={()=>closeModal()}>X</button>
            </div>
        </div>
    )
}

export default Modal