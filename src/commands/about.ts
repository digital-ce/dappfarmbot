import { Context } from 'telegraf';
import createDebug from 'debug';

const debug = createDebug('bot:about_command');

const about = () => async (ctx: Context) => {
  const message = `🌟 *Dapp Farm*\n\nWelcome to Dapp Farm, where you can play games, earn tokens, and learn blockchain skills! Start your journey today and unlock the full potential of decentralized apps. 🚀`;
  debug(`Triggered "about" command with message \n${message}`);
  await ctx.replyWithMarkdownV2(message, { parse_mode: 'Markdown' });
};

export { about };
