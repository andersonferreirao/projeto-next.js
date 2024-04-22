'use client';
import './globals.css';
import { Button, Dropdown } from 'flowbite-react';
import { DropdownHeader } from 'flowbite-react';
import { DropdownItem } from 'flowbite-react';
import ParticlesComponent from '@/components/particles';
import { Navbar } from 'flowbite-react';
import { useEffect, useState } from 'react';
export default function Home() {
  
  
    const [dados,setDados] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch("https://brapi.dev/api/quote/PETR4?token=8S8WAihzotDKjGVtPVRC9L");
          const consulta = await response.json();
          setDados(consulta);
        
        } catch(error){
          console.error("Erro ao consumir a API");
        }
      }
      fetchData();
  }, []);


  return (
    <>
    <div className='app'>
      <ParticlesComponent id="particles"/>
   
  <header>

  <nav class="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2 ">
      <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="../images/dolar-color.png" alt="" className="size-16"/>
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-green-400">CRYPP</span>
    </a>
    
  <Dropdown type="button" className="md:hidden bg-gray-500" aria-controls="navbar-solid-bg" aria-expanded="false">
    
    
  
  <DropdownHeader className='md:hidden '>
    
    <DropdownItem className='justify-center '>
      <a href="#" class="text-xl block  px-3 md:p-0 text-green-400  md:bg-transparent  md:dark:text-green-500  md:dark:bg-transparent mt-3" aria-current="page">
        Home
      </a>
    </DropdownItem>
    
    <DropdownItem className='justify-center'>
      <a href="#" class="text-xl block  px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent mb-1">
        Sobre nós
      </a>
      
    </DropdownItem>
    
    <DropdownItem className='justify-center'>
      <a href="#" class="text-xl block  px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent mb-1">
        Entrar
      </a>
    </DropdownItem>

    <DropdownItem className='justify-center'>
    
      <a href="#" class="bg-green-400 text-xl block px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-black md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent mb-1">
        Cadastro
      </a>
    
    </DropdownItem>

  </DropdownHeader>
</Dropdown>

    
    <div class="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
      <ul class="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
        <li>
          <a href="#" class="font-semibold block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-green-500 dark:bg-blue-600 md:dark:bg-transparent mt-2" aria-current="page">
            Home
          </a>
        </li>
        <li>
          <a href="#" 
          class="font-semibold block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent mt-2">
            Sobre nós
          </a>
        </li>
        <li>
          <a href="#" class="font-semibold block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent mt-2">
            Entrar
          </a>
       </li>
        <li>
        <button class="bg-green-900 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full">
          <a href="#" class="font-semibold block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
            Cadastro
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

    <main className="my-8">
    <center>
            <div className="md:flex mt-8 md:-mx-4 container mx-auto px-6">
                <div className="w-full h-64 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:w-1/2" >
                    <div className="bg-gray-900 bg-opacity-50 flex items-center h-full">
                        <div className="px-10 max-w-xl">
                            <h2 className="text-2xl text-white font-semibold">Back Pack</h2>
                            <p className="mt-2 text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore facere provident molestias ipsam sint voluptatum pariatur.</p>
                            <button className="flex items-center mt-4 text-white text-sm uppercase font-medium rounded hover:underline focus:outline-none">
                                <span>Shop Now</span>
                                <svg className="h-5 w-5 mx-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="w-full h-64 mt-8 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:mt-0 md:w-1/2" >
                    <div className="bg-gray-900 bg-opacity-50 flex items-center h-full">
                      
                        <div className="px-10 max-w-xl ml-32 mb-32">

                        <h1 className='text-lg text-white'>DOLAR</h1>
                                     
                        </div>
                    </div>
                </div>
            </div>
    </center>
            <div className="mt-16">
        <div className="container mx-auto px-6 w-2/5">
            <div className="h-64 rounded-md overflow-hidden bg-cover bg-center">
                <div className="bg-gray-900 bg-opacity-50 flex items-center h-full">
                    <div className="px-10 max-w-xl">
                        <h2 className="text-2xl text-white font-semibold">Sport Shoes</h2>
                        <p className="mt-2 text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore facere provident molestias ipsam sint voluptatum pariatur.</p>
                        <button className="flex items-center mt-4 px-3 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                            <span>Shop Now</span>
                            <svg className="h-5 w-5 mx-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                        </button>
                    </div>
                </div>
            </div>
                <h3 className="text-gray-600 text-2xl font-medium">Fashions</h3>
                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
                    <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                        <div className="flex items-end justify-end h-56 w-full bg-cover" >
                            <button className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                                <svg className="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                            </button>
                        </div>
                        <div className="px-5 py-3">
                            <h3 className="text-gray-700 uppercase">Chanel</h3>
                            <span className="text-gray-500 mt-2">$12</span>
                        </div>
                    </div>
                    <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                        <div className="flex items-end justify-end h-56 w-full bg-cover" >
                            <button className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                                <svg className="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                            </button>
                        </div>
                        <div className="px-5 py-3">
                            <h3 className="text-gray-700 uppercase">Man Mix</h3>
                            <span className="text-gray-500 mt-2">$12</span>
                        </div>
                    </div>
                    <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                        <div className="flex items-end justify-end h-56 w-full bg-cover" >
                            <button className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                                <svg className="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                            </button>
                        </div>
                        <div className="px-5 py-3">
                            <h3 className="text-gray-700 uppercase">classNameic watch</h3>
                            <span className="text-gray-500 mt-2">$12</span>
                        </div>
                    </div>
                    <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                        <div className="flex items-end justify-end h-56 w-full bg-cover" >
                            <button className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                                <svg className="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                            </button>
                        </div>
                        <div className="px-5 py-3">
                            <h3 className="text-gray-700 uppercase">woman mix</h3>
                            <span className="text-gray-500 mt-2">$12</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-16">
                <h3 className="text-gray-600 text-2xl font-medium">Fashions</h3>
                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
                    <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                        <div className="flex items-end justify-end h-56 w-full bg-cover" >
                            <button className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                                <svg className="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                            </button>
                        </div>
                        <div className="px-5 py-3">
                            <h3 className="text-gray-700 uppercase">Chanel</h3>
                            <span className="text-gray-500 mt-2">$12</span>
                        </div>
                    </div>
                    <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                        <div className="flex items-end justify-end h-56 w-full bg-cover" >
                            <button className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                                <svg className="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                            </button>
                        </div>
                        <div className="px-5 py-3">
                            <h3 className="text-gray-700 uppercase">Man Mix</h3>
                            <span className="text-gray-500 mt-2">$12</span>
                        </div>
                    </div>
                    <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                        <div className="flex items-end justify-end h-56 w-full bg-cover">
                            <button className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                                <svg className="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                            </button>
                        </div>
                        <div className="px-5 py-3">
                            <h3 className="text-gray-700 uppercase">classNameic watch</h3>
                            <span className="text-gray-500 mt-2">$12</span>
                        </div>
                    </div>
                    <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                        <div className="flex items-end justify-end h-56 w-full bg-cover">
                            <button className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                                <svg className="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                            </button>
                        </div>
                        <div className="px-5 py-3">
                            <h3 className="text-gray-700 uppercase">woman mix</h3>
                            <span className="text-gray-500 mt-2">$12</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
        
    
    
    




    <footer>
    <Navbar style={{ backgroundColor: 'transparent'}} className='fixed bottom-0 w-full h-12'>
  <Button className='absolute right-1 bottom-2  rounded-full border-none '>
    <span className='text-white mt-5 mr-2'>CHAT</span>
    <img src="../images/fallout.png" alt="" className='size-16 rounded-full' />
  </Button>
</Navbar>
    </footer>
    </div>
    </>
  )
}
