let timeModulePosition = Math.floor(Math.random() * 4)
const ports = [{ "template": "#templates .dvi-d", "name": "DVI-D" },
{ "template": "#templates .parallel", "name": "Parallel" },
{ "template": "#templates .ps-2", "name": "PS/2" },
{ "template": "#templates .serial", "name": "Serial" },
{ "template": "#templates .stereo-rca", "name": "Stereo RCA" },]
const indicators = ["SND", "CLR", "CAR", "IND", "FRQ", "SIG", "NSA", "MSA", "TRN", "BOB", "FRK"]
class Bomba {
    constructor(elem) {
        this.elem = elem
        this.modules = []
        this.szeriszam
        this.strikes = 0
        this.gyerek = $("#eloresz")
        this.modulokKesz = 0
        this.moduleSzam = 0
        this.batteries = 0
        this.portok
        this.indicators = []
        this.lefSide = this.elem.find("#bal-oldal")
        this.rightSide = this.elem.find("#jobb-oldal")
        this.topSide = this.elem.find("#teteje-oldal")
        this.bottomSide = this.elem.find("#alja-oldal")
        this.appendix()
    }
    modulesCheck() {
        let db = 0
        for (let i = 0; i < this.modules.length; i++) {
            if (this.modules[i].getTeljesitve()) {
                db++
            }
        }
        if (db === this.modules.length) {
            this.idoModul.stop()
        }
    }
    createModule(moduleTemplate, moduleName) {
        if (this.moduleSzam > 4) {
            this.gyerek = $("#hatresz")
        }
        if (this.moduleSzam === timeModulePosition || timeModulePosition === 5) {
            const timeModul = $("#templates #ido-modul").prependTo(this.gyerek)
            const time = new Time(timeModul, this, 5, 0)
            this.idoModul = time
            this.strike1 = $(this.idoModul.elem.find("#strike-1"))
            this.strike2 = $(this.idoModul.elem.find("#strike-2"))
        }
        const newModule = $(moduleTemplate).clone().prependTo(this.gyerek)
        const module = new moduleName(newModule, this.moduleSzam, this)
        this.modules.push(module)
        this.moduleSzam++
    }
    fault() {
        this.strikes++
        this.faultCheck()
    }
    faultCheck() {
        if (this.strikes === 1) {
            this.strike1.css("color", "red")
        }
        else if (this.strikes === 2) {
            this.strike2.css("color", "red")
        }
        else if (this.strikes === 3) {
            console.log("BUMM")
        }
    }
    appendix() {
        let indicatorNumber = Math.floor(Math.random() * 3)
        let serial = ""
        const abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        for (let i = 0; i < indicatorNumber; i++) {
            let givenIndicator = Math.floor(Math.random() * indicators.length)
            const indicator = $("#templates .indicator").clone().appendTo(this.rightSide)
            let lit = Math.floor(Math.random() * 2)
            const i = new Indicator(indicator, indicators[givenIndicator], lit)
            this.indicators.push(i)
        }

        for (let i = 0; i < 6; i++) {
            if(i === 2 || i === 5){
                let number = Math.floor(Math.random() * 10)
                serial += number.toString()
            }
            else{
                serial += abc[Math.floor(Math.random() * abc.length)]
            }
        }
        this.szeriszam = serial


        let portNumber = Math.floor(Math.random() * 3)
        // for (let i = 0; i < portNumber.length; i++) {
        //     this.lefRight
        // }
        let batteriesNumber = Math.floor(Math.random() * 4)
    }
}