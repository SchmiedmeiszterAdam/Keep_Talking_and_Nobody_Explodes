class SimonSays extends Modul {
    constructor(elem, szulo) {
        super(elem, szulo)
        this.round = Math.floor(Math.random() * 3) + 3
        this.roundSzamlalo = 0
        this.gombok = []
        this.szerepeltSzinek = []
        this.szuloElem = this.elem.find(".simon-says-gombok")
        this.interval
        this.interval2
        this.szinSzamlalo = 0
        this.serialNumberContainVowel
        this.ellenorzesSzamlolo = 0
        this.joSzamlalo = 0
        this.countVowel()
        this.gombokLetrehozasa()
        this.ujGombKivalasztas()
    }

    ujGombKivalasztas() {
        this.szinSzamlalo = 0
        let adottGomb = Math.floor(Math.random() * this.gombok.length)
        this.szerepeltSzinek.push(this.gombok[adottGomb])
        this.mutat()
        this.interval2 = setInterval(() => {
            this.mutat()
            this.ellenorzesSzamlolo = 0
        }, 6000)
    }
    mutat() {
        this.szinSzamlalo = 0
        clearInterval(this.interval)
        this.interval = setInterval(() => { this.gombVillogtatas() }, 800)
    }
    gombVillogtatas() {
        this.szerepeltSzinek[this.szinSzamlalo].gombVilagit()
        setTimeout(() => {
            this.szerepeltSzinek[this.szinSzamlalo].gombVisszaAllitas()
            if (this.szinSzamlalo === this.szerepeltSzinek.length - 1) {
                clearInterval(this.interval)
                this.szinSzamlalo = 0
            }
            else {
                this.szinSzamlalo++
            }
        }, 400)

    }
    ellenorzes(pushedButton) {
        clearInterval(this.interval)
        clearInterval(this.interval2)
        this.interval2 = setInterval(() => {
            this.mutat()
        }, 6000)
        let szin = pushedButton.getSzin()
        if (this.serialNumberContainVowel) {
            if (this.bomba.getStrikes() === 0) {
                this.ellenorzesSeged(szin, "blue", "red", "yellow", "green")
            }
            else if (this.bomba.getStrikes() === 1) {
                this.ellenorzesSeged(szin, "yellow", "green", "blue", "red")
            }
            else {
                this.ellenorzesSeged(szin, "green", "red", "yellow", "blue")
            }
        }
        else {
            if (this.bomba.getStrikes() === 0) {
                this.ellenorzesSeged(szin, "blue", "yellow", "green", "red")
            }
            else if (this.bomba.getStrikes() === 1) {
                this.ellenorzesSeged(szin, "red", "blue", "yellow", "green")
            }
            else {
                this.ellenorzesSeged(szin, "yellow", "green", "blue", "red")
            }
        }
        if (this.joSzamlalo != 0) {
            this.ellenorzesSzamlolo++
        }
        if (this.joSzamlalo === this.szerepeltSzinek.length) {
            clearInterval(this.interval)
            clearInterval(this.interval2)
            this.ujGombKivalasztas()
            this.ellenorzesSzamlolo = 0
            this.joSzamlalo = 0
            this.roundSzamlalo++
        }
        if (this.roundSzamlalo === this.round) {
            this.setTeljesitve()
            clearInterval(this.interval)
            clearInterval(this.interval2)
        }
    }
    ellenorzesSeged(szin, szin1, szin2, szin3, szin4) {
        if (this.szerepeltSzinek[this.ellenorzesSzamlolo].getSzin() === "red" && szin === szin1) {
            this.joSzamlalo++
        }
        else if (this.szerepeltSzinek[this.ellenorzesSzamlolo].getSzin() === "blue" && szin === szin2) {
            this.joSzamlalo++
        }
        else if (this.szerepeltSzinek[this.ellenorzesSzamlolo].getSzin() === "green" && szin === szin3) {
            this.joSzamlalo++
        }
        else if (this.szerepeltSzinek[this.ellenorzesSzamlolo].getSzin() === "yellow" && szin === szin4) {
            this.joSzamlalo++
        }
        else {
            this.sendFault()
            this.ellenorzesSzamlolo = 0
            this.joSzamlalo = 0
        }
    }
    countVowel() {
        const vowels = ['A', 'E', 'I', 'O', 'U'];
        let counts = 0;
        for (let i = 0; i < vowels.length; i++) {
            if (vowels.includes(this.bomba.szeriszam[i])) {
                counts++;
            }
        }
        if (counts > 0) {
            this.serialNumberContainVowel = true
        }
        else {
            this.serialNumberContainVowel = false
        }
    }
    gombokLetrehozasa() {
        const gombSzinNevek = ["red", "blue", "green", "yellow"]
        const gombSzinek = ["rgb(150,1,21)", "rgb(0,1,148)", "rgb(44,176,12)", "rgb(215,175,0)"]
        const villagosSzinek = ["rgb(218,67,36)", "rgb(20,100,208)", "rgb(46, 254, 52)", "rgb(247, 244, 62)"]
        for (let index = 0; index < 4; index++) {
            const gombElem = $("<div class='" + gombSzinNevek[index] + "-gomb simon-says-gomb'></div>")
            const ujelem = $(gombElem).appendTo(this.szuloElem)
            const gomb = new SimonSaysGombok(ujelem, index, this, gombSzinNevek[index], villagosSzinek[index], gombSzinek[index])
            this.gombok.push(gomb)
        }
    }
}
class SimonSaysGombok {
    constructor(elem, id, szulo, szinNev, vilagosSzin, szin) {
        this.elem = elem
        this.id = id
        this.szulo = szulo
        this.szinNev = szinNev
        this.szin = szin
        this.gombVisszaAllitas()
        this.vilagosSzin = vilagosSzin
        this.elem.on("click", () => {
            this.szulo.ellenorzes(this)
        })
    }
    gombVilagit() {
        this.elem.css("background-color", this.vilagosSzin)
    }
    gombVisszaAllitas() {
        this.elem.css("background-color", this.szin)
    }
    getSzin() {
        return this.szinNev
    }
}
