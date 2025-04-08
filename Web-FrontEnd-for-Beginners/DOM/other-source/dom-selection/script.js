const p4 = document.querySelector('#b p');
p4.style.color = 'green';

const li2 = document.querySelector('section#b  ul  li:nth-child(2)');

li2.style.backgroundColor = 'orange';

const p = document.querySelectorAll('p');
for(let i = 0; i < p.length; i++) {
  p[i].innerHTML = `paragraf ke - ${i + 1}` ;
  p[i].style.backgroundColor = 'lightblue';
}

// mengubah node root -> memperkecil scope
const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');
p4.style.backgroundColor = 'orange';

// or dibalik
// const sectionB = document.querySelector('section#b');
// const p4 = sectionB.getElementsByTagName('p')[0];
// p4.style.backgroundColor = 'orange';