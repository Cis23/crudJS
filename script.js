import genereteTable from './table.js';
genereteTable("mainContent");
const childs = Array.from(document.querySelector("#mainContent").innerHTML)
// document.querySelector("#mainContent").innerHTML = document.querySelector("#mainContent").innerHTML.replace(/,/g,"")