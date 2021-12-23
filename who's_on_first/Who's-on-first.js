const szavak = [
    { "name": "READY", "ertek": ["YES", "OKAY", "WHAT", "MIDDLE", "LEFT", "PRESS", "RIGHT", "BLANK", "READY", "NO", "FIRST", "UHHH", "NOTHING", "WAIT"] },
    { "name": "FIRST", "ertek": ["LEFT", "OKAY", "YES", "MIDDLE", "NO", "RIGHT", "NOTHING", "UHHH", "WAIT", "READY", "BLANK", "WHAT", "PRESS", "FIRST"] },
    { "name": "NO", "ertek": ["BLANK", "UHHH", "WAIT", "FIRST", "WHAT", "READY", "RIGHT", "YES", "NOTHING", "LEFT", "PRESS", "OKAY", "NO", "MIDDLE"] },
    { "name": "BLANK", "ertek": ["WAIT", "RIGHT", "OKAY", "MIDDLE", "BLANK", "PRESS", "READY", "NOTHING", "NO", "WHAT", "LEFT", "UHHH", "YES", "FIRST"] },
    { "name": "NOTHING", "ertek": ["UHHH", "RIGHT", "OKAY", "MIDDLE", "YES", "BLANK", "NO", "PRESS", "LEFT", "WHAT", "WAIT", "FIRST", "NOTHING", "READY"] },
    { "name": "YES", "ertek": ["OKAY", "RIGHT", "UHHH", "MIDDLE", "FIRST", "WHAT", "PRESS", "READY", "NOTHING", "YES", "LEFT", "BLANK", "NO", "WAIT"] },
    { "name": "WHAT", "ertek": ["UHHH", "WHAT", "LEFT", "NOTHING", "READY", "BLANK", "MIDDLE", "NO", "OKAY", "FIRST", "WAIT", "YES", "PRESS", "RIGHT"] },
    { "name": "UHHH", "ertek": ["READY", "NOTHING", "LEFT", "WHAT", "OKAY", "YES", "RIGHT", "NO", "PRESS", "BLANK", "UHHH", "MIDDLE", "WAIT", "FIRST"] },
    { "name": "LEFT", "ertek": ["RIGHT", "LEFT", "FIRST", "NO", "MIDDLE", "YES", "BLANK", "WHAT", "UHHH", "WAIT", "PRESS", "READY", "OKAY", "NOTHING"] },
    { "name": "RIGHT", "ertek": ["YES", "NOTHING", "READY", "PRESS", "NO", "WAIT", "WHAT", "RIGHT", "MIDDLE", "LEFT", "UHHH", "BLANK", "OKAY", "FIRST"] },
    { "name": "MIDDLE", "ertek": ["BLANK", "READY", "OKAY", "WHAT", "NOTHING", "PRESS", "NO", "WAIT", "LEFT", "MIDDLE", "RIGHT", "FIRST", "UHHH", "YES"] },
    { "name": "OKAY", "ertek": ["MIDDLE", "NO", "FIRST", "YES", "UHHH", "NOTHING", "WAIT", "OKAY", "LEFT", "READY", "BLANK", "PRESS", "WHAT", "RIGHT"] },
    { "name": "WAIT", "ertek": ["UHHH", "NO", "BLANK", "OKAY", "YES", "LEFT", "FIRST", "PRESS", "WHAT", "WAIT", "NOTHING", "READY", "RIGHT", "MIDDLE"] },
    { "name": "PRESS", "ertek": ["RIGHT", "MIDDLE", "YES", "READY", "PRESS", "OKAY", "NOTHING", "UHHH", "BLANK", "LEFT", "FIRST", "WHAT", "NO", "WAIT"] },
    { "name": "YOU", "ertek": ["SURE", "YOU ARE", "YOUR", "YOU'RE", "NEXT", "UH HUH", "UR", "HOLD", "WHAT?", "YOU", "UH UH", "LIKE", "DONE", "U"] },
    { "name": "YOU ARE", "ertek": ["YOUR", "NEXT", "LIKE", "UH HUH", "WHAT?", "DONE", "UH UH", "HOLD", "YOU", "U", "YOU'RE", "SURE", "UR", "YOU ARE"] },
    { "name": "YOUR", "ertek": ["UH UH", "YOU ARE", "UH HUH", "YOUR", "NEXT", "UR", "SURE", "U", "YOU'RE", "YOU", "WHAT?", "HOLD", "LIKE", "DONE"] },
    { "name": "YOU'RE", "ertek": ["YOU", "YOU'RE", "UR", "NEXT", "UH UH", "YOU ARE", "U", "YOUR", "WHAT?", "UH HUH", "SURE", "DONE", "LIKE", "HOLD"] },
    { "name": "UR", "ertek": ["DONE", "U", "UR", "UH HUH", "WHAT?", "SURE", "YOUR", "HOLD", "YOU'RE", "LIKE", "NEXT", "UH UH", "YOU ARE", "YOU"] },
    { "name": "U", "ertek": ["UH HUH", "SURE", "NEXT", "WHAT?", "YOU'RE", "UR", "UH UH", "DONE", "U", "YOU", "LIKE", "HOLD", "YOU ARE", "YOUR"] },
    { "name": "UH HUH", "ertek": ["UH HUH", "YOUR", "YOU ARE", "YOU", "DONE", "HOLD", "UH UH", "NEXT", "SURE", "LIKE", "YOU'RE", "UR", "U", "WHAT?"] },
    { "name": "UH UH", "ertek": ["UR", "U", "YOU ARE", "YOU'RE", "NEXT", "UH UH", "DONE", "YOU", "UH HUH", "LIKE", "YOUR", "SURE", "HOLD", "WHAT?"] },
    { "name": "WHAT?", "ertek": ["YOU", "HOLD", "YOU'RE", "YOUR", "U", "DONE", "UH UH", "LIKE", "YOU ARE", "UH HUH", "UR", "NEXT", "WHAT?", "SURE"] },
    { "name": "DONE", "ertek": ["SURE", "UH HUH", "NEXT", "WHAT?", "YOUR", "UR", "YOU'RE", "HOLD", "LIKE", "YOU", "U", "YOU ARE", "UH UH", "DONE"] },
    { "name": "NEXT", "ertek": ["WHAT?", "UH HUH", "UH UH", "YOUR", "HOLD", "SURE", "NEXT", "LIKE", "DONE", "YOU ARE", "UR", "YOU'RE", "U", "YOU"] },
    { "name": "HOLD", "ertek": ["YOU ARE", "U", "DONE", "UH UH", "YOU", "UR", "SURE", "WHAT?", "YOU'RE", "NEXT", "HOLD", "UH HUH", "YOUR", "LIKE"] },
    { "name": "SURE", "ertek": ["YOU ARE", "DONE", "LIKE", "YOU'RE", "YOU", "HOLD", "UH HUH", "UR", "SURE", "U", "WHAT?", "NEXT", "YOUR", "UH UH"] },
    { "name": "LIKE", "ertek": ["YOU'RE", "NEXT", "U", "UR", "HOLD", "DONE", "UH UH", "WHAT?", "UH HUH", "YOU", "LIKE", "SURE", "YOU ARE", "YOUR"] }]
