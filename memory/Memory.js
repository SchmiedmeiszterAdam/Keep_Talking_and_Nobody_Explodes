
class Memory extends Modul {
    constructor(elem, id, szulo) {
        super(elem, id, szulo)
        this.kijelzo = this.elem.find(".memory-kijelzo")
        this.statuszLed1 = this.elem.find(".memory-statusz-jelzo-1")
        this.statuszLed2 = this.elem.find(".memory-statusz-jelzo-2")
        this.statuszLed3 = this.elem.find(".memory-statusz-jelzo-3")
        this.statuszLed4 = this.elem.find(".memory-statusz-jelzo-4")
        this.statuszLed5 = this.elem.find(".memory-statusz-jelzo-5")
        this.szuloElem = this.elem.find(".memory-gombok")//az adott Modul memory gombok divje 
        this.gombok = this.elem.find(".memory-gombok")
        this.szerepeltSzamok
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
        this.szerepeltSzamok = []
        this.szuloElem.empty()
        for (let index = 0; index < 4; index++) {
            let szam = Math.floor(Math.random() * 4) + 1
            while (this.szerepeltSzamok.includes(szam)) { //jegyezd meg az includes függvényt!!!!!!
                szam = Math.floor(Math.random() * 4) + 1

            }
            const gombSablon = $("<div class='memory-gomb'><h1 class='memory-gomb-felirat'></h1></div>")
            const gombok = gombSablon.appendTo(this.szuloElem)//(".memory-gombok") 4, 8, 12
            const ujgomb = new MemoryButton(gombok, index, this, szam)
            this.szerepeltSzamok.push(szam)
        }
    }
    ujStage() {
        this.kijelzoFeliratozas()
        this.gombokLetrehozasa()
        this.stage++
        console.log(this.stage)
    }
    rossz() {
        this.stage = 0
        this.ujStage()
        this.voltPoziciok = []
        this.voltSzamok = []
        this.osszesLedVisszaAllitas()
    }
    //background-color: rgb(29,19,27);
    osszesLedVisszaAllitas() {
        this.statuszLed1.css("background", "rgb(29,19,27)")
        this.statuszLed2.css("background", "rgb(29,19,27)")
        this.statuszLed3.css("background", "rgb(29,19,27)")
        this.statuszLed4.css("background", "rgb(29,19,27)")
        this.statuszLed5.css("background", "rgb(29,19,27)")
    }
    eltarol(gombSzam, pozicio) {
        this.voltSzamok.push(gombSzam)
        this.voltPoziciok.push(pozicio)
    }
    ellenorzes(gombSzam, pozicio) {
        if (this.stage === 5) {
            this.statuszLed1.css("background", "rgb(176,235,129)")
            this.setTeljesitve()
        } else {
            switch (this.stage) {
                case 1:
                    if (this.stage1(pozicio)) {
                        this.ujStage()
                        this.statuszLed5.css("background", "rgb(176,235,129)")
                        this.eltarol(gombSzam, pozicio)
                    }
                    else {
                        this.rossz()
                    }
                    break
                case 2:
                    if (this.stage2(gombSzam, pozicio)) {
                        this.ujStage()
                        this.statuszLed4.css("background", "rgb(176,235,129)")
                        this.eltarol(gombSzam, pozicio)
                    }
                    else {
                        this.rossz()
                    }
                    break
                case 3:
                    if (this.stage3(gombSzam, pozicio)) {
                        this.ujStage()
                        this.statuszLed3.css("background", "rgb(176,235,129)")
                        this.eltarol(gombSzam, pozicio)
                    }
                    else {
                        this.rossz()
                    }
                    break
                case 4:
                    if (this.stage4(pozicio)) {
                        this.statuszLed2.css("background", "rgb(176,235,129)")
                        this.eltarol(gombSzam, pozicio)
                        this.ujStage()
                    }
                    else {
                        this.rossz()
                    }
                    break
                case 5:
                    if (this.stage5(gombSzam)) {
                        
                        this.eltarol(gombSzam, pozicio)
                        this.ujStage()
                    }
                    else {
                        this.rossz()
                    }
                    break
            }


            console.log(this.voltPoziciok, this.voltSzamok)
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
            this.szulo.ellenorzes(this.szam, this.id)
        })
    }
    setJo() {
        this.jo = true
    }
}
