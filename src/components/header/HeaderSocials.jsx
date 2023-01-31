import React from 'react'
import {FaGithub} from 'react-icons/fa'
import {FaTelegram} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://github.com/SurajSulten" target='_blank'><FaGithub /></a>
        <a href="https://t.me/suraj_sd/" target='_blank'><FaTelegram /></a>
        <a href="https://instagram.com/suraj_sultonov?igshid=Zjc2ZTc4Nzk=" target='_blank'><BsInstagram /></a>
    </div>  
  )
}

export default HeaderSocials