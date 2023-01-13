import { useState } from 'react'
import Link from 'next/link'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { AiOutlineMenu } from 'react-icons/ai'
import { AiOutlineClose } from 'react-icons/ai'


const sections = [ 
  {
    'name': 'BlackOut',
    'link': '/blackout',
  },
  {
    'name': 'Alarm',
    'link': '/alarm',
  },
  {
    'name': 'Example',
    'link': '/example',
  },
  {
    'name': 'Example',
    'link': '/example',
  },
  {
    'name': 'Logout',
    'link': '/logout',
  },
]

const Header = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className="sm:text-l md:text-xl bg-primary text-primary text-center p-4">
      <div className="flex flex-row justify-between">
        <Link href="/">
          <div className="flex flex-row cursor-pointer items-center">
            <p className="pl-1 text-3xl text-accent font-black">Black</p>
            <p className="pr-20 text-3xl text-secondary font-black">Out</p>
          </div>
        </Link>
        <ul className="hidden md:flex flex-row items-center">
          {sections.map((section) => (
            <a key={section.name} href={section.link}>
              <li>{section.name}</li>
            </a>
          ))}
        </ul>
        <div className="flex sm:flex md:hidden text-secondary cursor-pointer">
          <AiOutlineMenu onClick={() => { setOpen(!open) }} className={!open ? 'flex sm:hidden w-8 h-8' : 'hidden'}/>
          <AiOutlineClose onClick={() => { setOpen(!open) }} className={open ? 'flex sm:hidden w-8 h-8' : 'hidden'}/>
        </div>
        <div className="flex w-full sm:hidden bg-primary mt-12 flex-col items-center absolute left-1/2 transform -translate-x-1/2">
          <ul>
            {open && sections.map((section) => (
              <Link key={section.name} href={section.link}>
                <li onClick={() => { setOpen(!open) }} className="py-4 text-xl">{section.name}</li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header
