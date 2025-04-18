import React, { useState } from 'react';
// import { rollupVersion } from 'vite';
import List from './List';
import { Menu, X } from 'lucide-react';



const navigationData = [
  {
    "id": 1,
    "name": "Home",
    "url": "/home"
  },
  {
    "id": 2,
    "name": "About",
    "url": "/about"
  },
  {
    "id": 3,
    "name": "Services",
    "url": "/services"
  },
  {
    "id": 4,
    "name": "Contact",
    "url": "/contact"
  },
  {
    "id": 5,
    "name": "Blog",
    "url": "/blog"
  }
]


const NavBar = () => {
  const [menuOpen, setMenOpen] = useState(false)

  const lists = navigationData.map(rout => <List key={rout.id} rout={rout}></List>)



  return (
    <nav className='flex justify-between p-4 border border-green-200'>
      <div className="flex gap-4">
        <span
          className='md:hidden'
          onClick={() => setMenOpen(!menuOpen)}>
          {
            menuOpen ? <X></X> : <Menu></Menu>
          }
        </span>
        <ul className={`${menuOpen? "top-9": "-top-50"} absolute left-8 duration-500 bg-amber-300 text-black p-3 rounded-xl`}>
          {
            lists
          }
        </ul>
        <h3>My NavBar</h3>
      </div>
      <ul className=' md:flex hidden gap-5'>
        {
          lists
        }
      </ul>
      {/* <ul className='flex gap-3'>
                {
                    navigationData.map(rout => <li className=''><a href={rout.url}>{rout.name}</a></li>)
                }
            </ul> */}
      <button>Log in</button>
    </nav>
  );
};

export default NavBar;