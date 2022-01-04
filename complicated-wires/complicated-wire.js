const colors = ["white", "red", "blue"]
class ComplicatedWire extends Modul {
    constructor(elem, szulo) {
        super(elem, szulo)
        this.leds = this.elem.find(".complicated-wires-led-tarolo").children()
        this.simbols = this.elem.find(".complicated-wires-simbolum-tarolo").children()
        this.container = this.elem.find(".complicated-wires-tarolo")
        this.wires
        this.createWires()
    }
    createWires() {
        this.wires = []
        let randomSpaces = []
        let wiresAmount = Math.floor(Math.random() * 3) + 4
        for (let i = 0; i < (6 - wiresAmount); i++) {
            let random = Math.floor(Math.random() * 6)
            while (randomSpaces.includes(random)) {
                random = Math.floor(Math.random() * 6)
            }
            randomSpaces.push(random)
        }
        for (let i = 0; i < 6; i++) {
            if (!(randomSpaces.includes(i))) {
                const wire = $("<div class='complicated-wires-wire complicated-wire-" + (i + 1) + "'></div>").appendTo(this.container)
                this.wires.push(new ComplicatedWireWire(wire, this.simbols[i], this.leds[i], this))
            }
        }
        let i = 0
        while (i < this.wires.length && this.wires[i].mustCut === false) {
            i++
        }
        if (i === this.wires.length) {
            for (let i = 0; i < this.simbols.length; i++) {
                $(this.simbols[i]).empty()
                $(this.leds[i]).css("background", "black")
            }
            this.createWires()
        }
    }
    check() {
        let s = 0
        let k = 0
        for (let i = 0; i < this.wires.length; i++) {
            if (this.wires[i].mustCut === true) {
                s++
            }
            if (this.wires[i].cuted == true) {
                k++
            }
        }
        if (s === k) {
            this.setTeljesitve()
        }
    }
}
class ComplicatedWireWire {
    constructor(elem, simbol, led, szulo) {
        this.elem = elem
        this.simbol = simbol
        this.led = led
        this.szulo = szulo
        this.lit = false
        this.star = false
        this.cuted = false
        this.mustCut = false
        this.colors = []
        this.giveColor()
        this.lightLedAndGiveStar()
        this.cutCheck()
        this.elem.on("mouseenter", () => {
            if (!this.cuted) {
                $(this.elem).addClass("wire-hover")
            }
        }).on("mouseleave", () => {
            $(this.elem).removeClass("wire-hover")
        })
        this.elem.on("click", () => {
            if (!this.cuted) {
                $(this.elem).removeClass("wire-hover")
                $(this.elem).append("<div class = 'wire-cut'></div>")
                if (this.mustCut) {
                    this.cuted = true
                    this.szulo.check()
                }
                else {
                    this.szulo.sendFault()
                }
            }
        })
    }
    giveColor() {
        if (Math.random() < 0.5) {
            let color
            for (let i = 0; i < 2; i++) {
                color = colors[Math.floor(Math.random() * colors.length)]
                while (this.colors.includes(color)) {
                    color = colors[Math.floor(Math.random() * colors.length)]
                }
                this.colors.push(color)
            }
            this.elem.css("background-image", "repeating-linear-gradient(-70deg, " + this.colors[0] + ", " + this.colors[0] + " 10px, " + this.colors[1] + " 10px, " + this.colors[1] + " 20px)")
        }
        else {
            this.colors.push(colors[Math.floor(Math.random() * colors.length)])
            this.elem.css("background-color", this.colors[0])
        }
    }
    lightLedAndGiveStar() {
        if (Math.random() < 0.5) {
            $(this.led).css("background-color", "white")
            this.lit = true
        }
        if (Math.random() < 0.5) {
            $(this.simbol).append("<div class='complicated-wires-star'></div>")
            this.star = true
        }
    }
    cutCheck() {
        if (
            ((this.star && !this.lit && (!this.colors.includes("red")) && (!this.colors.includes("blue"))) || (!this.star && !this.lit && (!this.colors.includes("red")) && (!this.colors.includes("blue"))) || (this.star && !this.lit && this.colors.includes("red") && (!this.colors.includes("blue"))))
            || (this.szulo.bomba.getBatterysNumber() >= 2 && ((this.star && this.lit && (!this.colors.includes("red")) && (!this.colors.includes("blue"))) || (this.star && this.lit && this.colors.includes("red") && (!this.colors.includes("blue"))) || (!this.star && this.lit && this.colors.includes("red") && (!this.colors.includes("blue")))))
            || (this.szeriszamParos() && ((this.lit && !this.star && this.colors.includes("red") && this.colors.includes("blue")) || ((!this.lit && !this.star && this.colors.includes("red") && this.colors.includes("blue"))) || ((!this.lit && !this.star && this.colors.includes("red") && !(this.colors.includes("blue"))))))
            || ((this.szulo.bomba.portok.includes("paralell")) && ((this.lit && this.star && this.colors.includes("blue") && !(this.colors.includes("red"))) || (this.lit && !this.star && !(this.colors.includes("red") && this.colors.includes("blue"))) || (!this.lit && this.star && this.colors.includes("red") && this.colors.includes("blue"))))
        ) {
            this.mustCut = true
        }
        else {
            this.mustCut = false
        }
    }
    szeriszamParos() {
        let utolso = this.szulo.bomba.getSerialNumber().substr(this.szulo.bomba.getSerialNumber().length - 1)
        if (utolso % 2 === 0 && utolso != 0) {
            return true
        }
    }
}