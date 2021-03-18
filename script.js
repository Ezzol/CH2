// Dit is voor een andere weergave overdag
function clock(){
    var today = new Date();
         // Met deze variabele haal ik de seconden, minuten en uren op. Dit MOET binnen de functie om elke seconde te verversen
        var seconds = today.getSeconds();
        var minutes = today.getMinutes();
        var hour = today.getHours();
        // Deze variabele heeft een array waarin de dagen zitten. Te beginnen bij zondag, want zondag is dag 0
        var days = ['ZO', 'MA', 'DI', 'WO', 'DO', 'VR', 'ZA', 'ZO'];
        
        // Deze variabele berekent hoeveel graden de zon en maan moeten bewegen per seconde, minuut en uur. Vervolgens wordt deze data in css toegevoegd en aangepast
        var rotation = (hour*15) + (minutes*0.25) + (seconds*(0.25/60));
        document.getElementById('globeWrapper').style.transform = 'rotate(' + rotation + 'deg)';


        // Als het 7 uur of later is, maar voor 12 uur, dan ochtendlandschap en lucht laten zien.
        if (hour >= 7 && hour < 12) {
            document.getElementById('tent').classList.remove('landscapeNight');
            document.getElementById('tent').classList.add('landscapeMorning');
            document.body.style.backgroundImage = "url('img/stage1/o_lucht.jpg')";
        }

            // Als het 12 uur of later is, maar voor 17 uur, dan middaglandschap en lucht laten zien.
            else if(hour >= 12 && hour < 17){
                document.getElementById('tent').classList.remove('landscapeMorning');
                document.getElementById('tent').classList.add('landscapeNoon');
                document.body.style.backgroundImage = "url('img/stage2/m_lucht.jpg')";
            }
            
            // Als het 17 uur of later is, maar voor 20 uur, dan avondlandschap en lucht laten zien.
            else if(hour >= 17 && hour < 20){
                document.getElementById('tent').classList.remove('landscapeNoon');
                document.getElementById('tent').classList.add('landscapeEvening');
                document.body.style.backgroundImage = "url('img/stage3/a_lucht.jpg')";
            }

            // Als het 20 uur of later is, maar voor 7 uur, dan nachtlandschap en lucht laten zien. Ook de astronautanimatie nu zichtbaar maken
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

        // Als er minder dan 10 minuten is, dus 0 t/m 9, dan moet er een 0 voor de minuten
        if (minutes < 10){
            minutes = '0' + minutes;
        }

        // Als het 24 uur is, weergeven als 00 uur.
        if (hour == 24){
            hour = '00';
        }

        // Als er minder dan 10 uren is, dus 0 t/m 9, dan moet er een 0 voor de uren
        else if (hour < 10){
            hour = '0' + hour;
        }

    // Haal de dag, het uur, de minuut en de seconde op en plaats deze in de juiste html tag
    document.getElementById('weekDay').innerHTML = days[today.getDay()];
    document.getElementById('hour').innerHTML = hour;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;
}

// Run de klok en zet de interval van de klok op 1 seconde
clock();
setInterval(clock, 1000);