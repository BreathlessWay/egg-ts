$(function () {
  const tem = '<ul><li>{{ username | fancy }}</li></ul>';
  const env = nunjucks.configure({});
  env.addFilter('fancy', (data) => {
    return data.length;
  }, false);
  console.log(env);
  const res = env.renderString(tem, {username: 'James'});
  console.log(res);
  $('.temp').append(res);
});