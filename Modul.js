class Modul {
    constructor(elem) {
        this.teljesitve = false
        this.elem = elem
        this.aktiv = false
        this.elem.on("mouseenter", () => {
            if (!this.aktiv) {
                this.elem.addClass("hover-class")
            }
        })
        this.elem.on("mouseleave", () => {
            this.elem.removeClass("hover-class")
        })
        this.elem.on("click", () => {
            this.setAktiv()
            console.log(this.aktiv)
        })
    }
    setAktiv() {
        if (this.aktiv) {
            this.aktiv = false
        }
        else {
            this.aktiv = true
            this.elem.removeClass("hover-class")
        }
    }
}