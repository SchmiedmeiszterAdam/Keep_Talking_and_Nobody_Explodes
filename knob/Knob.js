class Knob extends Modul{
    constructor(elem,szulo){
        super(elem,szulo)
        this.nyil = this.elem.find(".knob-nyil")
        this.nyilForgatasSzamlalo = 0

        this.nyil.on("click",()=>{
            this.nyilForgatasSzamlalo += 90
            if(this.nyilForgatasSzamlalo === 360){
                this.nyilForgatasSzamlalo = 0
            }
            console.log(this.nyilForgatasSzamlalo)
            this.nyil.css("transform","rotate("+this.nyilForgatasSzamlalo+"deg)")
        })
    }
}