class Modul {
    constructor(elem,id,szulo) {
        this.teljesitve = false
        this.szulo = szulo
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
        this.teljesitve = true
        this.led.css("background-color","green")
    }
    getTeljesitve() {
        return this.teljesitve
    }
}