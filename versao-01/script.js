let gabarito = []
let alunos = []
let respAlunos = []
let acertos = []
function cadastrar (){
    gabarito [0] = document.getElementById('gab1').value
    gabarito [1] = document.getElementById('gab2').value
    gabarito [2] = document.getElementById('gab3').value
    gabarito [3] = document.getElementById('gab4').value
    gabarito [4] = document.getElementById('gab5').value

    console.log (gabarito)
}

function inserir (){
    let nome = document.getElementById('nomeAluno')
    alunos.push(nome.value)
    nome.value = ''
    let respostas = []
    let resp1 = document.getElementById('resp1')
    respostas.push(resp1.value)
    resp1.value=''

    let resp2 = document.getElementById('resp2')
    respostas.push(resp2.value)
    resp2.value=''

    let resp3 = document.getElementById('resp3')
    respostas.push(resp3.value)
    resp3.value=''

    let resp4 = document.getElementById('resp4')
    respostas.push(resp4.value)
    resp4.value=''
 
    let resp5 = document.getElementById('resp5')
    respostas.push(resp5.value)
    resp5.value=''

    respAlunos.push(respostas)
    
}

function calcular (){
    for (let i=0; i<alunos.length; i++){
        
        acertos [i] = 0
        
        for (let j=0; j<5; j++ ){
            if (respAlunos[i][j] == gabarito[j]){
                acertos [i] = acertos [i] +1
            }
        }
    }

    for (let i=0; i<alunos.length; i++){
        console.log (`O número de acertos do aluno ${alunos[i]} foi ${acertos[i]}`)
        res.innerHTML+= (`O número de acertos do aluno ${alunos[i]} foi ${acertos[i]} \n<br>`)
    }
}