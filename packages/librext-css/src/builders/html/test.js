const ejs = require('ejs');

const template = `
  <h2>Hello <%= name %>!</h2>
  <p>Today is <%= date %></p>
  <p>1 + 2 is <%= 1 + 2 %></p>
`;
const data = {
    name: 'John',
    date: new Date().toISOString().split('T')[0]
};

const output = ejs.render(template, data);

console.log(output);