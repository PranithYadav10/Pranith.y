import React from 'react'

export const Navbar = () => {
  return (
    <div className='navbar'>
        <ul>
            <li id="logo">Aloha</li>
            <li>Home</li>
            <li>Surfing</li>
            <li>Hula</li>
            <li>Vulcano</li>
        </ul>
        <ul className='btn'>
            <li>
                <button>Book a trip</button>
            </li>
        </ul>
        
    </div>
  )
}
