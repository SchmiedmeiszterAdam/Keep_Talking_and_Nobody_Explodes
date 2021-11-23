 let modulePossibilitys = [{ "template": "#templates .simple-wires", "className": Wire },
 { "template": "#templates .whos-on-first", "className": WhosOnFirst },
 { "template": "#templates .keypads", "className": Keypad },
 { "template": "#templates .memory", "className": Memory }
 ]
$(function () {
    let bombTemplate = $("#bomba")
    let bombA = $(bombTemplate).appendTo("main")
    let bomb = new Bomba(bombA)
    
    let bomb1 = [modulePossibilitys[0],modulePossibilitys[1],modulePossibilitys[2],modulePossibilitys[3]]
    if(bomb1.length < 6){
        for (let i = 0; i < 5-bomb1.length; i++) {
            $("#templates .ures").clone().appendTo(bomb.gyerek)
        }
    }
    else{
        for (let i = 0; i < 11-bomb1.length; i++) {
            $("#templates .ures").clone().appendTo(bomb.gyerek)
        }
    }
    keveres(bomb1)
    for (let i = 0; i < bomb1.length; i++) {
        bomb.createModule($(bomb1[i].template), bomb1[i].className)
    }
    
    function keveres(tomb) {
        var currentIndex = tomb.length, randomIndex;
    
        while (currentIndex != 0) {
    
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
    
            [tomb[currentIndex], tomb[randomIndex]] = [
                tomb[randomIndex], tomb[currentIndex]];
        }
    
        return tomb;
    }
})