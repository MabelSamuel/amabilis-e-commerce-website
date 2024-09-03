import React, { useEffect, useState } from 'react';
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

function BackToTopButton() {
    const [backToTopButton, setBackToTopButton] = useState(false);

     useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setBackToTopButton(true);
            } else {
                setBackToTopButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup function
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollUp = () =>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
  return (
    <>
    {backToTopButton && (
        <button className='fixed bottom-8 right-8 h-10 w-10 bg-lilac flex justify-center items-center rounded-full z-50 ' onClick={scrollUp}><MdKeyboardDoubleArrowUp className='size-5 text-white hover:animate-bounce'/></button>
    )}
    </>
  )
}

export default BackToTopButton