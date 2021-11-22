$(function () {
    let bombTemplate = $("#bomba")
    let bombA = $(bombTemplate).appendTo("main")
    let bomb = new Bomba(bombA)
    for (let i = 0; i < 4; i++) {
        bomb.createModules()
    }
})