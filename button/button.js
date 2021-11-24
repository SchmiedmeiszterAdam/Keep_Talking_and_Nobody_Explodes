class Button extends Modul {
    constructor(elem, id, szulo) {
        super(elem, id, szulo)
        this.indicator = this.elem.find(".button-color-indicator")
        this.indicatorColor = "blue"
        this.color = "white"
        this.buttonText = "ABORT"
        this.button = this.elem.find(".button-button")
        this.buttonIsDown = false
        this.text = this.elem.find(".button-text")

        this.timeoutId = 0
        this.button.css("background-color", this.color)
        this.text.html(this.buttonText)
        this.solution
        this.decision()

        this.button.on("mousedown", () => {
            this.timeoutId = setTimeout(()=>{this.pushedDown}, 1000);
        }).on("mouseup", () => {
            this.released()

        })
    }
    decision(){
        if(this.color === "blue" && this.buttonText === "ABORT"){
            this.solution = "hold"
        }
        else if(this.bomba.batteries > 1 && this.buttonText === "DETONATE"){
            this.solution = "relase"
        }
        else if(this.indicatorColor === "white" && this.bomba.car === "lit"){
            this.solution = "hold"
        }
        else if(this.bomba.batteries > 2 && this.bomba.frk === "lit"){
            this.solution = "relase"
        }
        else if(this.color === "blue"){
            this.solution = "hold"
        }
        else if(this.color === "red" && this.buttonText === "HOLD"){
            this.solution = "relase"
        }
        else{
            this.solution = "hold"
        }
    }
    // var timeoutId = 0;
    // var i = true
    // $('#bomba').on('mousedown', function () {
    //     timeoutId = setTimeout(()=>{
    //         i = false
    //         console.log(i)
    //     }, 1000);
    // }).on('mouseup', function () {
    //     console.log(i)
    //     clearTimeout(timeoutId);
    // });
    pushedDown() {
        this.timeoutId = setTimeout(() => {
            this.buttonIsDown = true
            this.indicator.css("background-color", "blue")
        }, 1000)
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
        if(this.decision === "hold" && this.buttonIsDown === true){

        }
        return ok
    }
    timeContains(num) {
        let val = this.szulo.bomba.idoModul.getTime()
        if (val.includes(num)) {
            return true
        }
    }
}