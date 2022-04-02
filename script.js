/**  ------------nav links auto shift within page----------- */

var navcontent = document.querySelectorAll('.nav-menu a');

for(var i=0; i<navcontent.length; i++){
    navcontent[i].addEventListener('click',function(e){
        e.preventDefault();

        var targetID = this.textContent.trim().toLowerCase();
        var target = document.getElementById(targetID);
        var cord = target.getBoundingClientRect();
        var y=0;
        var A = setInterval(function(){
            window.scrollBy(0,50);
            y += 50;
            if(y>cord.y){
                window.scrollTo(0,cord.y);
                clearInterval(A);
            }
        },20);
    });
}

/* ----------Autofill Skillls Bar------------ */

var progressbar = document.querySelectorAll('.skill-content-border > div');

window.addEventListener('scroll', checkScroll);

function initialiseBar(bar){
    bar.setAttribute("data-visited", false);
    bar.style.width = 0 + '%';
}

for(let bar of progressbar){
    initialiseBar(bar);
}

function fillBar(bar){
        let targetWidth = bar.getAttribute('data-bar-width');
        let currentWidth = 0;
        let interval = setInterval(function(){
            if(currentWidth >= targetWidth){
                clearInterval(interval);
                return;
            }
            currentWidth++;
            bar.style.width = currentWidth + '%';
        },10);
}

function checkScroll(){
    for(let bar of progressbar){
        var skillcord = bar.getBoundingClientRect();
        if((bar.getAttribute("data-visited")=="false") && 
        (skillcord.top <= (window.innerHeight - skillcord.height))){
            bar.setAttribute("data-visited", true);
            fillBar(bar);
        }
        else if(skillcord.top > window.innerHeight){
            bar.setAttribute("data-visited", false);
            initialiseBar(bar);
        }
    }
}

/**-------------------Percent Viewer Portfolio----------- */
