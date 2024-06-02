'use client';

import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";


export default function Registration() {
    


  const [data, setData] = useState({
     "name":'',   
     "email":'',   
     "password":'',   
     "confirmPassword":'',
     "phone":'',   
     "address":'',   
     "city":'',   
     "birthdate":'',   
    });
    
    const handleChange = (event)=> {
        setData(
            data => ({...data, [event.target.name]:
             event.target.value})
        );
        console.log(data);
    }


    const handleSubmit = (event) => { 
      event.preventDefault();

      axios.post("http://localhost:4000/authentication/users", data).
      then(
      response => {
      console.log(response.data);
      
      window.location.href = '/login';

      }  
      ).
      catch(error => console.log(error.response.data)).
      finally(console.log("Finally"));
  
    }
    
    
      

    

    
    

return (
<div className="flex flex-col justify-center items-center w-screen min-h-screen mb-56">
<div className="max-w-lg mx-auto p-6 dark:bg-gray-800 rounded-lg shadow-md  mb-24">

    

        <form onSubmit={handleSubmit} action="" className=" mb-8">
          <div className="">
          <h2 className="text-3xl text-center text-green-500 font-bold mb-6">Criar conta</h2>    
               
            <label className="block text-white text-sm font-semibold mb-2" htmlFor="name">
              Nome
            </label>
            <input
              onChange={handleChange}
              value={data.name}
              placeholder=""
              className="text-white w-full px-3 py-2 border rounded-lg bg-gray-800 focus:border-green-500"
              required
              type="text"
              name="name"
              id="name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm font-semibold mb-2" htmlFor="email">
              Email
            </label>
            <input
              onChange={handleChange}
              value={data.email}
              placeholder=""
              className="text-white w-full px-3 py-2 border rounded-lg bg-gray-800 focus:border-green-500"
              required
              type="email"
              name="email"
              id="email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm font-semibold mb-2" htmlFor="password">
              Senha
            </label>
            <input
              onChange={handleChange}
              value={data.password}
              placeholder=""
              className="text-white w-full px-3 py-2 border rounded-lg bg-gray-800 focus:border-green-500"
              required
              type="password"
              name="password"
              id="password"
            />
          </div>
          <div className="mb-4 relative">
            <label for='confirmPassword' className="absolute text-lg text-gray-500 dark:text-white duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto" htmlFor="confirmPassword">
              Confirmar Senha
            </label>
            <input
              onChange={handleChange}
              value={data.confirmPassword}
              placeholder=""
              className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-100 bg-gray-800  border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
              required
              type="password"
              name="confirmPassword"
              id="confirmPassword"
            />
          </div>
          <div className="bg-green-700 text-center  text-lg mb-3 font-bold">
              Dados Pessoais
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm font-semibold mb-2" htmlFor="confirmPassword">
              Telefone
            </label>
            <input
              onChange={handleChange}
              value={data.phone}
              placeholder="(xx)xxxxx-xxxx"
              className="text-white w-full px-3 py-2 border rounded-lg bg-gray-800 focus:border-green-500"
              required
              type="text"
              name="phone"
              id="phone"
            />
          </div>

          
          <div className="mb-4">
            <label className="block text-white text-sm font-semibold mb-2" htmlFor="address">
              Endereço
            </label>
            <input
              onChange={handleChange}
              value={data.address}
              placeholder=""
              className="text-white w-full px-3 py-2 border rounded-lg bg-gray-800 focus:border-green-500"
              required
              type="text"
              name="address"
              id="address"
            />
          </div>


          <div className="mb-4">
            <label className="block text-white text-sm font-semibold mb-2" htmlFor="city">
              Cidade
            </label>
            <input
              onChange={handleChange}
              value={data.city}
              placeholder=""
              className="text-white w-full px-3 py-2 border rounded-lg bg-gray-800 focus:border-green-500"
              required
              type="text"
              name="city"
              id="city"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm font-semibold mb-2" htmlFor="birthdate">
              Data de nascimento
            </label>
            <input
              onChange={handleChange}
              value={data.birthdate}
              placeholder=""
              className="text-white w-full px-3 py-2 border rounded-lg bg-gray-800 focus:border-green-500"
              required
              type="date"
              name="birthdate"
              id="birthdate"
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-green-700 hover:bg-green-900 text-white font-semibold px-6 py-3 rounded-lg"
            >
              Entrar
            </button>
          </div>
          <center>

          <button 
          type="button" 
          className="mt-5 w-96 justify-center text-center  flex items-center  text-white bg-[#4285F4] hover:bg-red-400 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5  dark:focus:ring-[#4285F4]/55 me-2 mb-2">
                   
<svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
<path fill-rule="evenodd" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" clip-rule="evenodd"/>
</svg>
<span className="text-red-100 text-lg">
  Sign in with Google
</span>
</button>
          </center>
        </form>
        
      </div>
    </div>
  );
  
  }
  