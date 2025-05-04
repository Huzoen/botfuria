const axios = require("axios");
const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config({ path: './botToken.env' }); // Corrigido para o nome correto do arquivo .env

const vercelUrl = 'https://<SEU-NOME>.vercel.app/api/telegram';

// Configurando o webhook para enviar atualizações para o Vercel
bot.setWebHook(vercelUrl);

// Inicializar o bot
const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true });

// Dados simulados
const curiosidades = [
  "O FalleN é chamado de 'Professor' porque também ensina e lidera muito dentro do jogo.",
  "KSCERATO é conhecido por ser um dos jogadores mais consistentes do CS:GO.",
  "Yuurih já foi considerado o jogador mais regular da FURIA durante anos.",
  "YEKINDAR se juntou à FURIA trazendo seu estilo agressivo da Europa.",
  "Molodoy, coach, é fundamental na preparação estratégica da equipe."
];

// Comandos principais
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, " Olá, torcedor Furioso! Me mande:\n- /curiosidade para receber uma curiosidade\n- /proximojogo para saber o próximo jogo!");
});

// Curiosidade
bot.onText(/\/curiosidade/, (msg) => {
  const chatId = msg.chat.id;
  const curiosidadeAleatoria = curiosidades[Math.floor(Math.random() * curiosidades.length)];
  bot.sendMessage(chatId, `📚 Curiosidade: ${curiosidadeAleatoria}`);
});

// Próximo jogo (simulado por enquanto)
// bot.onText(/\/proximojogo/, (msg) => {
//   const chatId = msg.chat.id;
//   bot.sendMessage(chatId, "🎮 O próximo jogo da FURIA é no dia 30/04 às 18h contra a NAVI! 🔥 (Simulado)");
// });

// Respostas genéricas
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text.toLowerCase();

  if (!text.startsWith('/')) {
    bot.sendMessage(chatId, "🤔 Não entendi. Tente usar /curiosidade ou /proximojogo!");
  }
});

// Função para buscar o próximo jogo da FURIA na HLTV
async function getNextGame() {
  try {
    const response = await axios.get("https://api.hltv.org/matches");
    const matches = response.data;

    // Filtra os jogos da FURIA
    const furyasGames = matches.filter((match) =>
      match.team1.name.includes("FURIA") || match.team2.name.includes("FURIA")
    );

    if (furyasGames.length > 0) {
      const nextGame = furyasGames[0]; // Pega o primeiro jogo
      return `Próximo jogo da FURIA: ${nextGame.team1.name} vs ${nextGame.team2.name}, ${nextGame.date}`;
    } else {
      return "Não há jogos agendados para a FURIA.";
    }
  } catch (error) {
    console.error("Erro ao buscar os jogos:", error);
    return "Não foi possível buscar os jogos da FURIA no momento.";
  }
}

// Comando para obter informações sobre o próximo jogo
bot.onText(/\/proximojogo/, async (msg) => {
  const chatId = msg.chat.id;
  const nextGame = await getNextGame();
  bot.sendMessage(chatId, nextGame);
});
