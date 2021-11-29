class SimonSays extends Modul {
    constructor(elem, id, szulo) {
        super(elem, id, szulo)
        this.round = Math.floor(Math.random() * 3) + 3
        this.roundSzamlalo = 1
        this.gombok = []
        this.szerepeltSzinek = []
        this.szuloElem = this.elem.find(".simon-says-gombok")
        this.interval
        this.szinSzamlalo = 0

        this.gombokLetrehozasa()
        this.ujGombKivalasztas()

        this.elem.on("click", () => {
            clearInterval(this.interval)
            this.ujGombKivalasztas()
        })
    }

    ujGombKivalasztas() {
        this.szinSzamlalo = 0
        let adottGomb = Math.floor(Math.random() * this.gombok.length)
        this.szerepeltSzinek.push(this.gombok[adottGomb])
        this.mutat()
    }
    mutat() {
        this.interval = setInterval(()=>{this.gombVillogtatas()}, 800)
    }
    gombVillogtatas() {
        console.log("HELLO")
        this.szerepeltSzinek[this.szinSzamlalo].gombVilagit()
        setTimeout(() => {
            this.szerepeltSzinek[this.szinSzamlalo].gombVisszaAllitas()
            if (this.szinSzamlalo === this.szerepeltSzinek.length - 1) {
                clearInterval(this.interval)
                this.szinSzamlalo = 0
            }
            else{
                this.szinSzamlalo++
            }
        }, 400)
    }
    gombokLetrehozasa() {
        const gombSzinek = ["red", "blue", "green", "yellow"]
        const villagosSzinek = ["pink", "lightblue", "limegreen", "rgb(255, 255, 97)"]
        for (let index = 0; index < 4; index++) {
            const gombElem = $("<div class='" + gombSzinek[index] + "-gomb simon-says-gomb'></div>")
            const ujelem = $(gombElem).appendTo(this.szuloElem)
            const gomb = new SimonSaysGombok(ujelem, index, this, gombSzinek[index], villagosSzinek[index])
            this.gombok.push(gomb)
        }
    }
}
class SimonSaysGombok {
    constructor(elem, id, szulo, szin, vilagosSzin) {
        this.elem = elem
        this.id = id
        this.szulo = szulo
        this.szin = szin
        this.vilagosSzin = vilagosSzin
    }
    gombVilagit() {
        this.elem.css("background-color", this.vilagosSzin)
    }
    gombVisszaAllitas() {
        this.elem.css("background-color", this.szin)
    }
    getSzin() {
        return this.szin
    }
}
//<div class="piros-gomb simon-says-gomb"></div>
/* <div class="kek-gomb simon-says-gomb"></div>
<div class="zold-gomb simon-says-gomb"></div>
<div class="sarga-gomb simon-says-gomb"></div> */