$(function () {
  // const tem = '<ul><li>{{ username | fancy }}</li></ul>';
  const env = nunjucks.configure({});
  env.addFilter('fancy', (data) => {
    return data.length;
  }, false);
  console.log(env);
  const res = env.render('public/template/temp.njk', {username: 'James'});
  console.log(res);
  $('.temp').append(res);
});