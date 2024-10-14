import { Bot, GrammyError, HttpError } from 'grammy';

const bot = new Bot(process.env.BOT_API_TOKEN);

bot.api.setMyCommands([{ command: 'start', description: 'Start the bot' }]);

bot.command('start', async ctx => {
  await ctx.reply('Bot started!', {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'Shop',
            web_app: { url: 'https://vpp1sqdn-5173.euw.devtunnels.ms' },
          },
        ],
      ],
    },
  });
});

bot.catch(err => {
  const ctx = err.ctx;
  console.error(`Error while handling update ${ctx.update.update_id}:`);

  const e = err.error;

  if (e instanceof GrammyError) {
    console.error('Error in request:', e.description);
  } else if (e instanceof HttpError) {
    console.error('Could not contact Telegram:', e);
  } else {
    console.error('Unknown error:', e);
  }
});

bot.start();
