import React, { useEffect } from 'react';
import { useContext } from 'react';
import { Shop } from '../../Context/ShopContext';
import ModalCompra from './ModalCompra';
import ModalLogin from './ModalLogin/index.jsx';
import ModalPurchases from './ModalPurchases';
import './styles.css';

const Modal = () => {

    const { setModalLogin, setModalCompra, setModalPurch, modalPurch, modalLogin, modalCompra, clearAll } = useContext(Shop);

    const closeModal = () => {
        setModalCompra(false);
        setModalLogin(false);
        setModalPurch(false);

        clearAll();
    }

    return (
        <div className='modalBG'>
            <div className={modalLogin===true?'modal':'modalLarge'}>
                <div className="form">
                    {
                        modalLogin === true ?
                            <ModalLogin />
                            :
                            null
                    }
                    {
                        modalCompra === true ?
                            <ModalCompra />
                            :
                            null
                    }
                    {
                        modalPurch === true ?
                            <ModalPurchases/>
                            :
                            null
                    }
                </div>

                <button className='closeModal' onClick={() => closeModal()}>X</button>
            </div>
        </div>
    )
}

export default Modal