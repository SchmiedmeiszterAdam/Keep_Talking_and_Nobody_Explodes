const indicators = ["SND", "CLR", "CAR", "IND", "FRQ", "SIG", "NSA", "MSA", "TRN", "BOB", "FRK"]
const ports = [{ "template": "#templates .dvi-d", "name": "DVI-D" },
{ "template": "#templates .parallel", "name": "Parallel" },
{ "template": "#templates .ps-2", "name": "PS/2" },
{ "template": "#templates .serial", "name": "Serial" },
{ "template": "#templates .stereo-rca", "name": "Stereo RCA" },]
class Indicator {
    constructor(elem) {
        this.elem = elem
        this.light = this.elem.find(".light")
        this.text = indicators[Math.floor(Math.random() * indicators.length)]
        this.lit = Math.random() < 0.5
        if (this.lit) {
            this.light.css("background", "white")
        }
        else {
            this.light.css("background", "black")
        }
        this.elem.find(".text").html(this.text)
    }
    getName() {
        return this.text
    }
    getLit() {
        return this.lit
    }
}
class SerialNumber {
    constructor() {
        this.serial = ""
        this.giveText()
    }
    giveText() {
        const abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        for (let i = 0; i < 6; i++) {
            if (i === 2 || i === 5) {
                let number = Math.floor(Math.random() * 10)
                this.serial += number.toString()
            }
            else {
                this.serial += abc[Math.floor(Math.random() * abc.length)]
            }
        }
    }
    getSerial() {
        return this.serial
    }
}
class Port {
    constructor() {

    }
}