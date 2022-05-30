//mobile menu

let toggle = document.querySelector(".toggle");
let nav = document.querySelector(".nav");
let main = document.querySelector(".main");
let mainCon = document.querySelector(".mainCon")

toggle.onclick = function(){
    nav.classList.toggle("active");
    main.classList.toggle("active");
    mainCon.classList.toggle("container");
    mainCon.classList.toggle("container-fluid");
}


let list = document.querySelectorAll(".nav li");
function activeLink() {
    list.forEach((item) =>
        item.classList.remove("hovered"));
    this.classList.add("hovered")
}
list.forEach((item) => {
    item.addEventListener('mouseover', activeLink)
});

// counter up

$('.counter-up').counterUp({
    delay:10,
    time:1000
});

// pie chart

let orderFromPlace = [1200,1900,3000];
let places = ["Facebook", "Youtube", "Instagram"];

 var op = document.getElementById('op').getContext('2d');
        var myChart = new Chart(op, {
            type: 'polarArea',
            data: {
                labels: places,
                datasets: [{
                    label: '# of Votes',
                    data: orderFromPlace,
                    backgroundColor: [
                        // 'rgba(54, 162, 235, 1)',
                        // 'rgba(255, 206, 86, 1)',
                        // 'rgba(255, 99, 132, 1)',
                        'purple',
                        'violet',
                        'plum'
                    ],
                    borderColor: [
                        // 'rgba(255, 99, 132, 1)',
                        // 'rgba(54, 162, 235, 1)',
                        // 'rgba(255, 206, 86, 1)',
                        // 'rgba(75, 192, 192, 1)',
                        // 'rgba(153, 102, 255, 1)',
                        // 'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: {
                        display:false,
                        beginAtZero: true
                    }
                },
                legend: {
                     
                     labels: {
                         usePointStyle: true,
                         fontColor:'#333'
                     }
                    }
            }
        });

        let dataArr = ['January','February','March','April','May','June','July','August','September','October','November','December',''];
        let orderCountArr = [1200,1090,5000,3000,100,5000,7000,800,6000,4000,3210,7000];
        
         var ctx = document.getElementById('ov').getContext('2d');
                var ovChart = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: dataArr,
                        datasets: [{
                            label: 'Earning',
                            data: orderCountArr,
                            backgroundColor: [
                                // 'rgba(255, 99, 132, 1)',
                                // 'rgba(54, 162, 235, 1)',
                                // 'rgba(255, 206, 86, 1)',
                                // 'rgba(75, 192, 192, 1)',
                                // 'rgba(153, 102, 255, 1)',
                                // 'rgba(255, 159, 64, 1)',
                                // 'rgba(255, 99, 132, 1)',
                                // 'rgba(54, 162, 235, 1)',
                                // 'rgba(255, 206, 86, 1)',
                                // 'rgba(75, 192, 192, 1)',
                                // 'rgba(153, 102, 255, 1)',
                                // 'rgba(255, 159, 64, 1)'
                                'pink',
                                'rgb(245, 92, 245)',
                                'rgb(139, 19, 139)',
                                'rgb(241, 159, 241)',
                                'rgb(185, 30, 185)',
                                'deeppink',
                                'rgb(124, 12, 128)',
                                'rgb(219, 102, 151)',
                                'darkviolet',
                                'deeppink',
                                'rgb(124, 12, 128)',
                                'rgb(219, 102, 151)',
                            ],
                            borderColor: [
                                '#007bff'
                            ],
                            borderWidth: 1,
                            tension:0
                        }]
                    },
                    options: {
                         legend: {
                             position: 'top',
                             labels: {
                                 usePointStyle: true,
                                 fontColor:'#333'
                             }
                            }
                    }
                });