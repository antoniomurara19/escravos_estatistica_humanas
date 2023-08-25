const idade_mas = document.getElementById('idade_mas');

  Chart.defaults.borderColor = '#fff'
  Chart.defaults.color = '#fff'
  Chart.defaults.font.family = 'system-ui'
  Chart.defaults.font.weight = '1000'

  new Chart(idade_mas, {
    type: 'radar',
    data: {
      labels: ['menor de 19','20-25','26-30','31-35','36-40','41-45','46-50','51-55','56-60','maior de 60'],
      datasets: [{
        label: '62 homens escravizados residentes do Distrito Federal',
        data: [2,7,8,12,13,7,4,4,3,2],
        borderWidth: 5
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

  /* =================================== */

  const idade_fem = document.getElementById('idade_fem');

  Chart.defaults.borderColor = '#fff'
  Chart.defaults.color = '#fff'
  Chart.defaults.font.family = 'system-ui'
  Chart.defaults.font.weight = '1000'

  new Chart(idade_fem, {
    type: 'radar',
    data: {
      labels: ['menor de 19','20-25','26-30','31-35','36-40','41-45','46-50','51-55','56-60','maior de 60'],
      datasets: [{
        label: '16 mulheres escravizadas residentes do Distrito Federal',
        data: [0,4,1,4,2,2,2,1,0,0],
        borderWidth: 3
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

  /* =================================== */

  const idade_mas_ = document.getElementById('idade_mas_');

  Chart.defaults.borderColor = '#fff'
  Chart.defaults.color = '#fff'
  Chart.defaults.font.family = 'system-ui'
  Chart.defaults.font.weight = '300'

  new Chart(idade_mas_, {
    type: 'radar',
    data: {
      labels: ['menor de 19','20-25','26-30','31-35','36-40','41-45','46-50','51-55','56-60','maior de 60'],
      datasets: [{
        label: '48 homens escravizados naturais do Distrito Federal',
        data: [4,12,9,8,6,4,2,1,2,0],
        borderWidth: 5
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

  /* =================================== */
  
  const idade_fem_ = document.getElementById('idade_fem_');

  Chart.defaults.borderColor = '#fff'
  Chart.defaults.color = '#fff'
  Chart.defaults.font.family = 'system-ui'
  Chart.defaults.font.weight = '300'

  new Chart(idade_fem_, {
    type: 'radar',
    data: {
      labels: ['menor de 19','20-25','26-30','31-35','36-40','41-45','46-50','51-55','56-60','maior de 60'],
      datasets: [{
        label: '10 mulheres escravizadas residentes do Distrito Federal',
        data: [0,2,2,2,1,0,0,1,1,1],
        borderWidth: 5
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


    /* responsividade */

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

let dados = [19,19,23,23,23,23,23,23,23,27,27,27,27,27,27,27,27,33,33,33,33,33,33,33,33,33,33,33,33,43,43,43,43,43,43,43,43,43,43,43,43,43,47,47,47,47,47,47,47,53,53,53,53,57,57,57,61,61]
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
  