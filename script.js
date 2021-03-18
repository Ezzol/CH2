// Ik probeerde hier de animatie onload uit te zetten of uit te stellen. Nu krijg je namlijk een animatie onload en dat is lelijk. 
// window.onload = function(){
//     setInterval(function(){
//         document.body.className="delayAnimation";
//     },1000);
// };

// setTimeout(function(){
//     document.body.className="delayAnimation";
// },4000);


// Dit is voor een andere weergave overdag
function clock(){
    var today = new Date();
         // dit is alleen voor de seconden. Moet dus ook nog voor minuten en uren gebeuren. Dit MOET binnen de functie om elke seconde te verversen
        var seconds = today.getSeconds();
        var minutes = today.getMinutes();
        var hour = today.getHours();
        var rotation = (hour*15) + (minutes*0.25) + (seconds*(0.25/60));

        
        document.getElementById('globeWrapper').style.transform = 'rotate(' + rotation + 'deg)';


        // Dus vanaf 9 uur 'sochtends tot 9 uur 's avonds
        if (hour >= 7 && hour < 12) {
            // document.body.style.backgroundImage = "url('img/stage1/o_lucht.jpg')";
            // document.getElementById('tent').style.backgroundImage = "url('img/stage1/o_tent.png')";
            document.getElementById('tent').classList.remove('landscapeNight');
            document.getElementById('tent').classList.add('landscapeMorning');
            document.body.style.backgroundImage = "url('img/stage1/o_lucht.jpg')";
        }

            else if(hour >= 12 && hour < 17){
                // document.body.style.backgroundImage = "url('img/stage2/m_lucht.jpg')";
                // document.getElementById('tent').style.backgroundImage = "url('img/stage2/m_tent.png')";
                document.getElementById('tent').classList.remove('landscapeMorning');
                document.getElementById('tent').classList.add('landscapeNoon');
                document.body.style.backgroundImage = "url('img/stage2/m_lucht.jpg')";
            }
            
            else if(hour >= 17 && hour < 20){
                // document.body.style.backgroundImage = "url('img/stage3/a_lucht.jpg')";
                // document.getElementById('tent').style.backgroundImage = "url('img/stage3/a_tent.png')";
                document.getElementById('tent').classList.remove('landscapeNoon');
                document.getElementById('tent').classList.add('landscapeEvening');
                document.body.style.backgroundImage = "url('img/stage3/a_lucht.jpg')";
            }

            else if(hour >= 20 || hour < 7){
                // document.body.style.backgroundImage = "url('img/stage4/n_lucht.jpg')";
                // document.getElementById('tent').style.backgroundImage = "url('img/stage4/n_tent.png')";
                document.getElementById('tent').classList.remove('landscapeEvening');
                document.getElementById('tent').classList.add('landscapeNight');
                document.body.style.backgroundImage = "url('img/stage4/n_lucht.jpg')";
            }

            if (hour >= 11){
                document.getElementById('moon').classList.add('animateGlobe');
                console.log('testanimatie');
            }
            

        // Als er minder dan 10 seconden is, dus 0 t/m 9, dan moet er een 0 voor de seconden
        if (seconds < 10) {
            seconds = '0' + seconds;
        }

    document.getElementById('weekDay').innerHTML = today.getHours() + ':' + today.getMinutes() + ':' + seconds;
}

clock();
setInterval(clock, 1000);



