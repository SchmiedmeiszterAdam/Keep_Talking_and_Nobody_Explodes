let modulePossibilitys = [{ "template": "#templates .simple-wires", "className": Wire },
{ "template": "#templates .whos-on-first", "className": WhosOnFirst },
{ "template": "#templates .keypads", "className": Keypad },
{ "template": "#templates .memory", "className": Memory },
{ "template": "#templates .button", "className": Button },
{ "template": "#templates .simon-says", "className": SimonSays },
{ "template": "#templates .morse-code", "className": SimonSays }
]
$(function () {
    const bombTemplate = $("#bomba")
    let bombA = $(bombTemplate).appendTo("main")
    let bomb = new Bomba(bombA)

    let bomb1 = [modulePossibilitys[6],modulePossibilitys[1],modulePossibilitys[2],modulePossibilitys[3],modulePossibilitys[4],modulePossibilitys[5]]
    keveres(bomb1)
    for (let i = 0; i < bomb1.length; i++) {
        bomb.createModule($(bomb1[i].template), bomb1[i].className)
    }

    if (bomb1.length < 5) {
        for (let i = 0; i < 5 - bomb1.length; i++) {
            $("#eloresz .modul").eq(Math.floor(Math.random() * bomb1.length + 1)).after($("#templates .ures").clone())
        }
        for (let i = 0; i < 6; i++) {
            $("#templates .ures").clone().appendTo("#hatresz")
        }
    }
    if (bomb1.length === 5) {
        for (let i = 0; i < 6; i++) {
            $("#templates .ures").clone().appendTo("#hatresz")
        }
    }
    else {
        for (let i = 0; i < 11 - bomb1.length; i++) {
            $("#templates .ures").clone().appendTo("#hatresz")
        }
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