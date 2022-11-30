import { LoadHeadersTable, loadContentTable } from './table.js';
import getFuncionario from './getFuncionario.js';
import { getDatasDB, setDataDB } from './localStorage.js';

const btnSubmit = document.querySelector("#btnSubmit");
const form = document.querySelector("form")

loadContentTable();
LoadHeadersTable("thead");

const childs = Array.from(document.querySelector("#mainContent thead").innerHTML)
document.querySelector("#mainContent").innerHTML = document.querySelector("#mainContent").innerHTML.replace(/,/g,"");


btnSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  const funcionario = getFuncionario(form)
  setDataDB(funcionario);

  loadContentTable();
  LoadHeadersTable("thead");
})