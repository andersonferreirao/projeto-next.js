'use client';
import './globals.css';
  import { Button, Dropdown } from 'flowbite-react';
  import { DropdownHeader } from 'flowbite-react';
  import { DropdownItem } from 'flowbite-react';
  import ParticlesComponent from '@/components/particles';
  import { Navbar } from 'flowbite-react';
  import { useEffect, useState } from 'react';
  import Graphic from './graphics/graphic';
  import Spreadsheet from './graphics/spreadsheet';
  import { Inter } from 'next/font/google'
  import Link from 'next/link';


/*export const metadata = {
  title: 'Página inicial',
  description: 'Aplicativo web',
}*/

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <ParticlesComponent id="particles"/>
      <body>
          <header>
            <nav className="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700 fixed w-screen">
              <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
                <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                  <img src="../images/dolar-color.png" alt="" className="size-16"/>
                  <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-green-400">CRYPP</span>
                </a>
                
                <Dropdown  type="button" className="md:hidden" aria-controls="navbar-solid-bg" aria-expanded="false">
                  <DropdownHeader className='md:hidden z-auto'>
                    <DropdownItem className='justify-center'>
                      <a href="#" className="text-xl block px-3 md:p-0 text-green-400 md:bg-transparent md:dark:text-green-500  md:dark:bg-transparent mt-3" aria-current="page">
                        Home
                      </a>
                    </DropdownItem>
                    <DropdownItem className='justify-center'>
                      <a href="#" className="text-xl block px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent mb-1">
                        Sobre nós
                      </a>
                    </DropdownItem>
                    <DropdownItem className='justify-center'>
                      <Link href={"/login"} className="text-xl block px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent mb-1">
                        Entrar
                      </Link>
                    </DropdownItem>
                    <DropdownItem className='justify-center'>
                      <a href="#" className="bg-green-400 text-xl block px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-black md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent mb-1">
                        Cadastre-se
                      </a>
                    </DropdownItem>
                  </DropdownHeader>
                </Dropdown>
                <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
                  <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
                    <li>
                      <a href="#" className="font-semibold block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-green-500 dark:bg-blue-600 md:dark:bg-transparent mt-2" aria-current="page">
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-semibold block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent mt-2">
                        Sobre nós
                      </a>
                    </li>
                    <li>
                      <Link href={"/login"} className="font-semibold block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent mt-2">
                        Entrar
                      </Link>
                    </li>
                    <li>
                      <button className="bg-green-900 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full">
                        <a href="#" className="font-semibold block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                          Cadastre-se
                        </a>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            <div className="flex items-center justify-center">
              <img hidden src="../images/fallout-logo.png" alt="" className=''/>
            </div>
          </header>
        {children}
      </body>
    </html>
  )
}
