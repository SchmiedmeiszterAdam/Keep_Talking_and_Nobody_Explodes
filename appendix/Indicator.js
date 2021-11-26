class Indicator{
    constructor(elem,text,lit){
        this.elem = elem
        this.text = text
        this.lit = lit
        this.light = this.elem.find(".light")
        if(this.lit === 0){
            this.light.css("background","white")
        }
        else{
            this.light.css("background","black")
        }
        this.elem.find(".text").html(this.text)
    }
    getName(){
        return this. text
    }
    getLit(){
        return this.lit
    }
}