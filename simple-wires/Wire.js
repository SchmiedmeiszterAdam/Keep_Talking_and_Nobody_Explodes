const szinek = [
    { "name": "yellow", "color": "rgb(255, 253, 14)" },
    { "name": "black", "color": "rgb(5,3,4)" },
    { "name": "white", "color": "rgb(255,249,232)" },
    { "name": "blue", "color": "rgb(55,93,175)" },
    { "name": "red", "color": "rgb(246, 10, 7)" }]
class Wire extends Modul {
    constructor(elem, id) {
        super()
        this.elem = elem
        this.wires = []
        this.id = id
        this.led = this.elem.find('.kesz')
        let db = Math.floor(Math.random() * 4) + 3
        let szuloELem = $(this.elem.find('.wires'))
        for (let i = 1; i <= db; i++) {
            let szin = szinek[Math.floor(Math.random() * 5)]
            const ujWire = $('<div class="wire wire-' + i + '"style = "background-color: ' + szin.color + ';"></div>').appendTo(szuloELem)
            const wires = new OneWire(ujWire, i, szin)
            this.wires.push(szin.name)
        }
        console.log(this.wires)
        this.elem.on("click", () => {
            this.setAktiv()
            console.log(this.aktiv)
        })
    }


}
class OneWire {
    constructor(elem, id, szin) {
        this.id = id
        this.elem = elem
        this.szin = szin
    }
}