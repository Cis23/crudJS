
const formFuncionario = document.querySelector('#formFuncionario');
const tbody =  document.querySelector('tbody');
let indexEdit = 0;
let indexDelete = 0;
const list = [
  {title: "Nome e Sobrenome"},
  {title: "Gênero"},
  {title: "Idade" },
  {title: "Salário" },
  {title: "Cargo"},
  {title: "Empresa"}
]
formFuncionario.addEventListener('submit', (e) => {
  e.preventDefault();
  const funcionario = getFuncionarioData(e.currentTarget);
  setFuncionarioDataDB(funcionario);
  loadDatasFromDB();  
  e.currentTarget.reset();
});

// Limpa virgulas aleatórias que aparecem
const clearChar = () => {
  document.querySelector("thead").innerHTML = document.querySelector("tbody").innerHTML.replace(/,/g,"");
}

// Manipulam localStorage
const getFuncionariosDataDB = () => JSON.parse(localStorage.getItem('funcionarios')) ?? false;
const setFuncionarioDataDB = (funcionario) => {
  let listOfFuncionarios = [];
  if(getFuncionariosDataDB()) listOfFuncionarios = getFuncionariosDataDB();
  listOfFuncionarios.push(funcionario);
  localStorage.setItem('funcionarios', JSON.stringify(listOfFuncionarios));
}

//Pega dados do Formulário
const getFuncionarioData = (form) => { 
  return {
    nome: form.nome.value,
    cargo: form.cargo.value,
    salario: form.salario.value,
    dt_nasc: form.dt_nasc.value,
    empresa: form.empresa.value,
    sexo: form.sexo.value
  }
}
// Recarrega lista de Títulos das colunas
const LoadHeadersTable = (seletor) => {
  if(document.querySelector('tbody').innerHTML){
    document.querySelector(`${seletor}`).innerHTML = `
      <tr>
        ${ list.map(({title}) => `<th>${title}</th>`) }
      </tr>
    `;
  }
} 
LoadHeadersTable("thead");
// clearChar();

// Carrega os dados do localStorage no corpo da tabela
const loadDatasFromDB = () => {
  tbody.innerHTML = '';
  const datas = getFuncionariosDataDB();
  if(datas){
    datas.map( ({nome,cargo,salario,sexo,empresa,dt_nasc}, index) => { 
      index += 1;
      tbody.innerHTML += `
        <tr data-index='${index}'>
          <td class="nome">${nome ? nome : ''}</td>
          <td class="sexo">${sexo ? sexo : ''}</td>
          <td class="dt_nasc">${dt_nasc ? dt_nasc : ''}</td>
          <td class="salario">${salario ? salario : ''}</td>
          <td class="cargo">${cargo ? cargo : ''}</td>
          <td class="empresa">${empresa ? empresa : ''}</td>

          <td> <button class='edit' onclick='showEditFuncionario(${index})'>Editar</button> </td>
          <td> <button class='delete' onclick='deleteFuncionario(${index})'>deletar</button> </td>
        </tr>
      `; 
    } );
  }
}
loadDatasFromDB();


//Ações de modificação dos elementos
// pega os dados que estão no array e preenche o formulário
const showEditFuncionario = (index) => {
  const father = document.querySelector(`[data-index='${index}']`);
  const funcionario = {
    nome: father.querySelector('.nome').textContent,
    sexo: father.querySelector('.sexo').textContent,
    dt_nasc: father.querySelector('.dt_nasc').textContent,
    salario: father.querySelector('.salario').textContent,
    cargo: father.querySelector('.cargo').textContent,
    empresa: father.querySelector('.empresa').textContent
  };
  indexEdit = index
  fillForm(funcionario);
}
// Preenche o formulário
const fillForm = ({nome,sexo,cargo,salario,empresa,dt_nasc}) => {
  formFuncionario.nome.value = nome

  Array.from(formFuncionario.sexo).map(input => {
    if(input.value == sexo) input.checked = true;
  });

  formFuncionario.empresa.value = empresa
  formFuncionario.cargo.value = cargo
  formFuncionario.salario.value = salario
  formFuncionario.dt_nasc.value = dt_nasc
}
//Edita dados do localStorage
document.querySelector('#editBtn').addEventListener('click', (e) => {
  e.preventDefault();
  edit(indexEdit);
})
const edit = (index) => {
  const funcionarioEdited = getFuncionarioData(formFuncionario);
  const {nome, sexo, cargo, salario, empresa, dt_nasc } = funcionarioEdited;
  const dataDB = getFuncionariosDataDB();

  dataDB[index - 1].nome = nome;
  dataDB[index - 1].sexo = sexo;
  dataDB[index - 1].cargo = cargo;
  dataDB[index - 1].salario = salario;
  dataDB[index - 1].empresa = empresa;
  dataDB[index - 1].dt_nasc = dt_nasc;

  localStorage.funcionarios = JSON.stringify(dataDB);
  loadDatasFromDB();
}

//Deleta dado do localStorage
const deleteFuncionario = (index) => {
  console.log('Deleta',index)
}

// exibe informações da tabela em um modal
const showFuncionario = (index) => {
  console.log('Exibe',index)
}