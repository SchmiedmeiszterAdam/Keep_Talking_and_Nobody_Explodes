let modulePossibilitys = [{ "template": "#templates .simple-wires", "className": SimpleWire },
{ "template": "#templates .whos-on-first", "className": WhosOnFirst },
{ "template": "#templates .keypads", "className": Keypad },
{ "template": "#templates .memory", "className": Memory },
{ "template": "#templates .button", "className": Button },
{ "template": "#templates .simon-says", "className": SimonSays },
{ "template": "#templates .maze", "className": Maze },
{ "template": "#templates .morse-code", "className": Morse },
{ "template": "#templates .password", "className": Password }
]
$(function () {
    const bombTemplate = $("#bomba")
    let bombA = $(bombTemplate).appendTo("main")
    let bomb = new Bomba(bombA)

    let bomb1 = [modulePossibilitys[0], modulePossibilitys[1], modulePossibilitys[2], modulePossibilitys[3], modulePossibilitys[4], modulePossibilitys[5], modulePossibilitys[6], modulePossibilitys[7], modulePossibilitys[8]]
    bomb.createModules(bomb1, 5, 0)
})
