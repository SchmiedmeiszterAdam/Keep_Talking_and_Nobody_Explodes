// let modulePossibilitys = [{ "template": "#templates .simple-wires", "className": Wire },
// { "template": "#templates .whos-on-first", "className": WhosOnFirst },
// { "template": "#templates .keypads", "className": Keypad },
// { "template": "#templates .memory", "className": Memory }
// ]
$(function () {
    let bombTemplate = $("#bomba")
    let bombA = $(bombTemplate).appendTo("main")
    let bomb = new Bomba(bombA)
    bomb.createModule($("#templates .simple-wires"), Wire)
    bomb.createModule($("#templates .whos-on-first"), WhosOnFirst)
    bomb.createModule($("#templates .keypads"), Keypad)
    bomb.createModule($("#templates .keypads"), Keypad)
    //bomb.createModule($("#templates .memory"), Memory)
    //bomb.createModule($("#templates .memory"), Memory)
    if(bomb.countModules() < 6){
        for (let i = 0; i < 5-bomb.countModules(); i++) {
            bomb.gyerek.append("<div class = 'ures'></div>")
        }
    }
    else{
        for (let i = 0; i < 11-bomb.countModules(); i++) {
            bomb.gyerek.append("<div class = 'ures'></div>")
        }
    }
})