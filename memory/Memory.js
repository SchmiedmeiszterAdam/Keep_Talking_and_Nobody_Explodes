class Memory extends Modul {
    constructor(elem, szulo) {
        super(elem, szulo)
        this.kijelzo = this.elem.find(".memory-kijelzo")
        this.statusJelzok = this.elem.find(".memory-statusz-jelzo-tarolo").children()
        this.szuloElem = this.elem.find(".memory-gombok")//az adott Modul memory gombok divje 
        this.gombok = this.elem.find(".memory-gombok")
        this.stage = 0
        this.ujStage()
        this.kijelzoSzam
        this.voltPoziciok = []
        this.voltSzamok = []
    }
    kijelzoFeliratozas() {
        this.kijelzoSzam = Math.floor(Math.random() * 4) + 1 // 4 számot hoz létre
        this.kijelzo.html(this.kijelzoSzam)
    }
    gombokLetrehozasa() {
        let szerepeltSzamok = []
        this.szuloElem.empty()
        for (let index = 0; index < 4; index++) {
            let szam = Math.floor(Math.random() * 4) + 1
            while (szerepeltSzamok.includes(szam)) { //jegyezd meg az includes függvényt!!!!!!
                szam = Math.floor(Math.random() * 4) + 1

            }
            const gombok = $("<div class='memory-gomb'><h1 class='memory-gomb-felirat'></h1></div>").appendTo(this.szuloElem)//(".memory-gombok") 4, 8, 12
            new MemoryButton(gombok, index, this, szam)
            szerepeltSzamok.push(szam)
        }
    }
    ujStage() {
        this.kijelzoFeliratozas()
        this.gombokLetrehozasa()
        this.stage++
    }
    rossz() {
        this.sendFault()
        this.stage = 0
        this.voltPoziciok = []
        this.voltSzamok = []
        this.osszesLedVisszaAllitas()
    }
    //background-color: rgb(29,19,27);
    osszesLedVisszaAllitas() {
        for (let i = 0; i < this.statusJelzok.length; i++) {
            $(this.statusJelzok[i]).css("background", "rgb(29,19,27)")
        }
    }
    eltarol(gombSzam, pozicio) {
        this.voltSzamok.push(gombSzam)
        this.voltPoziciok.push(pozicio)
    }
    ellenorzes(gombSzam, pozicio) {
        let rossz = false
        switch (this.stage) {
            case 1:
                if (this.stage1(pozicio)) {
                    this.eltarol(gombSzam, pozicio)
                }
                else {
                    rossz = true
                    this.rossz()
                }
                break
            case 2:
                if (this.stage2(gombSzam, pozicio)) {
                    this.eltarol(gombSzam, pozicio)
                }
                else {
                    rossz = true
                    this.rossz()
                }
                break
            case 3:
                if (this.stage3(gombSzam, pozicio)) {
                    this.eltarol(gombSzam, pozicio)
                }
                else {
                    rossz = true
                    this.rossz()
                }
                break
            case 4:
                if (this.stage4(pozicio)) {
                    this.eltarol(gombSzam, pozicio)
                }
                else {
                    rossz = true
                    this.rossz()
                }
                break
            case 5:
                if (!this.stage5(gombSzam)) {
                    rossz = true
                    this.rossz()
                }
                else {
                    this.setTeljesitve()
                }
                break
        }
        if (!rossz) {
            $(this.statusJelzok[this.stage - 1]).css("background", "rgb(176,235,129)")
        }
        if (this.stage < 5) {
            this.ujStage()
        }
    }
    stage1(pozicio) {
        let jo = false
        switch (this.kijelzoSzam) {
            case 1:
                if (pozicio === 1) {
                    jo = true
                }
                break
            case 2:
                if (pozicio === 1) {
                    jo = true
                }
                break
            case 3:
                if (pozicio === 2) {
                    jo = true
                }
                break
            case 4:
                if (pozicio === 3) {
                    jo = true
                }
                if (jo) {

                }
                break
        }
        return jo
    }
    stage2(gombSzam, pozicio) {
        let jo = false
        switch (this.kijelzoSzam) {
            case 1:
                if (gombSzam === 4) {
                    jo = true
                }
                break
            case 2:
                if (pozicio === this.voltPoziciok[0]) {
                    jo = true
                }
                break
            case 3:
                if (pozicio === 0) {
                    jo = true
                }
                break
            case 4:
                if (pozicio === this.voltPoziciok[0]) {
                    jo = true
                }
                break
        }
        return jo
    }
    stage3(gombSzam, pozicio) {
        let jo = false
        switch (this.kijelzoSzam) {
            case 1:
                if (gombSzam === this.voltSzamok[1]) {
                    jo = true
                }
                break
            case 2:
                if (gombSzam === this.voltSzamok[0]) {
                    jo = true
                }
                break
            case 3:
                if (pozicio === 2) {
                    jo = true
                }
                break
            case 4:
                if (gombSzam === 4) {
                    jo = true
                }
                break
        }
        return jo
    }
    stage4(pozicio) {
        let jo = false
        switch (this.kijelzoSzam) {
            case 1:
                if (pozicio === this.voltPoziciok[0]) {
                    jo = true
                }
                break
            case 2:
                if (pozicio === 0) {
                    jo = true
                }
                break
            case 3:
                if (pozicio === this.voltPoziciok[1]) {
                    jo = true
                }
                break
            case 4:
                if (pozicio === this.voltPoziciok[1]) {
                    jo = true
                }
                break
        }
        return jo
    }
    stage5(gombSzam) {
        let jo = false
        switch (this.kijelzoSzam) {
            case 1:
                if (gombSzam === this.voltSzamok[0]) {
                    jo = true
                }
                break
            case 2:
                if (gombSzam === this.voltSzamok[1]) {
                    jo = true
                }
                break
            case 3:
                if (gombSzam === this.voltSzamok[3]) {
                    jo = true
                }
                break
            case 4:
                if (gombSzam === this.voltSzamok[2]) {
                    jo = true
                }
                break
        }
        return jo
    }
}
class MemoryButton {
    constructor(elem, id, szulo, szam) {
        this.elem = elem
        this.id = id
        this.szulo = szulo
        this.szam = szam
        this.gombFelirat = this.elem.find(".memory-gomb-felirat")
        this.gombFelirat.html(this.szam)
        this.elem.on("click", () => {
            if (!this.szulo.getTeljesitve()) {
                this.szulo.ellenorzes(this.szam, this.id)
            }
        })
    }
    setJo() {
        this.jo = true
    }
}
