const appendSlots = [
    "#jobb-oldal-bal-felso-appendix",
    "#jobb-oldal-bal-also-appendix",
    "#jobb-oldal-jobb-felso-appendix",
    "#jobb-oldal-jobb-also-appendix",
    "#bal-oldal-bal-felso-appendix",
    "#bal-oldal-bal-also-appendix",
    "#bal-oldal-jobb-felso-appendix",
    "#bal-oldal-jobb-also-appendix",
    "#teteje-felso-bal-appendix",
    "#teteje-felso-kozep-appendix",
    "#teteje-felso-jobb-appendix",
    "#alja-felso-bal-appendix",
    "#alja-felso-kozep-appendix",
    "#alja-felso-jobb-appendix",
]
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
    createModules(modules, perc, masodperc) {
        this.keveres(modules)
        let timeModulePosition = Math.floor(Math.random() * 6)
        modules.push(modules[timeModulePosition])
        modules[timeModulePosition] = { "template": "#templates #ido-modul", "className": Time }
        for (let i = 0; i < modules.length; i++) {
            if (modules[i].template == "#templates .button") {
                let hely = Math.floor(Math.random() * 5)
                while (modules[hely].template == "#templates .button" || modules[hely].template == "#templates #ido-modul") {
                    hely = Math.floor(Math.random() * 5)
                }
                let modul = modules[hely]
                modules[hely] = modules[i]
                modules[i] = modul
            }
        }
        let newModule
        let module
        for (let k = 0; k < modules.length; k++) {
            if (modules[k].template == "#templates #ido-modul") {
                newModule = $(modules[k].template).clone().prependTo(this.gyerek)
                module = new modules[k].className(newModule, this, perc, masodperc)
                this.idoModul = module
                this.strike1 = $(this.idoModul.elem.find("#strike-1"))
                this.strike2 = $(this.idoModul.elem.find("#strike-2"))
            }
            else {
                newModule = $(modules[k].template).clone().prependTo(this.gyerek)
                module = new modules[k].className(newModule, this)
                this.modules.push(module)
            }
            if (k === 5) {
                this.gyerek = $("#hatresz")
            }
        }
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
        //let portNumber = Math.floor(Math.random() * 3)
        // for (let i = 0; i < portNumber.length; i++) {
        //     
        // }
        let batteryNumber = Math.floor(Math.random() * 4)
        let batteryType
        for (let i = 0; i < batteryNumber; i++) {
            batteryType = Math.floor(Math.random() * 2)
            if (batteryType === 0) {
                $("#templates .double-battery").clone().appendTo(this.elem.find(this.givePlaceToApped()))
                this.batteries += 2
            }
            else {
                $("#templates .simple-battery").clone().appendTo(this.elem.find(this.givePlaceToApped()))
                this.batteries++
            }
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
    getStrikes() {
        return this.strikes
    }
    keveres(tomb) {
        var currentIndex = tomb.length, randomIndex;

        while (currentIndex != 0) {

            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            [tomb[currentIndex], tomb[randomIndex]] = [
                tomb[randomIndex], tomb[currentIndex]];
        }

        return tomb;
    }

}