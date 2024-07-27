'use client';
import ParticlesComponent from '@/components/particles';
import axios from 'axios';  
import { Inter } from 'next/font/google'
import Link from 'next/link';
import { useEffect } from 'react';

export default function LoginHomePage({ children }) {

  return (
    <html lang="pt-br">
      <body>
        <ParticlesComponent id='particles'/>
        <header>
          <nav className="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700 fixed w-screen h-12">
            <div id="title" className='flex items-center justify-center h-full'>
              <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                <img src="../images/dolar-color.png" alt="" className="size-12"/>
                <span className="text-2xl font-semibold whitespace-nowrap dark:text-green-400">CRYPP</span>
              </a>
                
            <Link href="" className="text-xl block px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent mb-1 ml-7 ">Planilhas</Link>
            <Link href="" className="text-xl block px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent mb-1 ml-4">Gráficos</Link>
            <Link href="" className="text-xl block px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent mb-1 ml-4">Tutoriais</Link>
            <Link href="" className="text-xl block px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent mb-1 ml-4">Conta</Link>
            
            
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
