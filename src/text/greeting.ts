import { Context } from 'telegraf';
import createDebug from 'debug';

const debug = createDebug('bot:command_handler');

const greeting = () => async (ctx: Context) => {
  const message = `👋 *Welcome to Dapp Farm!*\n\nExplore our platform to play games, earn tokens, and enhance your blockchain skills. Use the menu or type /help to get started! 🚀`;

  const button = {
    text: '🚀 Open Dapp Farm',
    url: 'https://t.me/DappFarmBot/earn',
  };

  debug(`Triggered command with message \n${message}`);
  await ctx.replyWithMarkdownV2(message, {
    parse_mode: 'Markdown',
    reply_markup: {
      inline_keyboard: [[button]],
    },
  });
};

export { greeting };
