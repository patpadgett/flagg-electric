document.documentElement.classList.add('js');
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
/* <details> removes its native disclosure marker, so the open/closed state
   is otherwise invisible to assistive tech. Mirror it onto the summary. */
document.querySelectorAll('details').forEach(d=>{
  const s=d.querySelector('summary');
  if(!s)return;
  const sync=()=>s.setAttribute('aria-expanded',String(d.open));
  sync();
  d.addEventListener('toggle',sync);
});
