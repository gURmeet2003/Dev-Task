const all = document.getElementById('all');
const fruit = document.getElementById('fruit');
const vege = document.getElementById('vege');
const listitem = document.getElementById('list-item');
const close = document.getElementById('close');

const allitem = ["apple","chilli","mango","onion"];
const fruititem = ["apple","mango"];
const vegitem = ["chilli","onion"];

all.addEventListener('click',(e)=>{
   
  listitem.innerHTML = '';
  for(let i=0;i<allitem.length;i++)
   {
    const item = document.createElement('li');
    item.innerHTML = allitem[i];
    listitem.appendChild(item);
   }
});

fruit.addEventListener('click',(e)=>{
  listitem.innerHTML='';
  for(let i=0;i<fruititem.length;i++)
  {
    const item = document.createElement('li');
    item.innerHTML = fruititem[i];
    listitem.appendChild(item);
  }
});

vege.addEventListener('click',(e)=>{
  listitem.innerHTML='';
  for(let i=0;i<vegitem.length;i++)
  {
    const item = document.createElement('li');
    item.innerHTML = vegitem[i];
    listitem.appendChild(item);
  }
});

close.addEventListener('click',(e)=>{
  listitem.innerHTML='';
})