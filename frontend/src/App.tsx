import { useEffect, useState, useRef, FormEvent } from 'react'
import { FiTrash } from 'react-icons/fi'
import { api } from './services/api'

interface ConsultaProps{
  id: string;
  name: string;
  email: string;
  status: boolean;
  tipo_pagamento: string;
  valor: string;
  condicao: string;
  created_at: string;
}


export default function App() {

  const [consultas, setConsultas] = useState<ConsultaProps[]>([])
  const nameRef = useRef<HTMLInputElement | null>(null)
  const emailRef = useRef<HTMLInputElement | null>(null)
  const tipo_pagamentoRef = useRef<HTMLInputElement | null>(null)
  const valorRef = useRef<HTMLInputElement | null>(null)
  const condicaoRef = useRef<HTMLInputElement | null>(null)
  

  useEffect(() => {
    loadConsultas();
  }, [])


  async function loadConsultas(){
    const response = await api.get("/list-consultas")
    setConsultas(response.data);
  }

  
  async function handleSubmit(event: FormEvent){
    event.preventDefault();

    if(!nameRef.current?.value || !emailRef.current?.value || !tipo_pagamentoRef.current?.value || !valorRef.current?.value || !condicaoRef.current?.value) return;

    const response = await api.post("/consulta",{
      name: nameRef.current?.value,
      email: emailRef.current?.value,
      tipo_pagamento: tipo_pagamentoRef.current?.value,
      valor: valorRef.current?.value,
      condicao: condicaoRef.current?.value


    })

    setConsultas(allConsultas => [...allConsultas, response.data])

    nameRef.current.value = ""
    emailRef.current.value = ""
    tipo_pagamentoRef.current.value = ""
    valorRef.current.value = ""
    condicaoRef.current.value = ""

  }


  async function handleDelete(id: string){
    try {
      await api.delete("/consulta", {
        params: {
          id: id,
        }
      })


      const allConsultas = consultas.filter( (consulta) => consulta.id !== id )
      setConsultas(allConsultas)

    }catch(err){
      console.log(err);
    }
  }

  return (
    <div className="w-full min-h-screen bg-gray-900 flex justify-center px-4">
      <main className="my-10 w-full md:max-w-2xl ">
        <h1 className="text-4xl font-medium text-white">Pacientes</h1>

        <form className="flex flex-col my-6" onSubmit={handleSubmit}>
          <label className="font-medium text-white">Nome:</label>
          <input
            type="text"
            placeholder="Digite seu nome completo..."
            className="w-full mb-5 p-2 rounded"
            ref={nameRef}
          />

          <label className="font-medium text-white">Email:</label>
          <input
            type="email"
            placeholder="Digite seu email..."
            className="w-full mb-5 p-2 rounded"
            ref={emailRef}
          />

          <label className="font-medium text-white">Tipo de pagamento:</label>
          <input
            type="text"
            placeholder="Digite a forma de pagamento..."
            className="w-full mb-5 p-2 rounded"
            ref={tipo_pagamentoRef}
          />

          <label className="font-medium text-white">Valor:</label>
          <input
            type="text"
            placeholder="Digite o valor..."
            className="w-full mb-5 p-2 rounded"
            ref={valorRef}
          />

          <label className="font-medium text-white">Condição:</label>
          <input
            type="text"
            placeholder="Digite sua condicao..."
            className="w-full mb-5 p-2 rounded"
            ref={condicaoRef}
          />
        
          <input 
          type="submit" 
          value="Cadastrar" 
          className="cursor-pointer w-full p-2 bg-green-500 rounded font-medium" 
          />
        </form>

        <section className="flex flex-col gap-4">

          {consultas.map( (consulta) => (
            <article
              key={consulta.id} 
            className="w-full bg-white rounded p-2 relative hover:scale-105 duration-200"
            >
              <p><span className="font-medium">Nome:</span> {consulta.name}</p>
              <p><span className="font-medium">Email:</span> {consulta.email}</p>
              <p><span className="font-medium">Status:</span> {consulta.status ? "PAGO" : "DEVENDO"}</p>
              <p><span className="font-medium">Tipo_pagamento:</span> {consulta.tipo_pagamento}</p>
              <p><span className="font-medium">Valor:</span> {consulta.valor}</p>
              <p><span className="font-medium">Condicao:</span> {consulta.condicao}</p>
  
              <button 
                className="bg-red-500 w-7 h-7 flex items-center justify-center rounded-lg absolute right-0 -top-2"
                onClick={ () => handleDelete(consulta.id) }
              >
                <FiTrash size={18} color="#FFF"/>
              </button>
            </article>
          ))}

        </section>

      </main>
    </div>
  )
}
