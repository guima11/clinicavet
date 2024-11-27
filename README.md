 Clínica Psicológica - Website de Agendamento e Acompanhamento de Clientes

• Este projeto foi desenvolvido com o objetivo de criar uma plataforma online para uma clínica psicológica, permitindo um processo simples e funcional para o agendamento de consultas, cadastro de clientes e acompanhamento das informações. A plataforma permite que o processo de CRUD (Criar, Ler, Atualizar e Deletar) seja realizado de forma eficiente.

• Tecnologias Utilizadas

Frontend: React (com TypeScript)

Backend: Node.js com Prisma

Banco de Dados: MongoDB

Outras ferramentas: npm, dotenv

• Desenvolvedores

André Santana

Anielly Sayonara

Lucas Guimarães

Thiago Henrique

• Como Rodar o Projeto
Para rodar o aplicativo em sua máquina local, siga o passo a passo abaixo:

1. Criar uma Conta no MongoDB
Para armazenar os dados da clínica, será necessário utilizar o MongoDB, um banco de dados não relacional.

Acesse MongoDB e crie uma conta (caso não tenha uma).
Após criar a conta, crie um cluster para o seu banco de dados e configure o acesso de acordo com as orientações da plataforma.

2. Configurar o Arquivo .env
Após criar o cluster no MongoDB, você receberá um link de conexão com o banco de dados.
Crie um arquivo .env na raiz do projeto e insira o link de conexão do seu banco de dados nele.
Exemplo de como deve ser o arquivo .env:

makefile
Copiar código
MONGODB_URL="SEU_LINK_DE_CONEXAO_DO_MONGODB"
Observe o arquivo ".env.example" para mais detalhes sobre como estruturar o arquivo .env.

3. Instalar as Dependências

Agora, instale as dependências tanto do frontend quanto do backend para que o projeto funcione corretamente.

Navegue até a pasta frontend do projeto e execute o seguinte comando no terminal:

bash
Copiar código
npm install

Em seguida, faça o mesmo na pasta backend:

bash
Copiar código
npm install

4. Rodar o Aplicativo
Agora, você pode rodar o servidor de desenvolvimento para iniciar tanto o frontend quanto o backend.

Para o frontend:

Navegue até a pasta frontend e execute o seguinte comando:
bash
Copiar código
npm run dev

Para o backend:

Navegue até a pasta backend e execute:
bash
Copiar código
npm run dev

5. Acessar o Website
Depois de rodar ambos os servidores, abra o navegador e acesse o link gerado (geralmente em http://localhost:3000 para o frontend e http://localhost:5000 para o backend) para visualizar a aplicação em funcionamento.

• Funcionalidades

Cadastro de Clientes: Realize o cadastro de novos clientes, inserindo dados essenciais como nome, e-mail, telefone, entre outros.

Agendamento de Consultas: Permite agendar e visualizar consultas, além de alterar ou cancelar os agendamentos.

Acompanhamento: Mantenha o histórico de consultas e registros relacionados ao cliente.

CRUD Simples e Funcional: Facilidade de realizar operações de CRUD no banco de dados com a interface simples de usar.

• Considerações Finais

Este projeto tem como objetivo otimizar o processo de gestão de uma clínica psicológica, proporcionando uma experiência mais fluida para os clientes e equipe. Caso tenha algum problema ou dúvida, sinta-se à vontade para abrir uma issue ou entrar em contato com os desenvolvedores.
