let timeModulePosition = Math.floor(Math.random() * 4)
class Bomba {
    constructor(elem) {
        this.elem = elem
        this.modules = []
        this.szeriszam = "sf345t2"
        this.strikes = 0
        this.gyerek = $("#eloresz")
        this.modulokKesz = 0
        this.moduleSzam = 0
        window.serialNumber = this.szeriszam
    }
    modulesCheck() {
        this.modulokKesz++
        if (this.modulokKesz === this.modules.length) {
            this.idoModul.stop()
        }
    }
    createModule(moduleTemplate, moduleName) {
        if (this.moduleSzam > 4) {
            this.gyerek = $("#hatresz")
        }
        if (this.moduleSzam === timeModulePosition || timeModulePosition === 5) {
            const timeModul = $("#templates #ido-modul").prependTo(this.gyerek)
            const time = new Time(timeModul,this)
            this.idoModul = time
            this.strike1 = $(this.idoModul.elem.find("#strike-1"))
            this.strike2 = $(this.idoModul.elem.find("#strike-2"))
        }
        const newModule = $(moduleTemplate).clone().prependTo(this.gyerek)
        const module = new moduleName(newModule, this.moduleSzam, this)
        this.modules.push(module)     
        this.moduleSzam++
    }
    fault(){
        this.strikes++
        this.faultCheck()
    }
    faultCheck(){
        if(this.strikes === 1){
            this.strike1.css("color","red")
        }
        else if(this.strikes === 2){
            this.strike2.css("color","red")
        }
        else if(this.strikes === 3){
            console.log("BUMM")
        }
    }
    getSerialNumber(){
        return this.szeriszam
    }
}