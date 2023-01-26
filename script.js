const ctx = document.getElementById('myChart');



fetch('./data.json')
    .then(res => res.json())
    .then(data => { 
        let arrDays = [data[0].day, data[1].day, data[2].day, data[3].day, data[4].day, data[5].day, data[6].day];
        let arrValue = [data[0].amount, data[1].amount, data[2].amount, data[3].amount, data[4].amount, data[5].amount, data[6].amount];       
        
        new Chart (ctx, {
          type: 'bar',
          data: {
              labels: arrDays,
              datasets: [{
                  backgroundColor:["hsl(10, 79%, 65%)","hsl(10, 79%, 65%)","hsl(186, 34%, 60%)","hsl(10, 79%, 65%)","hsl(10, 79%, 65%)"], 
                  label: '# of Votes', 
                  data: arrValue,
              }] 
          },

          options: {
            scales: {
              x: {
                grid: {
                  drawOnChartArea: false
                }
              },
              y: {
                beginAtZero: true, 
                grid: {
                  drawOnChartArea: false
                }
              }
            }
          }
      })

    }) 