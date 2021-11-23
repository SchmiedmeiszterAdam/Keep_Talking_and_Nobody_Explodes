// let modulePossibilitys = [{ "template": "#templates .simple-wires", "className": Wire },
// { "template": "#templates .whos-on-first", "className": WhosOnFirst },
// { "template": "#templates .keypads", "className": Keypad },
// { "template": "#templates .memory", "className": Memory }
// ]
$(function () {
    let bombTemplate = $("#bomba")
    let bombA = $(bombTemplate).appendTo("main")
    let bomb = new Bomba(bombA)
    bomb.createModules($("#templates .simple-wires"), Wire)
    bomb.createModules($("#templates .whos-on-first"), WhosOnFirst)
    bomb.createModules($("#templates .keypads"), Keypad)
    bomb.createModules($("#templates .keypads"), Keypad)
    bomb.createModules($("#templates .memory"), Memory)
    bomb.createModules($("#templates .memory"), Memory)
})