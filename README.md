# 🤖 FurioBot — Telegram Bot da FURIA Esports

Um bot feito para torcedores da FURIA, com curiosidades sobre os jogadores e (em breve) integração com dados em tempo real de partidas de CS2. Feito com Node.js, Telegraf.js e hospedado na Vercel com webhook ativo.

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
Copiar
Editar
npm install
Crie um arquivo .env.local com seu token:

ini
Copiar
Editar
BOT_TOKEN=seu_token_aqui
VERCEL_URL=http://localhost:3000
Teste com node (modo polling local):

bash
Copiar
Editar
node api/telegram.js
⚠️ Recomenda-se rodar com webhook na Vercel para uptime contínuo.

☁️ Deploy na Vercel
Suba o projeto para o GitHub.

Vá em https://vercel.com, clique em "Add New Project" e importe o repositório.

Configure as variáveis de ambiente no painel da Vercel:

BOT_TOKEN

VERCEL_URL (ex: https://seu-projeto.vercel.app)

Após o deploy, ative o webhook com:

bash
Copiar
Editar
curl -F "url=https://seu-projeto.vercel.app/api/telegram" https://api.telegram.org/botSEU_TOKEN/setWebhook
(Substitua com seu link e token reais).

🔮 Futuras melhorias
Integração com a API da HLTV para mostrar o próximo jogo da FURIA.

Quiz interativo com perguntas sobre a história da organização.

Comando de notícias e destaques dos jogadores.

🧠 Feito com
Node.js

Telegraf.js

Vercel
