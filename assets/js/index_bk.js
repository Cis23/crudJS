const formFunc = document.querySelector("#formUsuario");
const tbody = document.querySelector("tbody");

formFunc.addEventListener('submit', (e) => {
  e.preventDefault();
  e.stopPropagation();
  registerFunc(this)
  loadFunc();
});

const getFuncsBD = () => JSON.parse(localStorage.getItem("dbfunc")) ?? []
const setFuncsBD = (func) => { 
  let funcionarios = [];
  if (localStorage.dbfunc && localStorage.dbfunc != 'undefined' && localStorage.dbfunc != 'null') {
    funcionarios = getFuncsBD();
  }
  funcionarios.push(func);
  localStorage.setItem('dbfunc', JSON.stringify(funcionarios));
}
const getFuncForm = (form) => {
  return {
    nome: form.nome.value, 
    cargo: form.cargo.value, 
    salario: form.salario.value
  }
}
const registerFunc = () => {
  const func = getFuncForm(formFunc);
  setFuncsBD(func);
}
const loadFunc = () => {
  const funcs = getFuncsBD();
  tbody.innerHTML = ''; 
  funcs.forEach((func, index) => {
    insertFunc(func, index);
  });
}
const insertFunc = ({nome,cargo,salario}, index) => {
  const tr = document.createElement("tr");

  tr.innerHTML += `

    <td>${nome}</td>
    <td>${cargo}</td>
    <td>${salario}</td>

    <td> <button class="edit" onclick="edit(${index})">Edit</button> </td>
    <td> <button class="delete" onclick="delete(${index})">Delete</button> </td>
  `;

  tbody.appendChild(tr);
}
loadFunc();