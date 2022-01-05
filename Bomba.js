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
        this.elem = elem
        this.szeriszam = ""
        this.strikes = 0
        this.modulokKesz = 0
        this.moduleSzam = 0
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
        }
    }
    createModules(modules, perc, masodperc) {
        let timeModulePosition = Math.floor(Math.random() * 6)
        let newModule, module, ujGombHely, kicserelModul, random, randomHely
        if (modules.length < 5) {
            timeModulePosition = Math.floor(Math.random() * modules.length)
        }

        modules.push(modules[timeModulePosition])
        modules[timeModulePosition] = { "template": "#templates #ido-modul", "className": Time }
        if (modules.length > 6) {
            for (let i = 6; i < modules.length; i++) {
                if (modules[i].className == Button) {
                    do {
                        ujGombHely = Math.floor(Math.random() * 6)
                    }
                    while (modules[ujGombHely].className == Button || modules[ujGombHely].className == Time)
                    kicserelModul = modules[ujGombHely]
                    modules[ujGombHely] = modules[i]
                    modules[i] = kicserelModul
                }
            }
        }
        for (let k = 0; k < modules.length; k++) {
            if (modules[k].className == Time) {
                newModule = $(modules[k].template).clone().prependTo(this.gyerek)
                module = new modules[k].className(newModule, this, perc, masodperc)
                this.idoModul = module
                this.strikeIndicators = this.idoModul.elem.find("#strikes").children()
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
        if (modules.length < 6) {
            for (let i = 0; i < 6 - modules.length; i++) {
                random = Math.floor(Math.random() * this.elem.find("#eloresz").children().length - 1)
                randomHely = Math.random() < 0.5
                if (randomHely) {
                    $("#eloresz > div").eq(random).after($("#templates .ures").clone())
                }
                else {
                    $("#eloresz > div").eq(random).before($("#templates .ures").clone())
                }
            }
            hatreszFeltoltes()
        }
        else if (modules.length === 5) {
            hatreszFeltoltes()
        }
        else {
            for (let i = 0; i < 12 - modules.length; i++) {
                random = Math.floor(Math.random() * this.elem.find("#hatresz").children().length)
                randomHely = Math.random() < 0.5
                if (randomHely) {
                    $("#hatresz > div").eq(random).after($("#templates .ures").clone())
                }
                else {
                    $("#hatresz > div").eq(random).before($("#templates .ures").clone())
                }
            }
        }
        function hatreszFeltoltes(){
            for (let i = 0; i < 6; i++) {
                $("#templates .ures").clone().appendTo("#hatresz")
            }
        }
    }
    fault() {
        this.strikes++
        this.faultCheck()
    }
    faultCheck() {
        $(this.strikeIndicators[this.strikes - 1]).css("color", "red")
        if (this.strikes === this.strikeIndicators.length + 1) {
            this.idoModul.stop()
            console.log("BUMM")
        }
    }
    getBatterysNumber() {
        return this.batteries
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
    getSerialNumber() {
        return this.szeriszam
    }
    serialNumberContainVowel() {
        const vowels = ['A', 'E', 'I', 'O', 'U'];
        let counts = 0;
        for (let i = 0; i < vowels.length; i++) {
            if (vowels.includes(this.szeriszam[i])) {
                counts++;
            }
        }
        return counts > 0
    }
}