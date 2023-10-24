import React, { useState, useEffect } from 'react';

const Notification = ({ message, onClose }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      onClose();
    }, 3000); // Automatically close the notification after 3 seconds

    return () => {
      clearTimeout(timer);
    };
  }, [onClose]);

  return (
    <div className={`notification dark:bg-[#0d1321] dark:text-[white] bg-[#ffffff] text-[#000000] shadow border dark:border-none fixed top-[20%] right-3 p-3 transition-[display] duration-200 z-50 rounded-lg ${show ? 'block' : 'hidden'}`}>
      <span className='font-bold'>{message}</span> has been added to your cart
    </div>
  );
};

export default Notification;
