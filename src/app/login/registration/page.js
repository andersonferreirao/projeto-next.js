'use client'; // Esta linha indica que o código está sendo executado no cliente (navegador).

import { useState } from "react"; // Importa o hook useState do React.
import axios from "axios"; // Importa a biblioteca axios para fazer requisições HTTP.
import { useEffect } from "react"; // Importa o hook useEffect do React (não está sendo usado no código).

export default function Registration() {
    
  // Estado inicial para as bordas dos campos de input, todas com a mesma classe CSS.
  const [borda, setBorda] = useState({
    "inputName": 'border-slate-500 rounded-lg',
    "inputEmail": 'border-slate-500 rounded-lg',
    "inputPassword": 'border-slate-500 rounded-lg',
    "inputConfirm": 'border-slate-500 rounded-lg',
    "inputPhone": 'border-slate-500 rounded-lg',
    "inputAddress": 'border-slate-500 rounded-lg',
    "inputCity": 'border-slate-500 rounded-lg',
    "inputBirthdate": 'border-slate-500 rounded-lg',
  });

  // Estado inicial para os dados do formulário.
  const [data, setData] = useState({
     "name": '',   
     "email": '',   
     "password": '',   
     "confirmPassword": '',
     "phone": '',   
     "address": '',   
     "city": '',   
     "birthdate": '',   
  });
    
  // Função chamada a cada mudança nos inputs (cada interação do usuário).
  const handleChange = (event) => {
        setBorda(""); // Reseta as bordas (não está fazendo nada efetivamente).

        // Atualiza o estado dos dados do formulário.
        setData(data => ({...data, [event.target.name]: event.target.value}));
        console.log(data); // Log dos dados do formulário no console.
  }

  // Função chamada quando o formulário é submetido.
  const handleSubmit = (event) => { 
      event.preventDefault(); // Previne o comportamento padrão do formulário (recarregar a página).

      // Envia os dados do formulário para o servidor.
      axios.post("http://localhost:4000/authentication/users", data)
      .then(response => {
          console.log(response.data); // Log da resposta do servidor.
          window.location.href = '/login'; // Redireciona para a página de login.
      })
      .catch(error => console.log(error.response.data)) // Log de erros.
      .finally(() => console.log("Finally")); // Log quando a requisição finaliza.
  }
    
  // Função para validação dos dados do formulário.
  const Validation = () => {
      const newBorda = {...borda}; // Cria uma cópia das bordas atuais.
      
      if (data.name.trim() === '') { // Verifica se o campo "name" está vazio.
        newBorda.inputName = '  rounded-lg'; // Atualiza a borda do campo "name" para vermelho.
        setBorda(newBorda); // Atualiza o estado das bordas.
      }
       
      console.log("submit clicado"); // Log quando o botão de submit é clicado.
  }
    
  return (
    <div className="max-w-lg md:max-w-2xl mx-auto p-6 dark:bg-gray-800 rounded-lg shadow-md mb-24">
      <form onSubmit={handleSubmit} action="" className="mb-4" noValidate>
        <div className="">
          <h2 className="text-3xl text-center text-green-500 font-bold mb-1">Criar conta</h2>    
               
          <label className="block text-white text-sm font-semibold mb-2" htmlFor="name">Nome</label>
          <input
            onChange={handleChange}
            value={data.name}
            className={`text-white w-full px-3 py-2 border   rounded-lg ${borda.inputName} bg-gray-800 focus:border-green-500`}
            required
            type="text"
            name="name"
            id="name"
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-white text-sm font-semibold mb-2" htmlFor="email">Email</label>
          <input
            onChange={handleChange}
            value={data.email}
            className={`text-white w-full px-3 py-2 border   rounded-lg bg-gray-800 focus:border-green-500`}
            required
            type="email"
            name="email"
            id="email"
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-white text-sm font-semibold mb-2" htmlFor="password">Senha</label>
          <input
            onChange={handleChange}
            value={data.password}
            className={`text-white w-full px-3 py-2 border   rounded-lg bg-gray-800 focus:border-green-500`}
            required
            type="password"
            name="password"
            id="password"
          />
        </div>
        
        <div className="mb-4 relative">
          <label className="absolute text-lg text-gray-500 dark:text-white duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto" htmlFor="confirmPassword">Confirmar Senha</label>
          <input
            onChange={handleChange}
            value={data.confirmPassword}
            className={`block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-100 bg-gray-800 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:${borda} focus:outline-none focus:ring-0 focus:border-green-600 peer`}
            required
            type="password"
            name="confirmPassword"
            id="confirmPassword"
          />
        </div>
        
        <div className="bg-green-700 text-center text-lg mb-2 font-bold">Dados Pessoais</div>
        
        <div className="mb-4">
          <label className="block text-white text-sm font-semibold mb-2" htmlFor="phone">Telefone</label>
          <input
            onChange={handleChange}
            value={data.phone}
            className={`text-white w-full px-3 py-2 border   rounded-lg bg-gray-800 focus:border-green-500`}
            required
            type="text"
            name="phone"
            id="phone"
          />
        </div>

        <div className="mb-4">
          <label className="block text-white text-sm font-semibold mb-2" htmlFor="address">Endereço</label>
          <input
            onChange={handleChange}
            value={data.address}
            className={`text-white w-full px-3 py-2 border   rounded-lg bg-gray-800 focus:border-green-500`}
            required
            type="text"
            name="address"
            id="address"
          />
        </div>

        <div className="mb-4">
          <label className="block text-white text-sm font-semibold mb-2" htmlFor="city">Cidade</label>
          <input
            onChange={handleChange}
            value={data.city}
            className={`text-white w-full px-3 py-2 border   rounded-lg bg-gray-800 focus:border-green-500`}
            required
            type="text"
            name="city"
            id="city"
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-white text-sm font-semibold mb-2" htmlFor="birthdate">Data de nascimento</label>
          <input
            onChange={handleChange}
            value={data.birthdate}
            className={`text-white w-full px-3 py-2 border   rounded-lg bg-gray-800 focus:border-green-500`}
            required
            type="date"
            name="birthdate"
            id="birthdate"
          />
        </div>
        
        <div className="flex justify-center">
          <button
            onClick={Validation}
            type="submit"
            className="bg-green-700 hover:bg-green-900 text-white font-semibold px-6 py-3 rounded-lg"
          >
            Entrar
          </button>
        </div>
        
        <center>
          <button 
            type="button" 
            className="mt-5 w-54 justify-center text-center flex items-center text-white bg-[#4285F4] hover:bg-red-400 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 dark:focus:ring-[#4285F4]/55 me-2"
          >
            <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
              <path fillRule="evenodd" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" clipRule="evenodd"/>
            </svg>
            <span className="text-red-100 text-lg">Sign in with Google</span>
          </button>
        </center>
      </form>
    </div>
  );
}