const foSzavak = [
    { "name": "YES", "hely": 2 },
    { "name": "FIRST", "hely": 1 },
    { "name": "DISPLAY", "hely": 5 },
    { "name": "OKAY", "hely": 1 },
    { "name": "SAYS", "hely": 5 },
    { "name": "NOTHING", "hely": 2 },
    { "name": " ", "hely": 4 },
    { "name": "BLANK", "hely": 3 },
    { "name": "NO", "hely": 5 },
    { "name": "LED", "hely": 2 },
    { "name": "LEAD", "hely": 5 },
    { "name": "READ", "hely": 3 },
    { "name": "RED", "hely": 3 },
    { "name": "REED", "hely": 4 },
    { "name": "LEED", "hely": 4 },
    { "name": "HOLD ON", "hely": 5 },
    { "name": "YOU", "hely": 3 },
    { "name": "YOU ARE", "hely": 5 },
    { "name": "YOUR", "hely": 3 },
    { "name": "YOU'RE", "hely": 3 },
    { "name": "UR", "hely": 0 },
    { "name": "THERE", "hely": 5 },
    { "name": "THEY'RE", "hely": 4 },
    { "name": "THEIR", "hely": 3 },
    { "name": "THEY ARE", "hely": 2 },
    { "name": "SEE", "hely": 5 },
    { "name": "C", "hely": 1 },
    { "name": "CEE", "hely": 5 }]
