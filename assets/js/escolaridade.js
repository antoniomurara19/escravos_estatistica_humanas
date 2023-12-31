const nat = document.getElementById('nat');

  Chart.defaults.borderColor = '#fff'
  Chart.defaults.color = '#fff'
  Chart.defaults.font.family = 'system-ui'
  Chart.defaults.font.weight = '300'

  new Chart(nat, {
    type: 'line',
    data: {
      labels: ['6° ao 9° ano incompleto', 'Ensino Médio Incompleto', 'Até 5° ano incompleto', 'Ensino Médio Completo', 'Analfabeto', '5° Completo'],
      datasets: [{
        label: '37 pessoas escravizadas naturais do Distrito Federal',
        data: [10, 7, 6, 6, 5, 3],
        borderWidth: 3
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      },
        color: '#fff',
        pointBackgroundColor: 'black',
        pointBorderColor: 'black',
    }
  });

  /* =========================== */

  const res = document.getElementById('res');

  new Chart(res, {
    type: 'line',
    data: {
      labels: ['6° ao 9° ano incompleto', 'Ensino Médio Incompleto', 'Até 5° ano incompleto', 'Ensino Médio Completo', 'Analfabeto', 'Fundamental Completo'],
      datasets: [{
        label: '48 pessoas escravizadas residentes do Distrito Federal',
        data: [18, 8, 7, 7, 3, 5],
        borderWidth: 3
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      },
        color: '#fff',
        pointBackgroundColor: 'black',
        pointBorderColor: 'black',
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