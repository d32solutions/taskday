(function(){
  var q=new URLSearchParams(location.search).get('lang');
  var s=null;try{s=localStorage.getItem('td-lang')}catch(e){}
  var l=q||s||((navigator.language||'fr').toLowerCase().startsWith('fr')?'fr':'en');
  if(l!=='fr'&&l!=='en')l='en';
  function set(x){document.documentElement.lang=x;try{localStorage.setItem('td-lang',x)}catch(e){}
    document.querySelectorAll('.lang button').forEach(function(b){b.classList.toggle('on',b.dataset.set===x)});
    document.title=document.documentElement.dataset['title'+x.toUpperCase()]}
  document.addEventListener('DOMContentLoaded',function(){
    document.querySelectorAll('.lang button').forEach(function(b){b.onclick=function(){set(b.dataset.set)}});set(l)});
  document.documentElement.lang=l;
})();