class WhosOnFirst extends Modul {
    constructor(elem, szulo) {
        super(elem, szulo)
        this.szo = this.elem.find(".whos-on-szo")
        this.gombokSzuloElem = this.elem.find(".whos-on-gombok")
        this.jelzok = this.elem.find(".whos-on-status").children()
        this.gombok = []
        this.szerepeltSzavak = []
        this.fazis = 0
        this.gombFeliratAdas()
        this.joEldontes()
    }
    fazisLeptetes() {
        $(this.jelzok[this.fazis]).css("background", "rgb(176,235,129)")
        this.fazis++
        if (this.fazis === 3) {
            this.setTeljesitve()
        }
        else {
            this.gombFeliratAdas()
            this.joEldontes()
        }
    }
    jelzoVisszaAllitas() {
        this.jelzo1.css("background", "rgb(29,19,27)")
        this.jelzo2.css("background", "rgb(29,19,27)")
        this.jelzo3.css("background", "rgb(29,19,27)")
    }
    joEldontes() {
        //Annak a gombnak a szövegét kapjuk meg amelyiket a főszó által adott helyen van
        this.joGomb = this.gombok[this.joGombHely].getSzoveg()

        let i = 0
        //megkeressük a szavak tömbben a szavunkat amit fent kaptunk
        while (i < szavak.length && szavak[i].name !== this.joGomb) {
            i++
        }
        //a szóhoz tartozó tömböt kiválasztjuk
        const joTomb = szavak[i].ertek

        //lekérjük az összes(6db) gombnak a szövegét
        const gombokSzovege = []
        for (let k = 0; k < this.gombok.length; k++) {
            gombokSzovege.push(this.gombok[k].getSzoveg())
        }
        i = 0
        let jo = false

        //Végigmegyünk a kiválasztott tömbbön egyeseével és megnézzük hogy valamelyik gombon rajta van-e az adott szöveg
        while (i < joTomb.length && !jo) {
            for (let l = 0; l < gombokSzovege.length; l++) {
                if (joTomb[i] === gombokSzovege[l]) {
                    jo = true
                }
            }
            i++
        }

        //A már eldöntött gombra rátesszük a jó tulajdonságát
        for (let h = 0; h < this.gombok.length; h++) {
            if (this.gombok[h].getSzoveg() === joTomb[i - 1]) {
                this.gombok[h].setJo()
            }
        }
    }
    gombFeliratAdas() {
        this.gombok = []
        this.szerepeltSzavak = []
        this.gombokSzuloElem.empty()
        for (let index = 0; index < 6; index++) {
            let adottSzo = szavak[Math.floor(Math.random() * szavak.length)].name
            while (this.szerepeltSzavak.includes(adottSzo)) {
                adottSzo = szavak[Math.floor(Math.random() * szavak.length)].name
            }
            this.szerepeltSzavak.push(adottSzo)
            const gombElem = $("<div class='whos-on-gomb'></div>").appendTo(this.gombokSzuloElem)
            const gomb = new WhosOnFirstButton(gombElem, index, adottSzo, this)
            this.gombok.push(gomb)
        }
        this.foSzo = foSzavak[Math.floor(Math.random() * szavak.length)]
        this.szo.html(this.foSzo.name)
        this.joGombHely = this.foSzo.hely
    }
}
class WhosOnFirstButton {
    constructor(elem, id, szoveg, szulo) {
        this.szulo = szulo
        this.elem = elem
        this.id = id
        this.szoveg = szoveg
        this.elem.append("<h1>" + this.szoveg + "</h1>")
        this.jo = false
        this.elem.on("click", () => {
            if (!this.szulo.getTeljesitve()) {
                if (this.jo) {
                    this.szulo.fazisLeptetes()
                }
                else {
                    this.szulo.sendFault()
                    this.szulo.fazis = 0
                    this.szulo.gombFeliratAdas()
                    this.szulo.joEldontes()
                    this.szulo.jelzoVisszaAllitas()
                }
            }
        })
    }
    getSzoveg() {
        return this.szoveg
    }
    setJo() {
        this.jo = true
    }
}