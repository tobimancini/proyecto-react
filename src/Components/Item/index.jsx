import React from 'react'
import './styles.css';
import {useNavigate} from 'react-router-dom';

const Item = ({product}) => {

    const navigate = useNavigate();

    const handleDetail = () =>{
        navigate(`/detail/${product.id}`)
    }

  return (
    <div className='item' onClick={handleDetail}>
        <h3 className='itemTitle'>{product.title}</h3>
        <img className='itemImage' src={product.image} alt="" />
        <div className='itemPrice'>${product.price}</div>
        <div className='itemDetails' onClick={handleDetail}>Details</div>
    </div>
  )
}

export default Item