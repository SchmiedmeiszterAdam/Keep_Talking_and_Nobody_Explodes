const WireSequencesSorrend = {
    red: {
        0: ["C"],
        1: ["B"],
        2: ["A"],
        3: ["A", "C"],
        4: ["B"],
        5: ["A", "C"],
        6: ["A", "B", "C"],
        7: ["A", "B"],
        8: ["B"],
    },
    blue: {
        0: ["B"],
        1: ["A", "C"],
        2: ["B"],
        3: ["A"],
        4: ["B"],
        5: ["B", "C"],
        6: ["C"],
        7: ["A", "C"],
        8: ["A"],
    },
    black: {
        0: ["A", "B", "C"],
        1: ["A", "C"],
        2: ["B"],
        3: ["A", "C"],
        4: ["B"],
        5: ["B", "C"],
        6: ["A", "B"],
        7: ["C"],
        8: ["C"],
    }
}
const WireSequencesSzinek = ["red", "blue", "black"]
class WireSequences extends Modul {
    constructor(elem, szulo) {
        super(elem, szulo)
        this.fazis = 0
        this.jelenlegiWires = []
        this.elozoWires= {index:0}
        this.szerepeltSzinek = { red: 0, black: 0, blue: 0 }
        this.wireTarolo = this.elem.find(".wire-sequences-wire-tarolo")
        this.levalt = this.elem.find(".also-gomb-tarolo")
        this.visszaValt = this.elem.find(".felso-gomb-tarolo")
        this.fazisJelolok= this.elem.find(".wire-sequences-statusz-jelzo-tarolo")
        this.createWires()
        this.levalt.on("click",()=>{
            if(this.nincsElvagandoDrot()){
                this.kovetkezoFazis()
            }
            else{
                this.sendFault()
            }
        })
    }
    createWires() {
        $(this.wireTarolo).empty()
        let wireMennyiseg = Math.floor(Math.random() * 2) + 2
        let hasznaltWire = []
        for (let index = 0; index < wireMennyiseg; index++) {
            let wireSorszam = Math.floor(Math.random() * 9)
            while (hasznaltWire.includes(wireSorszam)) {
                wireSorszam = Math.floor(Math.random() * 9)
            }
            hasznaltWire.push(wireSorszam)
        }
        hasznaltWire.sort()
        for (let i = 0; i < hasznaltWire.length; i++) {
            let wireSorszam = hasznaltWire[i]
            let elem = $($("#wire-sequences-wire-sablonok").children()[wireSorszam]).clone()
            let wire = $(elem).appendTo($(this.wireTarolo))
            let csatlakozasiPont = ""
            if (wireSorszam % 3 === 0) {
                csatlakozasiPont = "A"
            }
            else if (wireSorszam % 3 === 1) {
                csatlakozasiPont = "B"
            }
            else {
                csatlakozasiPont = "C"
            }
            let szin = WireSequencesSzinek[Math.floor(Math.random() * WireSequencesSzinek.length)]
            let ujWIre = new WireSequencesWire(wire, this, csatlakozasiPont, szin, this.szerepeltSzinek[szin])
            this.szerepeltSzinek[szin]++
            this.jelenlegiWires.push(ujWIre)
        }
    }
    elvagandoE(szin, csatlakozasiPont, sorszam) {
        if (!WireSequencesSorrend[szin][sorszam].includes(csatlakozasiPont)) {
            this.sendFault()
        }

    }
    nincsElvagandoDrot(){
        let ok = true
        this.jelenlegiWires.forEach(element => {
            if(WireSequencesSorrend[element.szin][element.sorszam].includes(element.csatlakozasiPont) && !element.elvagva){
                ok = false
                return
            }
        });
        return ok
    }
    kovetkezoFazis(){
        $(this.fazisJelolok.children()[this.fazis]).css("background", "rgb(176,235,129)")
        this.fazis++
        if(this.fazis != this.fazisJelolok.children().length){
            this.createWires()
        }
        else{
            this.levalt.unbind()
            this.setTeljesitve()
        }
    }
}
class WireSequencesWire {
    constructor(elem, szulo, csatlakozasiPont, szin, sorszam) {
        this.elem = elem
        this.szulo = szulo
        this.csatlakozasiPont = csatlakozasiPont
        this.szin = szin
        this.sorszam = sorszam
        this.elvagva = false
        $(this.elem).css("background-color", this.szin)
        $(this.elem).on("click", () => {
            if(!this.elvagva){
                this.elvag()
            }
        })
        this.elem.on("mouseenter", () => {
            if (!this.elvagva) {
                this.elem.addClass("wire-hover")
            }
        })
        this.elem.on("mouseleave", () => {
            this.elem.removeClass("wire-hover")
        })
    }
    elvag() {
        this.szulo.elvagandoE(this.szin, this.csatlakozasiPont,this.sorszam)
        this.elvagva = true
        this.elem.removeClass("wire-hover")
    }
}