import React from 'react'
import {BsLinkedin,BsInstagram,BsGithub,BsWhatsapp,BsFillTelephoneInboundFill} from 'react-icons/bs'
import {BiLogoGmail} from 'react-icons/bi'
const SocialMedia = () => {
  return (
    <div className ="app__social">
        <div><a href="https://www.instagram.com/ishumiglani0/"><BsInstagram/></a></div>
        <div><a href="https://www.linkedin.com/in/ishu-miglani-440390188/"><BsLinkedin/></a></div>
        <div><a href="https://github.com/ishumiglani0"><BsGithub/></a></div>
        <div><a href="https://wa.me/7015646685"><BsWhatsapp/></a></div>
        <div><a href="tel:7015646685"><BsFillTelephoneInboundFill/></a></div>
        <div><a href="mailto:ishumiglani96@gmail.com"><BiLogoGmail/></a></div>
        
    </div>
  )
}

export default SocialMedia