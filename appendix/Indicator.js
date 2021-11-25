class Indicator{
    constructor(elem,text,lit){
        this.elem = elem
        this.text = text
        this.light = this.elem.find(".light")
        console.log(lit)
        if(lit === 0){
            this.light.css("background","white")
            console.log(this.light)
        }
        else{
            this.light.css("background","black")
            console.log(this.light)
        }
        this.elem.find(".text").html(this.text)
    }
}