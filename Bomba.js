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
class Bomba {
    constructor(elem) {
        this.kesz = false
        this.elem = elem
        this.szeriszam = ""
        this.strikes = 0
        this.batteries = 0
        this.modules = []
        this.portok = []
        this.indicators = []
        this.elem.find("#eloresz").empty()
        this.elem.find("#hatresz").empty()
        this.elem.find(".appendix").empty()
        this.gyerek = $("#eloresz")
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
            this.kesz = true
        }
    }
    createModules(modules, perc, masodperc) {
        this.keveres(modules)
        let timeModulePosition, newModule, module
        if (modules.length < 5) {
            timeModulePosition = Math.floor(Math.random() * modules.length)
        }
        else {
            timeModulePosition = Math.floor(Math.random() * 6)
        }
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
        let random = Math.floor(Math.random() * 5)
        if (modules.length < 6) {
            for (let i = 0; i < 6 - modules.length; i++) {
                random = Math.floor(Math.random() * 5)
                while ($("#eloresz .modul").eq(random).attr('class') === undefined) {
                    random = Math.floor(Math.random() * 5)
                }
                $("#eloresz .modul").eq(random).after($("#templates .ures").clone())
            }
            for (let i = 0; i < 6; i++) {
                $("#templates .ures").clone().appendTo("#hatresz")
            }
        }
        else if (modules.length === 5) {
            for (let i = 0; i < 6; i++) {
                $("#templates .ures").clone().appendTo("#hatresz")
            }
        }
        else {
            for (let i = 0; i < 12 - modules.length; i++) {
                random = Math.floor(Math.random() * 5)
                while ($("#hatresz .modul").eq(random).attr('class') === undefined) {
                    random = Math.floor(Math.random() * 5)
                }
                $("#hatresz .modul").eq(random).after($("#templates .ures").clone())
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
        this.createSerialNumber()
        this.createIndicators()
        this.createBatterys()
    }
    createSerialNumber() {
        $("#templates .serial-modul").clone().appendTo(this.elem.find(this.givePlaceToApped()))
        this.szeriszam = new SerialNumber().getSerial()
        this.elem.find(".serial-number").html(this.szeriszam)
    }
    createIndicators() {
        for (let i = 0; i < Math.floor(Math.random() * 5); i++) {
            const indicator = $("#templates .indicator").clone().appendTo(this.elem.find(this.givePlaceToApped()))
            this.indicators.push(new Indicator(indicator))
        }
    }
    createBatterys() {
        let sablon
        for (let i = 0; i < Math.floor(Math.random() * 5); i++) {
            let batteryType = Math.random() < 0.5
            if (batteryType) {
                sablon = $("#templates .double-battery")
                this.batteries += 2
            }
            else {
                sablon = $("#templates .simple-battery")
                this.batteries++
            }
            sablon.clone().appendTo(this.elem.find(this.givePlaceToApped()))
        }
    }
    createPorts() {
        // for (let i = 0; i < Math.floor(Math.random() * 5); i++) {
        //     
        // }
    }

    givePlaceToApped() {
        let place = appendSlots[Math.floor(Math.random() * appendSlots.length)]
        while (!$(place).children().length == 0) {
            place = appendSlots[Math.floor(Math.random() * appendSlots.length)]
        }
        return place
    }

    litIndicator(name) {
        let i = 0
        while (i < this.indicators.length && !(this.indicators[i].getName() === name && this.indicators[i].getLit())) {
            i++
        }
        return i < this.indicators.length
    }
    getStrikes() {
        return this.strikes
    }
    keveres(tomb) {
        let currentIndex = tomb.length, randomIndex;
        while (currentIndex != 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [tomb[currentIndex], tomb[randomIndex]] = [tomb[randomIndex], tomb[currentIndex]];
        }
        return tomb;
    }
    getSerialNumber(){
        return this.szeriszam
    }
}