$(function(){
    let szuloELem = $("#eloresz")
    let id = 0
    let sablon = $(".simple-wires")
    const ujWires = $(sablon).prependTo(szuloELem)
    const wires = new Wire(ujWires,id)
})