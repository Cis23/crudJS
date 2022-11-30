export const getDatasDB = () => JSON.parse(localStorage.getItem("funcionarios")) ?? false;

export const setDataDB = (newFuncionario) => {
  let funcionarios = [];
  const dbFuncionarios = getDatasDB();
  console.log(dbFuncionarios)
  if(dbFuncionarios) funcionarios = dbFuncionarios;
  funcionarios.push(newFuncionario);
  localStorage.setItem("funcionarios", JSON.stringify(funcionarios));
}