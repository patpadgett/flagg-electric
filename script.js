const menu = document.querySelector('.menu');
const navigation = document.querySelector('#navigation');
function closeMenu(){
  if(!navigation)return;
  navigation.classList.remove('open');
  if(menu)menu.setAttribute('aria-expanded','false');
}
if(menu && navigation){
  menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true'; menu.setAttribute('aria-expanded',String(open)); navigation.classList.toggle('open',open);});
  navigation.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeMenu));
  document.addEventListener('keydown',event=>{if(event.key==='Escape' && menu.getAttribute('aria-expanded')==='true'){closeMenu();menu.focus();}});
  window.matchMedia('(min-width:761px)').addEventListener('change',closeMenu);
}
