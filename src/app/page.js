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
  


  export default function Home() {
    
    const chartConfig = {
      type: "pie",
      width: 280,
      height: 280,
      series: [44, 55, 13, 43, 22],
      options: {
        chart: {
          toolbar: {
            show: false,
          },
        },
        title: {
          show: "",
        },
        dataLabels: {
          enabled: false,
        },
        colors: ["#020617", "#ff8f00", "#00897b", "#1e88e5", "#d81b60"],
        legend: {
          show: false,
        },
      },
    };

    
    
    
    const [dados, setDados] = useState('');

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL");
          const consulta = await response.json();
          setDados(consulta);
        } catch(error) {
          console.error("Erro ao consumir a API");
        }
      }
      fetchData();
    }, []);


    return (
      <>
        <div className='app'>
         
          <main className="my-8 mt-28">
            <div className="container mx-auto px-6">
              <div className="h-64 rounded-md overflow-hidden bg-cover bg-center">
                <div className=" bg-opacity-50 flex items-center h-full">
                  <div className="px-10 mt-5">
                    
                      <h2 className="text-4xl text-green-200 font-semibold mb-5 ml-5">Seja bem vindo</h2>
                      
                    <p className="mt-2 text-slate-300 text-2xl font-semibold mb-16">A CRYPP é um site que visa te informar e dar dicas de onde aplicar seu dinheiro, sendo com ações, fundos e criptomoedas.</p>
                    
                  </div>
                </div>
              </div>
              <div className="md:flex mt-8 md:-mx-4">
                <div className="border-4 border-gray-500/100 w-full h-64 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:w-1/2">
                  <div className="dark:bg-gray-800 flex items-center h-full">
                    <div className="px-10 max-w-xl">
                      <h2 className="text-2xl text-yellow-200 font-semibold">Experimente tipos diferentes de investimentos</h2>
                      <p className="mt-2 text-slate-300">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore facere provident molestias ipsam sint voluptatum pariatur.</p>
                      <button className="flex items-center mt-4 text-white text-sm uppercase font-medium rounded hover:underline focus:outline-none">
                        <span>Shop Now</span>
                        <svg className="h-5 w-5 mx-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                      </button>
                    </div>
                  </div>
                </div>
                  
                
                <div className="mt-3 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:w-1/2 p-3">
    <div className="border-4 border-gray-500/100 dark:bg-gray-800  flex flex-col h-auto">
      <div className="px-10 max-w-xl">
        <h2 className="mt-6 text-2xl text-green-200 font-semibold ">Escolha a melhor moeda para você trabalhar agora.</h2>
        <p className="mt-2 text-slate-300 text-lg">Moedas para você observar o custo atual em relação ao real brasileiro.</p>
        <div className="flex flex-col">
          <Button className="mt-2 text-black text-xl w-64 bg-red-400">BITCOIN/REAL: {dados.BTCBRL?.bid}</Button>
          <Button className="mt-2 text-black text-xl w-72 bg-yellow-300">EURO: {dados.EURBRL?.bid.slice(0,-2)}</Button>
          <Button className="mt-2 text-black text-xl w-98 bg-green-400">DOLAR: {dados.USDBRL?.bid.slice(0,-2)}</Button>
        </div>
        <button className="flex items-center mt-4 text-white text-sm uppercase font-medium rounded hover:underline focus:outline-none"></button>
      </div>
    </div>
  </div>

              </div>
            </div>
            <div id='segundo' className=" text-center rounded-md overflow-hidden bg-cover bg-center mt-20">
                <div className=" bg-opacity-50 flex items-center h-full">
                  <div className="px-10 mt-5">
                    
                      <h2 className=" text-4xl text-orange-200 font-semibold mb-5 ml-5">Movimente e estude suas ações de uma maneira mais intuitiva</h2>
                      
                    <p className="mt-2 text-slate-300 text-2xl font-semibold mb-16">
                      A CRYPP, utiliza de APIs para comparar os valores de diversos tipos de moedas,
                       assim construimos planilhas e gráficos que facilitam a análise de investimentos.  
                    </p>
                    
                  </div>
                </div>
              </div>
  
              <div className="flex justify-center items-center">
              <div className="md:flex md:-mx-4 p-3">
    <div className="mt-10 border-4 border-gray-500/100 w-full h-64 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:w-1/2">
      <div className="dark:bg-gray-800 flex items-center h-full">
        <div className="px-10 max-w-xl">
          <h2 className="text-2xl text-yellow-200 font-semibold">Utilize nossas planilhas </h2>
          <p className="mt-2 text-slate-300">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore facere provident molestias ipsam sint voluptatum pariatur.</p>
          <button className="flex items-center mt-4 text-white text-sm uppercase font-medium rounded hover:underline focus:outline-none">
            <span>Shop Now</span>
            <svg className="h-5 w-5 mx-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </button>
        </div>
      </div>
    </div>
    <div className="mb-6 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:w-1/2 p-3">
      <div className="px-10 max-w-xl w-auto">
          <Spreadsheet/>
        <div className="flex flex-col">
          <button className="flex items-center mt-4 text-white text-sm uppercase font-medium rounded hover:underline focus:outline-none"></button>
        </div>
      </div>
    </div>
  </div>
</div>


<div className="flex justify-center items-center">
<div className="md:flex md:-mx-4 p-3">
    <div className="mt-10 border-4 border-gray-500/100 w-full h-64 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:w-1/2">
      <div className="dark:bg-gray-800 flex items-center h-full">
        <div className="px-10 max-w-xl">
          <h2 className="text-2xl text-yellow-200 font-semibold">Utilize nossos gráficos </h2>
          <p className="mt-2 text-slate-300">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore facere provident molestias ipsam sint voluptatum pariatur.</p>
          <button className="flex items-center mt-4 text-white text-sm uppercase font-medium rounded hover:underline focus:outline-none">
            <span>Shop Now</span>
            <svg className="h-5 w-5 mx-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </button>
        </div>
      </div>
    </div>
    <div className="mb-6 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:w-1/2 p-3">
      <div className="px-10 max-w-xl w-auto">
          <Graphic/>
        <div className="flex flex-col">
          <button className="flex items-center mt-4 text-white text-sm uppercase font-medium rounded hover:underline focus:outline-none"></button>
        </div>
      </div>
    </div>
  </div>
</div>
      


<div className="flex flex-col justify-center items-center w-full h-full">
  <div className="px-5 mt-5 text-center">
    <h2 className="text-3xl md:text-4xl text-yellow-200 font-semibold mb-5">Utilize também o app mobile e desktop da CRYPP, disponível para iOS e Android na App Store ou na Play Store e também no Windows e linux</h2>
    <p className="mt-2 text-slate-300 text-lg md:text-2xl font-semibold mb-16">
      Nossos aplicativos fornecem o mesmo serviço que o site, garantindo a mesma eficiência e facilidade na hora de investir seu dinheiro.
    </p>
  </div>

  <div className=" md:flex md:flex-wrap md:justify-center md:items-center ">
    <div className="md:w-1/2 md:flex md:justify-end">
      <img src="../images/cellphone.png" alt="" className="max-w-xs md:max-w-none md:w-64 mx-auto md:mx-0" />
    </div>
    <div className="md:w-1/2 md:flex md:justify-start">
      <div className="h-96 w-full md:w-72 md:mx-10 md:mr-4 rounded-md overflow-hidden bg-cover bg-center mt-5">
        <div className=" flex flex-col justify-center items-center h-full  ">
        <h2 className="text-2xl text-green-600 font-semibold mb-5">QR code</h2>  
          <img src="../images/qr-code.png" alt="" className="mx-auto size-40 border-4 border-gray-500/100 mb-5" />
     
     
      <div className="flex justify-center ">
        <div className="flex gap-1 p-1 divide-x divide-gray-800 row bg-blue-500/25 ">
          <button
            className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none border-r-0 rounded-none"
            type="button">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="" viewBox="0 0 16 16">
  <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282"/>
  <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282"/>
</svg>
          </button>
          <button
            className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none border-r-0 rounded-none"
            type="button">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-ubuntu" viewBox="0 0 16 16">
  <path d="M2.273 9.53a2.273 2.273 0 1 0 0-4.546 2.273 2.273 0 0 0 0 4.547Zm9.467-4.984a2.273 2.273 0 1 0 0-4.546 2.273 2.273 0 0 0 0 4.546M7.4 13.108a5.54 5.54 0 0 1-3.775-2.88 3.27 3.27 0 0 1-1.944.24 7.4 7.4 0 0 0 5.328 4.465c.53.113 1.072.169 1.614.166a3.25 3.25 0 0 1-.666-1.9 6 6 0 0 1-.557-.091m3.828 2.285a2.273 2.273 0 1 0 0-4.546 2.273 2.273 0 0 0 0 4.546m3.163-3.108a7.44 7.44 0 0 0 .373-8.726 3.3 3.3 0 0 1-1.278 1.498 5.57 5.57 0 0 1-.183 5.535 3.26 3.26 0 0 1 1.088 1.693M2.098 3.998a3.3 3.3 0 0 1 1.897.486 5.54 5.54 0 0 1 4.464-2.388c.037-.67.277-1.313.69-1.843a7.47 7.47 0 0 0-7.051 3.745"/>
</svg>
          </button>
          <button
            className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none rounded-none"
            type="button">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-windows" viewBox="0 0 16 16">
  <path d="M6.555 1.375 0 2.237v5.45h6.555V1.375zM0 13.795l6.555.933V8.313H0v5.482zm7.278-5.4.026 6.378L16 16V8.395H7.278zM16 0 7.33 1.244v6.414H16V0z"/>
</svg>
          </button>
        </div>
      </div>
    
        </div>
      </div>
    </div>
  </div>
</div>


          </main>

          <footer>
            <Navbar style={{ backgroundColor: 'transparent'}} className='fixed bottom-0 w-full h-12'>
              <Button className='absolute right-1 bottom-2  rounded-full border-none '>
              
                <img src="../images/fallout.png" alt="" className='size-16 rounded-full' />
              </Button>
            </Navbar>

           
            <div className="border-4 border-gray-500/100 dark:bg-gray-800 mr-8 ml-8 mb-5">
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Company</h2>
            <ul className="text-gray-500 dark:bg-gray-800 font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">About</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Careers</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Brand Center</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Blog</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Help center</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">Discord Server</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Twitter</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Facebook</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Contact Us</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">Privacy Policy</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Licensing</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Terms &amp; Conditions</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Download</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">iOS</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Android</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Windows</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">MacOS</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className=" px-4 py-6 bg-gray-100 dark:bg-gray-700 md:flex md:items-center md:justify-between mr-10 ml-10">
        <span className=" text-sm text-gray-500 dark:text-gray-300 sm:text-center">© 2024 <a href="https://flowbite.com/">Flowbite™</a>. All Rights Reserved.</span>
        <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
          <a href="#" className=" text-gray-400 hover:text-gray-900 dark:hover:text-white ">
            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
              <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd"/>
            </svg>
            <span className="sr-only">Facebook page</span>
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
              <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"/>
            </svg>
            <span className="sr-only">Discord community</span>
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
              <path fillRule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clipRule="evenodd"/>
            </svg>
            <span className="sr-only">Twitter page</span>
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clipRule="evenodd"/>
            </svg>
            <span className="sr-only">GitHub account</span>
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z" clipRule="evenodd"/>
            </svg>
            <span className="sr-only">Dribbble account</span>
          </a>
        </div>
      </div>
    </div> 
          </footer>
        </div>
      </>
    )
  }