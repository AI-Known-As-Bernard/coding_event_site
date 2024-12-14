import Link from 'next/link';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import {
    ArchiveBoxXMarkIcon,
    ChevronDownIcon,
    PencilIcon,
    Square2StackIcon,
    TrashIcon,
    ArrowLeftIcon
  } from '@heroicons/react/16/solid'


const SimpleNavbar = () => {
  let navigation ={
    alt:"west-mec coding logo",
    organization:"NEC-Coding",
    logo: "https://res.cloudinary.com/west-mec-north-east-campus-coding/image/upload/v1652816912/NewsLetter/WM-Coding_b2q0dl.svg",
    links:[{name:"Home", url:"/"},]
  }

  return (
    <nav className="bg-gray-800 border border-gray-700  px-2 sm:px-4 py-2.5 rounded shadow">
        <div className="text-center my-2 flex flex-wrap justify-between items-center mx-auto">
            <Link href="/" className="flex items-center">
            <img src={navigation.logo} alt={navigation.alt} className='h-16 ml-4 mr-3' />
                <span className="self-center text-3xl font-semibold whitespace-nowrap text-white">
                    {navigation.organization}
                </span>
            </Link>


            {/* Mobile Menu */}
            <div className="flex items-center">
                <Menu>
                <MenuButton className="inline-flex items-center p-2 ml-3 text-sm text-gray-400 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 md:hidden" id='menu-toggle'>
                    <span className="sr-only">Open Main Menu</span>
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16m-7 6h7"
                        />
                    </svg>
                </MenuButton>
                <MenuItems
                    transition
                    anchor="bottom end"
                    className="w-52 origin-top-right rounded-xl border border-white/5 bg-gray-600 p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
                >
                    {navigation.links.map((link,index)=>{
                        return (
                            <MenuItem key={index} className="hover:bg-gray-900">
                                    <a className="group hover:bg-gray-900 flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-gray-600" href={link.url}>
                                        {link.name} 
                                        <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline"><ArrowLeftIcon className='size-4 fill-white'/></kbd>
                                    </a>
                            </MenuItem>
                        )
                    })}
                </MenuItems>
                </Menu>
            </div>

            {/* Desktop Menu */}
            <div className="w-full md:block md:w-auto hidden" id='mobile-menu'>
                <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                    {navigation.links.map((link, index) =>(
                       <li key={index}>
                       <Link href={link.url} className="block py-2 pr-4 text-xl pl-3 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-orange-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">{link.name}</Link>
                        </li>
                    ))}
                  </ul>
                </div>
        </div>
      </nav>
  )
}

export default SimpleNavbar