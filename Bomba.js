let timeModulePosition = Math.floor(Math.random() * 4)
const appendSlots = [
    "#jobb-oldal-bal-felso-appendix",
    "#jobb-oldal-bal-also-appendix",
    "#jobb-oldal-jobb-felso-appendix",
    "#jobb-oldal-jobb-also-appendix",
    "#bal-oldal-bal-felso-appendix",
    "#bal-oldal-bal-also-appendix",
    "#bal-oldal-jobb-felso-appendix",
    "#bal-oldal-jobb-also-appendix"]
const ports = [{ "template": "#templates .dvi-d", "name": "DVI-D" },
{ "template": "#templates .parallel", "name": "Parallel" },
{ "template": "#templates .ps-2", "name": "PS/2" },
{ "template": "#templates .serial", "name": "Serial" },
{ "template": "#templates .stereo-rca", "name": "Stereo RCA" },]
const indicators = ["SND", "CLR", "CAR", "IND", "FRQ", "SIG", "NSA", "MSA", "TRN", "BOB", "FRK"]
class Bomba {
    constructor(elem) {
        this.elem = elem
        this.elem.find("#eloresz").empty()
        this.elem.find("#hatresz").empty()
        this.elem.find(".appendix").empty()
        this.modules = []
        this.szeriszam = ""
        this.strikes = 0
        this.gyerek = $("#eloresz")
        this.modulokKesz = 0
        this.moduleSzam = 0
        this.batteries = 0
        this.portok = []
        this.indicators = []
        this.appendix()
        this.elem.find(".serial-number").html(this.szeriszam)
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
            this.idoModul.stop()
            console.log("BUMM")
        }
    }
    appendix() {
        const serial = $("#templates .serial-modul").clone().appendTo(this.elem.find(this.givePlaceToApped()))
        let s = new SerialNumber(serial, this)
        let indicatorNumber = Math.floor(Math.random() * 3)

        for (let i = 0; i < indicatorNumber; i++) {
            let givenIndicator = Math.floor(Math.random() * indicators.length)
            const indicator = $("#templates .indicator").clone().appendTo(this.elem.find(this.givePlaceToApped()))
            let lit = Math.floor(Math.random() * 2)
            const i = new Indicator(indicator, indicators[givenIndicator], lit)
            this.indicators.push(i)
        }
        let portNumber = Math.floor(Math.random() * 3)
        // for (let i = 0; i < portNumber.length; i++) {
        //     
        // }
        let batteriesNumber = Math.floor(Math.random() * 4)
        for (let i = 0; i < batteriesNumber; i++) {
            this.batteries++
        }
    }
    givePlaceToApped() {
        let place = appendSlots[Math.floor(Math.random() * appendSlots.length)]
        while (!$(place).children().length == 0) {
            place = appendSlots[Math.floor(Math.random() * appendSlots.length)]
        }
        return place
    }

    litIndicator(name) {
        for (let i = 0; i < this.indicators.length; i++) {
            if (this.indicators[i].getName() === name && this.indicators[i].getLit() === 0) {
                return true
            }
            else {
                return false
            }
        }
    }
    getStrikes(){
        return this.strikes
    }
}