let suivant = document.getElementById('suivant')
        let precedent = document.getElementById('precedent')

        let imgSlider = document.getElementsByClassName('img-slider');
        let pastilles = document.getElementsByClassName('pastille');
        let nbrImage = imgSlider.length;
        let etape = 0;

        //play et pause
        let play = document.querySelector('#play');
        let pause = document.querySelector('#pause');
        let playoupause = document.getElementById('playoupause');

        playoupause.addEventListener('click', function() {
            console.log('LDFLQFLDSLKFDS');
            //On récupère les proprités display css de play et pause
            console.log(window.getComputedStyle(play).display);
            console.log(window.getComputedStyle(pause).display);
            if(window.getComputedStyle(play).display === "none") {
                //On passe de play à pause
                play.style.display = "block";
                pause.style.display = "none";
                clearInterval(monInterval);
            }
            else {
                //On passe de pause à play
                play.style.display = "none";
                pause.style.display = "block";
                let monInterval = setInterval(faireDefilerLeSlider, 2000);
            }
        })



        //Fonction permettant de désafficher toutes les images
        function desafficheToutesLesImages() {
            for(let i = 0 ; i < imgSlider.length ; i++) {
                imgSlider[i].classList.remove('active');
                pastilles[i].classList.remove('active');
            }
        }

        //Fonction qui permet de cacher toutes les images sauf l'image correspondant actuellement à l'étape désirée.
        function afficheImageDontEtapeEst(numeroEtape) {
            desafficheToutesLesImages();
            imgSlider[numeroEtape].classList.add('active');
            pastilles[numeroEtape].classList.add('active');
        }

        suivant.addEventListener('click', function() {
            etape++;
            if(etape >= nbrImage) {
                etape = 0;
            }
            console.log(etape);
            afficheImageDontEtapeEst(etape);
            // clearInterval(monInterval);
        })

        precedent.addEventListener('click', function() {
            etape--;
            if(etape < 0) {
                etape = nbrImage - 1;
            }
            console.log(etape);
            afficheImageDontEtapeEst(etape);
            // clearInterval(monInterval);
        })

        let monInterval = setInterval(faireDefilerLeSlider, 2000);

        function faireDefilerLeSlider() {
            etape++;
            if(etape >= nbrImage) {
                etape = 0;
            }
            console.log(etape);
            afficheImageDontEtapeEst(etape);
        }