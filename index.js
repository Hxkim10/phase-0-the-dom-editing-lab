// index.js

const h1 = document.createElement('h1');
h1.textContent = 'Hello World';
document.body.appendChild(h1);

const p = document.createElement('p');
const strong = document.createElement('strong');
strong.textContent = 'This is a strong text';
p.appendChild(strong);
const em = document.createElement('em');
em.textContent = 'This is an emphasized text';
p.appendChild(em);
const a = document.createElement('a');
a.href = 'https://www.example.com';
a.textContent = 'This is a link';
p.appendChild(a);
document.body.appendChild(p);

const table = document.createElement('table');
document.body.appendChild(table);