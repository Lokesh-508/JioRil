import React from 'react';
import img from '../assets/whatsapp.png'
import phone from '../assets/download.png'
const WhatsAppIcon = () => {
  return (
    <a href="https://wa.me/7003855041" target="_blank" rel="noopener noreferrer" className="fixed bottom-4 left-4 z-50 flex">
      <img src={img} alt="WhatsApp Icon" className="w-12 h-12" />
      <img src={phone} alt="phone Icon" className="w-12 h-12" />
    </a>
  );
};

export default WhatsAppIcon;
