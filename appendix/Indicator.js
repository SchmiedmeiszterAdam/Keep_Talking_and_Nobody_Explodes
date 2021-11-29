class Indicator {
    constructor(elem, text, lit) {
        this.elem = elem
        this.text = text
        this.lit = lit
        this.light = this.elem.find(".light")
        if (this.lit === 0) {
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
    constructor(elem,bomb) {
        this.bomb = bomb
        this.elem = elem
        this.giveText()
    }
    giveText() {
        let serial = ""
        const abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        for (let i = 0; i < 6; i++) {
            if (i === 2 || i === 5) {
                let number = Math.floor(Math.random() * 10)
                serial += number.toString()
            }
            else {
                serial += abc[Math.floor(Math.random() * abc.length)]
            }
        }
        this.bomb.szeriszam = serial
    }
}