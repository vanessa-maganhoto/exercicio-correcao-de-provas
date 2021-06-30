let numeroQuestoes = 0
let gabarito = []
let alunos = []
let respAlunos = []
let acertos = []

function configuraQuestoes(){
    numeroQuestoes = document.getElementById('nQuestoes').value
    console.log(numeroQuestoes)

    let formGabarito = document.getElementById('formGabarito')
    formGabarito.innerHTML= ''
    for (let i=0; i < numeroQuestoes; i++){
        let label = document.createElement('Label')
        label.innerHTML = `Questão ${i+1}`
        formGabarito.appendChild(label)
    
        let input = document.createElement('Input')
        input.setAttribute('type','text')
        input.id = `gab${i+1}`
        formGabarito.appendChild(input)

        formGabarito.appendChild(document.createElement('br'))
    }

    let formRespostas = document.getElementById('formRespostas')
    formRespostas.innerHTML = ''
    for (let i=0; i<numeroQuestoes; i++ ){
        let label = document.createElement('Label')
        label.innerHTML = `Resposta questão ${i+1}: `
        formRespostas.appendChild(label)

        let input = document.createElement('Input')
        input.setAttribute('type','text')
        input.id = `resp${i+1}`
        formRespostas.appendChild(input)
        formRespostas.appendChild(document.createElement('br'))
    }

}

function cadastrar (){
    
    for (let i = 0; i<numeroQuestoes; i++){
        let gab = document.getElementById(`gab${i+1}`)
        gabarito [i] = gab.value
    }

    console.log (gabarito)
}

function inserir (){
    let nome = document.getElementById('nomeAluno')
    alunos.push(nome.value)
    nome.value = ''
    let respostas = []

    for (let i = 0; i<numeroQuestoes; i++){
        let resp = document.getElementById(`resp${i+1}`)
        respostas[i] = resp.value
        resp.value=''
    }

    respAlunos.push(respostas)
    
}

function calcular (){
    if (gabarito.length==0){
        window.alert ('Cadastre o gabarito para prosseguir')
    }
    if (alunos.length==0){
        window.alert ('Cadastre as respostas dos alunos.')
    }
    res.innerHTML = ''
    for (let i=0; i<alunos.length; i++){
        
        acertos [i] = 0
        
        for (let j=0; j<numeroQuestoes; j++ ){
            if (respAlunos[i][j] == gabarito[j]){
                acertos [i] = acertos [i] +1
            }
        }
    }

    for (let i=0; i<alunos.length; i++){
        console.log (`O número de acertos do aluno ${alunos[i]} foi ${acertos[i]}`)
        res.innerHTML+= (`O total de acertos de ${alunos[i]} é igual a ${acertos[i]}. \n<br>`)
    }
    alunos = []
    respAlunos = []
    gabarito = []
}