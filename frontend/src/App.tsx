import { useEffect, useState, useRef, FormEvent } from 'react';
import { FiTrash } from 'react-icons/fi';
import { api } from './services/api';

interface ConsultaProps {
  id: string;
  name: string;
  email: string;
  pago: boolean;
  tipo_pagamento: string;
  valor: string;
  condicao: string;
  created_at: string;
}

export default function App() {
  const [consultas, setConsultas] = useState<ConsultaProps[]>([]);
  const nameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const pagoRef = useRef<HTMLInputElement | null>(null);
  const tipoPagamentoRef = useRef<HTMLInputElement | null>(null);
  const valorRef = useRef<HTMLInputElement | null>(null);
  const condicaoRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    loadConsultas();
  }, []);

  async function loadConsultas() {
    try {
      const response = await api.get('/list-consultas');
      setConsultas(response.data);
    } catch (error) {
      console.error('Erro ao carregar consultas:', error);
    }
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const name = nameRef.current?.value.trim();
    const email = emailRef.current?.value.trim();
    const pago = pagoRef.current?.checked || false;
    const tipo_pagamento = tipoPagamentoRef.current?.value.trim();
    const valor = valorRef.current?.value.trim();
    const condicao = condicaoRef.current?.value.trim();

    if (!name || !email || !tipo_pagamento || !valor || !condicao) {
      console.error('Preencha todos os campos obrigatórios.');
      return;
    }

    try {
      const response = await api.post('/consulta', {
        name,
        email,
        pago,
        tipo_pagamento,
        valor,
        condicao,
      });

      setConsultas((prevConsultas) => [...prevConsultas, response.data]);

      if (nameRef.current) nameRef.current.value = '';
      if (emailRef.current) emailRef.current.value = '';
      if (pagoRef.current) pagoRef.current.checked = false;
      if (tipoPagamentoRef.current) tipoPagamentoRef.current.value = '';
      if (valorRef.current) valorRef.current.value = '';
      if (condicaoRef.current) condicaoRef.current.value = '';

      console.log('Consulta cadastrada com sucesso:', response.data);
    } catch (error) {
      console.error('Erro ao cadastrar consulta:', error);
    }
  }

  async function handleDelete(id: string) {
    try {
      await api.delete('/consulta', { params: { id } });

      // Atualizar lista de consultas
      setConsultas((prevConsultas) =>
          prevConsultas.filter((consulta) => consulta.id !== id)
      );
    } catch (error) {
      console.error('Erro ao excluir consulta:', error);
    }
  }

  return (
      <div className="w-full min-h-screen bg-gray-900 flex justify-center px-4">
        <main className="my-10 w-full md:max-w-2xl">
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

            <label className="font-medium text-white">Pago:</label>
            <input type="checkbox" className="mb-5" ref={pagoRef} />

            <label className="font-medium text-white">Tipo de pagamento:</label>
            <input
                type="text"
                placeholder="Digite a forma de pagamento..."
                className="w-full mb-5 p-2 rounded"
                ref={tipoPagamentoRef}
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
                placeholder="Digite sua condição..."
                className="w-full mb-5 p-2 rounded"
                ref={condicaoRef}
            />

            <button
                type="submit"
                className="cursor-pointer w-full p-2 bg-green-500 rounded font-medium text-white"
            >
              Cadastrar
            </button>
          </form>

          <section className="flex flex-col gap-4">
            {consultas.map((consulta) => (
                <article
                    key={consulta.id}
                    className="w-full bg-white rounded p-2 relative hover:scale-105 duration-200"
                >
                  <p>
                    <span className="font-medium">Nome:</span> {consulta.name}
                  </p>
                  <p>
                    <span className="font-medium">Email:</span> {consulta.email}
                  </p>
                  <p>
                    <span className="font-medium">Pago:</span>{' '}
                    {consulta.pago ? 'PAGO' : 'DEVENDO'}
                  </p>
                  <p>
                    <span className="font-medium">Tipo de pagamento:</span>{' '}
                    {consulta.tipo_pagamento}
                  </p>
                  <p>
                    <span className="font-medium">Valor:</span> {consulta.valor}
                  </p>
                  <p>
                    <span className="font-medium">Condição:</span> {consulta.condicao}
                  </p>

                  <button
                      className="bg-red-500 w-7 h-7 flex items-center justify-center rounded-lg absolute right-0 -top-2"
                      onClick={() => handleDelete(consulta.id)}
                  >
                    <FiTrash size={18} color="#FFF" />
                  </button>
                </article>
            ))}
          </section>
        </main>
      </div>
  );
}
