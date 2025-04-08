// Event Handler
// 2 cara menggunakan Event Handler

const p3 = document.querySelector('.p3');
// 1. inline Event Handler HTML Attribute -cek paragraf 3
function ubahWarnaP3() {
  p3.style.backgroundColor = 'lightblue';
}

// 2. menggunakan method
const p2 = document.querySelector('.p2');
p2.onclick = ubahWarnaP2;

function ubahWarnaP2() {
  p2.style.backgroundColor = 'lightblue';
}

// addEventListener()
const p4 = document.querySelector('section#b p');
p4.addEventListener('click', function () {
  const ul = document.querySelector('section#b ul');
  const li = document.createElement('li');
  const teksLi = document.createTextNode('item baru');
  li.append(teksLi);
  ul.append(li);
});

// Perbedaan Event Handler dan addEventListener
const p1 = document.querySelector('.p1');
// // event handler
// p1.onclick = function() {
//   p1.style.backgroundColor = 'lightblue';
// }
// p1.onclick = function() {
//   p1.style.color = 'red';
// }

// addEventListener
p1.addEventListener('click', function () {
  p1.style.backgroundColor = 'lightblue';
});
p1.addEventListener('dblclick', function () {
  p1.style.color = 'red';
});
