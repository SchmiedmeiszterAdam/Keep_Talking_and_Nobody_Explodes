let timeModulePosition = Math.floor(Math.random() * 6)
let id = 0
class Bomba {
    constructor(elem) {
        this.elem = elem
        this.modules = []
        this.szeriszam = "sf345t2"
        this.strikes = 0
        this.gyerek = $("#eloresz")
        window.serialNumber = this.szeriszam
        this.elem.on("click", () => {
            this.modulesCheck()
        })
    }
    modulesCheck() {
        let szamol = 0
        for (let i = 0; i < this.modules.length; i++) {
            if (this.modules[i].getTeljesitve()) {
                szamol++
            }
        }
        if (szamol === this.modules.length) {
        }
    }
    createModules(moduleTemplate,moduleName) {
        if (id === timeModulePosition) {
            const time = $("#templates #ido-modul").prependTo(this.gyerek)
            new Time(time)
        }
        else {
            if(id > 6){
                this.gyerek = $("#hatresz")
            }
            const newModule = $(moduleTemplate).clone().prependTo(this.gyerek)
            const module = new moduleName(newModule, id,this)
            this.modules.push(module)
            console.log(moduleTemplate,moduleName)
        }
        console.log(id)
        id++
    }
}