const nat = document.getElementById('nat');

  Chart.defaults.borderColor = '#fff'
  Chart.defaults.color = '#fff'
  Chart.defaults.font.family = 'system-ui'
  Chart.defaults.font.weight = '400'

  new Chart(nat, {
    type: 'pie',
    data: {
      labels: ['Parda','Preta','Branca'],
      datasets: [{
        label: 'Pessoas Naturais escravizados no Distrito Federal',
        data: [49,5,4],
        borderWidth: 2
      }]
    },
    options: {
        animations: {
            tension: {
                duration: 3000,
                easing: 'linear',
                from: 0.5,
                to: 0.2,
                loop: true
        },
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  }
});

/* ==================================== */

const res = document.getElementById('res');

  Chart.defaults.borderColor = '#fff'
  Chart.defaults.color = '#fff'
  Chart.defaults.font.family = 'system-ui'
  Chart.defaults.font.weight = '400'

  new Chart(res, {
    type: 'pie',
    data: {
      labels: ['Parda','Preta','Branca'],
      datasets: [{
        label: 'Pessoas Residentes escravizados no Distrito Federal',
        data: [58,13,7],
        borderWidth: 2
      }]
    },
    options: {
        animations: {
            tension: {
                duration: 3000,
                easing: 'linear',
                from: 1,
                to: 0,
                loop: true
        },
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  }
});

const menu = document.querySelector('.menu')
const side_bar = document.querySelector('.side-bar')
const c = document.querySelector('.c')

menu.addEventListener('click',()=>{
    side_bar.style.left = '0'
    side_bar.style.top = '10vh'
})
c.addEventListener('click',()=>{
    side_bar.style.left = '-200vw'
})

// CÁLCULO ================================

let  botao_calcular = document.getElementById('botao_calcular')
let  media_etnia_res = document.getElementById('media')
let  variancia_res = document.getElementById('var')
let  desvio_padrao_res = document.getElementById('dev')

let dados = [49,5,4]
let media_etnia = 0
let variancia = 0
let soma_variancia = 0
let desvio_padrao = 0

botao_calcular.addEventListener('click', ()=>{
  let soma = 0
  let contador = 0

    for(i=0;i<dados.length;i++){
      soma += Number(dados[i])
      contador += 1
    }

    // MÉDIA
    media_etnia = soma / contador;
    console.log(media_etnia)

    //VARIÂNCIA
    for(i=0;i<dados.length;i++){
      soma_variancia += Number((dados[i]-media_etnia)**2)
    }
    variancia = soma_variancia / soma
    console.log(variancia)

    // DESVIO PADRÃO
    desvio_padrao = Math.sqrt(variancia)
    console.log(desvio_padrao)

    media_etnia_res.innerHTML = 'A média é : ' + media_etnia.toFixed(2)
    variancia_res.innerHTML = 'A variância é : ' + variancia.toFixed(2)
    desvio_padrao_res.innerHTML = 'O desvio padrão é : ' + desvio_padrao.toFixed(2)
});