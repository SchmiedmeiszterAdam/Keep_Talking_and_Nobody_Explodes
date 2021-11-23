let timeModulePosition = Math.floor(Math.random() * 6)
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
        }
        const newModule = $(moduleTemplate).clone().prependTo(this.gyerek)
        const module = new moduleName(newModule, this.moduleSzam, this)
        this.modules.push(module)     
        this.moduleSzam++
    }
    countModules(){
        return this.moduleSzam
    }
}