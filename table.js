import list from './tHeadList.js';
import { getDatasDB } from './localStorage.js'
export const LoadHeadersTable = (seletor) => {
  if(document.querySelector('tbody').innerHTML){
    document.querySelector(`${seletor}`).innerHTML = `
      <tr>
        ${ list.map(({title}) => `<th>${title}</th>`) }
      </tr>
    `;
  }
} 

export const loadContentTable = () => {
  const funcionarios = getDatasDB();

  console.log(funcionarios)
  if(funcionarios){
    funcionarios.map( ({nome, genero, dt_nascimento, cargo, empresa}) => {
      document.querySelector('tbody').innerHTML = `
        <tr>
          <td>${nome}</td>
          <td>${genero}</td>
          <td>${dt_nascimento}</td>
          <td>${cargo}</td>
          <td>${empresa}</td>
        </tr>
      `
    } );
  }
}
