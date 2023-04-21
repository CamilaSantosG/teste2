let aluno = {
    nome: "Zé",
    turma: "1A",
    notas: [
        "mb",
        "mb",
        ",b"
    ],
    progressaoParcial: [
        {
            semestre: "1",
            componente: "MB"
        },
        {
            semestre:"1",
            componente:"R"
        }
    ]
}
console.log(
    aluno.progressaoParcial[1].componente
)
for(const pp in aluno.componente)
{
    console(pp)
}
