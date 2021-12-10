const words = [
    { "name": "shell", "hz": '3.505' },
    { "name": "halls", "hz": '3.515' },
    { "name": "slick", "hz": '3.522' },
    { "name": "trick", "hz": '3.532' },
    { "name": "boxes", "hz": '3.535' },
    { "name": "leaks", "hz": '3.542' },
    { "name": "strobe", "hz": '3.545' },
    { "name": "bistro", "hz": '3.552' },
    { "name": "flick", "hz": '3.555' },
    { "name": "bombs", "hz": '3.565' },
    { "name": "break", "hz": '3.572' },
    { "name": "brick", "hz": '3.575' },
    { "name": "steak", "hz": '3.582' },
    { "name": "sting", "hz": '3.592' },
    { "name": "vector", "hz": '3.595' },
    { "name": "beats", "hz": '3.600' },
]
const letters = [
    { "name": "A", "code": '01' },
    { "name": "B", "code": '1000' },
    { "name": "C", "code": '1010' },
    { "name": "E", "code": '0' },
    { "name": "F", "code": '0010' },
    { "name": "G", "code": '110' },
    { "name": "H", "code": '0000' },
    { "name": "I", "code": '00' },
    { "name": "K", "code": '101' },
    { "name": "L", "code": '0100' },
    { "name": "M", "code": '11' },
    { "name": "N", "code": '10' },
    { "name": "O", "code": '111' },
    { "name": "R", "code": '010' },
    { "name": "S", "code": '000' },
    { "name": "T", "code": '1' },
    { "name": "V", "code": '1001' },
    { "name": "X", "code": '1001' }
]
class Morse extends Modul {
    constructor(elem, id, szulo) {
        super(elem, id, szulo)
        this.lampa = this.elem.find(".morse-lampa")
        this.skalaJelzo = this.elem.find(".morse-mhz-skala-jelzo")
        this.gomb = this.elem.find(".morse-ok")
        this.kijelzo = this.elem.find(".morse-mhz-szoveg")
        this.bal = this.elem.find(".morse-mhz-bal")
        this.jobb = this.elem.find(".morse-mhz-jobb")
        this.hzLeptetes = 0
        this.codes
        this.szamlalo = 0
        this.szoAdas()
        console.log(this.frekvrencia)
        this.villogtat()
        this.bal.on("click", () => {
            if (this.hzLeptetes > 0) {
                this.hzLeptetes--
                this.hzLeptet()
            }
        })
        this.jobb.on("click", () => {
            if (this.hzLeptetes < words.length - 1) {
                this.hzLeptetes++
                this.hzLeptet()
            }
        })
        this.gomb.on("click", () => {
            console.log(this.frekvrencia, words[this.hzLeptetes].hz)
            if(this.frekvrencia == words[this.hzLeptetes].hz){
                this.setTeljesitve()
                clearInterval(this.interval)
            }
            else{
                this.sendFault()
            }
        })
    }
    szoAdas() {
        let a = Math.floor(Math.random() * words.length)
        this.szo = words[a].name
        this.frekvrencia = words[a].hz
    }
    villogtat() {
        this.szamlalo = 0
        this.codes = []
        for (let i = 0; i < this.szo.length; i++) {
            let s = 0
            while (s < letters.length && this.szo[i].toUpperCase() != letters[s].name) {
                s++
            }
            this.codes.push(letters[s].code)
        }
        this.leptet()
    }
    leptet() {
        if (this.szamlalo < this.szo.length) {
            this.szamlalo++
            this.codeIras(this.codes[this.szamlalo - 1])
        }
        else {
            setTimeout(() => {
                this.villogtat()
            }, 5000)
        }
    }
    codeIras(code) {
        let szamlalo = 0
        this.interval
        clearInterval(this.interval)
        this.interval = setInterval(() => {
            this.lampa.css("background-color", "rgb(252,223,72)")
            if (code[szamlalo] === '0') {
                setTimeout(() => {
                    this.lampa.css("background-color", "rgb(121,65,42)")
                }, 250)
            }
            else {
                setTimeout(() => {
                    this.lampa.css("background-color", "rgb(121,65,42)")
                }, 600)
            }
            szamlalo++
            if (szamlalo === code.length) {
                clearInterval(this.interval)
                setTimeout(() => {
                    this.leptet()
                }, 1500)
            }
        }, 900)
    }
    hzLeptet() {
        this.kijelzo.html(words[this.hzLeptetes].hz + " MHz")
        this.skalaJelzo.css("left", this.hzLeptetes *23.1 + "px")
    }
}