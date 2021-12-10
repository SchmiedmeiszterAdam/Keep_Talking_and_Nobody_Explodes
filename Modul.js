class Modul {
    constructor(elem, id, bomba) {
        this.teljesitve = false
        this.bomba = bomba
        this.elem = elem
        this.id = id
        this.aktiv = false
        this.led = this.elem.find('.kesz')

        // this.elem.on("mouseenter", () => {
        //     if (!this.aktiv) {
        //         this.elem.addClass("hover-class")
        //     }
        // })
        // this.elem.on("mouseleave", () => {
        //     this.elem.removeClass("hover-class")
        // })
        // this.elem.on("click", () => {
        //     this.setAktiv()
        //     console.log(this.aktiv)
        // })
    }
    setAktiv() {
        if (this.aktiv) {
            this.aktiv = false
            this.elem.removeClass("aktiv")
        }
        else {
            this.aktiv = true
            this.elem.removeClass("hover-class")
            this.elem.addClass("aktiv")
        }
    }
    getAktiv() {
        return this.aktiv
    }
    setTeljesitve() {
        this.bomba.modulesCheck()
        this.teljesitve = true
        this.led.css("background-color", "rgb(25,239,81)")
        this.led.append("<div class = 'kesz-vilagos'></div>")
    }
    getTeljesitve() {
        return this.teljesitve
    }
    sendFault() {
        this.led.css("background", "red")
        setTimeout(() => {
            if (this.teljesitve) {
                this.led.css("background-color", "rgb(25,239,81)")
            }
            else {
                this.led.css("background", "rgb(97, 65, 65)")
            }
        }, 500)
        this.bomba.fault()
    }
}