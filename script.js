// Esse script é utilizado no TamperMonkey, e funciona em 3 partes a primeira ele salva um grupo, em seguida salvará outro grupo, e a última é a execução da comparação, e o resultado irá ir no Console.




//Primeiro grupo a ser armazenado os dados, como o TamperMonkey executa uma função e limita o escopo, irei passar os dados como propriedade de um objeto global (window)
let groupA = document.querySelector('.zzgSd._3e6xi').textContent.split(', ')
window.groupA = groupA
window.groupA ? alert('Grupo A armazenado') : alert('Houve um erro ao armazenar')


//Segundo grupo grupo a ser armazenado os dados, como o TamperMonkey executa uma função e limita o escopo, irei passar os dados como propriedade de um objeto global (window)
let groupB = document.querySelector('.zzgSd._3e6xi').textContent.split(', ')
window.groupB = groupB
window.groupB ? alert('Grupo B armazenado') : alert('Houve um erro ao armazenar')


//Compara os números do grupo A e B, caso o contato seja repetido
groupA.forEach(el => groupB.includes(el) ? console.log(`O número ${el} está em ambos os grupos`) : null)
alert('Aperte F12 e selecione "Console" para ver os números repetidos')
