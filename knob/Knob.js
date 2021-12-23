const configurations = [
    { "position": "up", "leds": ["010111011011", "100111001101"] },
    { "position": "down", "leds": ["011111010011", "100110001001"] },
    { "position": "left", "leds": ["010000011101", "000000011100"] },
    { "position": "right", "leds": ["110111101110", "110111100100"] }
]
class Knob extends Modul {
    constructor(elem, szulo) {
        super(elem, szulo)
        this.nyil = this.elem.find(".knob-nyil")
        this.time = this.elem.find(".knob-ido")
        this.mainModule = this.elem.find(".knob-kor-belso-tarolo")
        this.nyilForgatasSzamlalo = 0
        this.leds = []
        this.rightPosition
        this.timer
        this.findLeds()
        setTimeout(() => {
            this.start()
        }, 10000 + (Math.floor(Math.random()) * 10) * 100)
        this.nyil.on("click", () => {
            this.nyilForgatasSzamlalo += 90
            if (this.nyilForgatasSzamlalo === 360) {
                this.nyilForgatasSzamlalo = 0
            }
            this.nyil.css("transform", "rotate(" + this.nyilForgatasSzamlalo + "deg)")
        })

    }
    findLeds() {
        this.leds.push(this.elem.find(".knob-bal-led-tarolo").children().children())
        this.leds.push(this.elem.find(".knob-jobb-led-tarolo").children().children())
    }
    lightLeds() {
        let random = Math.floor(Math.random() * configurations.length)
        this.rightPosition = configurations[random].position
        let lights = configurations[random].leds[Math.floor(Math.random() * configurations[random].leds.length)]
        let ac = 0
        let hc = 0
        for (let i = 0; i < lights.length; i++) {
            if (i === 6) {
                hc = 0
            }
            if (i > (lights.length - 1) / 2) {
                ac = 1
            }
            if (lights[i] == 1) {
                $(this.leds[ac][hc]).css("background", "rgb(152,241,56)")
            }
            hc++
        }
    }
    start() {
        this.randomRotate()
        this.startTimer()
        this.lightLeds()
    }
    randomRotate() {
        let angle = (Math.floor(Math.random() * 4) * 90)
        $({ deg: 0 }).animate(
            { deg: angle },
            {
                duration: 2000,
                step: (now) => {
                    this.mainModule.css({
                        transform: "rotate(" + now + "deg)",
                    });
                },
            }
        );
    }
    startTimer() {
        let time = 40
        this.time.html(time)
        this.timer = setInterval(() => {
            time--
            if (time < 10) {
                this.time.html("0" + time)
            }
            else {
                this.time.html(time)
            }
            if (time === 0) {
                clearInterval(this.timer)
                this.check()
            }
        }, 1000)
    }
    check() {
        if (!(this.rightPosition === "up" && this.nyilForgatasSzamlalo === 0 || this.rightPosition === "down" && this.nyilForgatasSzamlalo === 180 || this.rightPosition === "left" && this.nyilForgatasSzamlalo === 270 || this.rightPosition === "right" && this.nyilForgatasSzamlalo === 90)) {
            this.sendFault()
        }
        this.next()
    }
    next() {
        for (let i = 0; i < this.leds.length; i++) {
            for (let k = 0; k < this.leds[i].length; k++) {
                $(this.leds[i][k]).css("background", "rgb(13,63,19)")
            }
        }
        setTimeout(() => {
            clearInterval(this.timer)
            this.start()
        }, 10000)
    }
}