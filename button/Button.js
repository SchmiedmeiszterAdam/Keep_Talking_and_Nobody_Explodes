const buttonColors = ["white", "blue", "red", "yellow"]
const buttonTexts = ["ABORT", "HOLD", "DETONATE", "PRESS"]
class Button extends Modul {
    constructor(elem, szulo) {
        super(elem, szulo)
        this.indicator = this.elem.find(".button-color-indicator")
        this.button = this.elem.find(".button-button")
        this.text = this.elem.find(".button-text")
        this.indicatorColor = buttonColors[Math.floor(Math.random() * buttonColors.length)]
        this.color = buttonColors[Math.floor(Math.random() * buttonColors.length)]
        this.buttonText = buttonTexts[Math.floor(Math.random() * buttonTexts.length)]
        this.buttonIsDown = false

        this.timeoutId = 0
        this.button.css("background-color", this.color)
        this.text.html(this.buttonText)
        this.solution
        this.decision()

        this.button.on("mousedown", () => {
            this.button.addClass("button-pushed-down")
            this.timeoutId = setTimeout(() => { this.pushedDown() }, 1500);
        }).on("mouseup", () => {
            this.button.removeClass("button-pushed-down")
            this.button.addClass("button-release")
            setTimeout(() => {
                this.button.removeClass("button-release")
            }, 200)
            this.released()
        })
    }
    decision() {
        if (this.color === "blue" && this.buttonText === "ABORT") {
            this.solution = "hold"
        }
        else if (this.bomba.batteries > 1 && this.buttonText === "DETONATE") {
            this.solution = "relase"
        }
        else if (this.indicatorColor === "white" && this.bomba.litIndicator("CAR")) {
            this.solution = "hold"
        }
        else if (this.bomba.batteries > 2 && this.bomba.litIndicator("FRK")) {
            this.solution = "relase"
        }
        else if (this.color === "yellow") {
            this.solution = "hold"
        }
        else if (this.color === "red" && this.buttonText === "HOLD") {
            this.solution = "relase"
        }
        else {
            this.solution = "hold"
        }
    }
    pushedDown() {
        this.buttonIsDown = true
        this.indicator.css("background-color", this.indicatorColor)
    }
    released() {
        this.indicator.css("background-color", "black")
        clearTimeout(this.timeoutId);
        if (this.ellenorzes()) {
            this.setTeljesitve()
        }
        else {
            this.sendFault()
        }
        this.buttonIsDown = false
    }
    ellenorzes() {
        let ok = false
        if (this.solution === "hold" && this.buttonIsDown === true) {
            if (this.indicatorColor === "blue") {
                if (this.timeContains('4')) {
                    ok = true
                }
            }
            else if (this.indicatorColor === "white" || this.indicatorColor === "red") {
                if (this.timeContains('1')) {
                    ok = true
                }
            }
            else if (this.indicatorColor === "yellow") {
                if (this.timeContains('5')) {
                    ok = true
                }
            }
        }
        else if (this.solution === "relase" && this.buttonIsDown === false) {
            ok = true
        }
        return ok
    }
    timeContains(num) {
        let includesNumber = false
        let val = this.bomba.idoModul.getTime()
        let string = val.toString().split('')
        if (string.includes(num)) {
            includesNumber = true
        }
        return includesNumber
    }
}
