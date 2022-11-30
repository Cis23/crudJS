const getFuncionario = (form) => {
  return {
    nome: form.nome.value,
    genero: form.genero.value,
    dt_nascimento: form.dt_nascimento.value,
    cargo: form.cargo.value,
    empresa: form.empresa.value
  }
}
export default getFuncionario;