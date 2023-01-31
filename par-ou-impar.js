function parOuImpar(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
const numeroAleatorioEntreZeroeDez = parOuImpar(0, 10)
//console.log(numeroAleatorioEntreZeroeDez)
console.log(`O número sorteado foi: ${numeroAleatorioEntreZeroeDez}`)

const soma = Number(process.argv[3]) + Number(numeroAleatorioEntreZeroeDez)
//console.log(soma)

console.log("=================================================================================")


if(process.argv[2]==="par" && soma %2 === 0){
    console.log(`O Dev escolheu par e o Computador escolheu ímpar, o resultado foi ${soma}.O Dev ganhou`)
}else if(process.argv[2]=== "impar" && soma %2 !== 0){
    console.log(`O Dev escolheu impar e o Computador escolheu par, o resultado foi ${soma}.O Dev ganhou`)
}else if(process.argv[2]==="par" && soma %2 !== 0){
    console.log(`O Dev escolheu par e o Computador escolheu impar, o resultado foi ${soma}.O Computador ganhou`)
}else if(process.argv[2]=== "impar" && soma %2 === 0){
    console.log(`O Dev escolheu impar e o Computador escolheu par, o resultado foi ${soma}.O Computador ganhou`)
}