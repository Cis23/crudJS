export const getDatasDB = () => JSON.parse(localStorage.getItem(funcionarios)) ?? false;

export const setDataDB = (newFuncionario) => {
  let funcionarios = [];
  const dbFuncionarios = getDatasDB();
  if(dbFuncionarios) funcionarios.push(dbFuncionarios);
  funcionarios.push(newFuncionario);
  localStorage.setItem("funcionarios", JSON.stringify(funcionarios));
}