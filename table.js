import list from './tHeadList.js';
const genereteTable = (idParent) => {
  document.querySelector(`#${idParent}`).innerHTML = `
    <table>
      <thead>
        <tr>
          ${ list.map( ({title}) => {
            return `<th>${title}</th>`
          }) }
        </tr>
      </thead>
      <tbody>
        <tr>,</tr>
      </tbody>
    </table>
  `;
} 
export default genereteTable;