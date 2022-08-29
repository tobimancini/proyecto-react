import React from 'react';
import './styles.css'
import { RiFacebookFill, RiInstagramFill, RiTwitterFill } from 'react-icons/ri';

const SocialMedia = () => {
  return (
    <div className='socialMedia'>
        <RiInstagramFill className='logosSM'/>
        <RiTwitterFill className='logosSM'/>
        <RiFacebookFill className='logosSM'/>
    </div>
  )
}

export default SocialMedia