var botaoFechar = document.querySelector('.menu__botao-fechar');
var botaoAbrir = document.querySelector('.menu__botao-abrir');
var html = document.documentElement


botaoAbrir.addEventListener('click', function()
{

  html.classList.add('menu-ativo');

})


botaoFechar.addEventListener('click', function()
{

  html.classList.remove('menu-ativo');

})


html.addEventListener('click', function(event)
{
  event.target === document.documentElement ? html.classList.remove('menu-ativo') : console.log('');

})