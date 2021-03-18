// Dit is voor een andere weergave overdag
function clock(){
    var today = new Date();
         // dit is alleen voor de seconden. Moet dus ook nog voor minuten en uren gebeuren. Dit MOET binnen de functie om elke seconde te verversen
        var seconds = today.getSeconds();
        var minutes = today.getMinutes();
        var hour = today.getHours();
        var days = ['ZO', 'MA', 'DI', 'WO', 'DO', 'VR', 'ZA', 'ZO'];
        
        var rotation = (hour*15) + (minutes*0.25) + (seconds*(0.25/60));
        document.getElementById('globeWrapper').style.transform = 'rotate(' + rotation + 'deg)';


        // Dus vanaf 9 uur 'sochtends tot 9 uur 's avonds
        if (hour >= 7 && hour < 12) {
            document.getElementById('tent').classList.remove('landscapeNight');
            document.getElementById('tent').classList.add('landscapeMorning');
            document.body.style.backgroundImage = "url('img/stage1/o_lucht.jpg')";
        }

            else if(hour >= 12 && hour < 17){
                document.getElementById('tent').classList.remove('landscapeMorning');
                document.getElementById('tent').classList.add('landscapeNoon');
                document.body.style.backgroundImage = "url('img/stage2/m_lucht.jpg')";
            }
            
            else if(hour >= 17 && hour < 20){
                document.getElementById('tent').classList.remove('landscapeNoon');
                document.getElementById('tent').classList.add('landscapeEvening');
                document.body.style.backgroundImage = "url('img/stage3/a_lucht.jpg')";
            }

            else if(hour >= 20 || hour < 7){
                document.getElementById('tent').classList.remove('landscapeEvening');
                document.getElementById('tent').classList.add('landscapeNight');
                document.body.style.backgroundImage = "url('img/stage4/n_lucht.jpg')";
                document.getElementById('astronaut').style.opacity = "1";
            }

        // Als er minder dan 10 seconden is, dus 0 t/m 9, dan moet er een 0 voor de seconden
        if (seconds < 10){
            seconds = '0' + seconds;
        }

        if (minutes < 10){
            minutes = '0' + minutes;
        }

        if (hour == 24){
            hour = '00';
        }

        else if (hour < 10){
            hour = '0' + hour;
        }

    document.getElementById('weekDay').innerHTML = days[today.getDay()];
    document.getElementById('hour').innerHTML = today.getHours();
    document.getElementById('minutes').innerHTML = today.getMinutes();
    document.getElementById('seconds').innerHTML = today.getSeconds();
}

clock();
setInterval(clock, 1000);