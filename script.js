const modulePossibilitys = [{ "template": "#templates .simple-wires", "className": SimpleWire },
{ "template": "#templates .button", "className": Button },
{ "template": "#templates .keypads", "className": Keypad },
{ "template": "#templates .simon-says", "className": SimonSays },
{ "template": "#templates .whos-on-first", "className": WhosOnFirst },
{ "template": "#templates .memory", "className": Memory },
{ "template": "#templates .morse-code", "className": Morse },
{ "template": "#templates .maze", "className": Maze },
{ "template": "#templates .password", "className": Password },
{ "template": "#templates .knob", "className": Knob },
{ "template": "#templates .venting-gas", "className": VentingGas },
{ "template": "#templates .complicated-wires", "className": ComplicatedWire },
{ "template": "#templates .wire-sequences", "className": WireSequences }
]
$(function () {
    let bomb = new Bomba($("#bomba").appendTo("main"))
    let bomb1 = []
    let random
    // for (let i = 0; i < 5; i++) {
    //     random = Math.floor(Math.random()*modulePossibilitys.length)
    //     bomb1.push(modulePossibilitys[random])
    // }

    bomb1 = [modulePossibilitys[12], modulePossibilitys[2], modulePossibilitys[1], modulePossibilitys[0]]
    bomb.createModules(bomb1, 5, 0)
})
