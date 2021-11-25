class Indicator{
    constructor(elem,text,lit){
        this.elem = elem
        this.text = text
        this.light = this.elem.find(".light")
        if(lit === 0){
            this.light.css("background","white")
        }
        else{
            this.light.css("background","black")
        }
        this.elem.find(".text").html(this.text)
    }
}