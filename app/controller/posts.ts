import { Context } from 'egg';

exports.index = async (ctx: Context) => {
  console.log('index', ctx.validate);
  console.log('route-name: pathFor: ', ctx.helper.pathFor('posts'), ' urlFor: ', ctx.helper.urlFor('posts'));
  ctx.body = 'index 主页内容展示!';
};

exports.new = async (ctx: Context) => {
  ctx.body = `new ${JSON.stringify(ctx.queries.fas)}`;
};

exports.create = async (ctx: Context) => {
  console.log(ctx.request.body.today);
  ctx.body = 'create';
};

exports.show = async (ctx: Context) => {
  ctx.body = `show ${JSON.stringify(ctx.params)}`;
};

exports.edit = async (ctx: Context) => {
  ctx.body = 'edit';
};

exports.update = async (ctx: Context) => {
  ctx.body = 'update';
};

exports.destroy = async (ctx: Context) => {
  ctx.body = 'destroy';
};
