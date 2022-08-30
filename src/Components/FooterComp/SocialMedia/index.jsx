import React from 'react';
import './styles.css'
import { RiInstagramFill, RiTwitterFill } from 'react-icons/ri';
import { FaFacebook } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className='socialMedia'>
        <RiInstagramFill className='logosSM inst'/>
        <RiTwitterFill className='logosSM twi'/>
        <FaFacebook className='logosSM face'/>
    </div>
  )
}

export default SocialMedia