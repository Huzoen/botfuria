# 🤖 FurioBot — Telegram Bot da FURIA Esports

Um bot feito para torcedores da FURIA, com curiosidades sobre os jogadores e (em breve) integração com dados em tempo real de partidas de CS2. Feito com Node.js, Telegraf.js.

---

## 📦 Funcionalidades

- Responde mensagens com curiosidades dos jogadores da FURIA.
- Pode ser acionado com palavras como 'curiosidade' ou 'me conte uma curiosidade'.
- Preparado para rodar 24/7 via Webhook com a Vercel.

---

## 📁 Estrutura do Projeto

furia-telegram-bot/
├── api/
│ └── telegram.js # Código principal do bot
├── .env.local # Variáveis de ambiente 
├── package.json
└── README.md

yaml
Copiar
Editar

---

## 🚀 Como usar localmente

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/furia-telegram-bot.git
cd furia-telegram-bot
Instale as dependências:

bash
npm install
Crie um arquivo .env.local com seu token:

ini
BOT_TOKEN=seu_token_aqui
VERCEL_URL=http://localhost:3000
Teste com node (modo polling local):

