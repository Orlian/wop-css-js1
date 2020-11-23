'use strict';

const strawberry = document.getElementById('berry');
strawberry.style.backgroundColor = 'red';

console.log(strawberry.outerHTML + '\nI found the berry (but actually pseudo-fruit): ' + strawberry.innerHTML);

const orange = document.querySelector('li[data-foodtype="squishy"]');
orange.style.backgroundColor = 'orange';

console.log(orange.outerHTML + '\nI found the fruit: ' + orange.innerHTML);

const collection = document.getElementsByTagName('li');

console.log(collection);

console.log('Using the for loop here: ');

for(let i = 0; i < collection.length; i++) {
  if(collection[i].innerHTML.includes('Pear')) {
    collection[i].style.backgroundColor = 'green';
  }
  console.log(collection[i].innerHTML);
  collection[i].style.width = '100px';
  collection[i].style.listStyleType = 'none';
}

const list = document.querySelectorAll('li');

console.log(list, '\nUsing forEach here: ');

list.forEach((item) => {
  console.log(item.innerHTML);
  item.style.border = 'solid 1px';
})