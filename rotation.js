$(function () {
    let upDownCounter = 1
    let sideCounter = 0
    $("#bomb-rotation-up").on("click", rotateUp)
    $("#bomb-rotation-left").on("click", rotateLeft)
    $("#bomb-rotation-right").on("click", rotateRight)
    $("#bomb-rotation-down").on("click", rotateDown)


    function rotateUp() {
        upDownCounter++
        hideAll()
        if (upDownCounter === 2) {
            allButtonHide()
            $("#bomb-rotation-down").css("display", "grid")
            $("#teteje").css("display", "flex")
        }
        else {
            allButtonShow()
            if (sideCounter === 0) {
                $("#eloresz").css("display", "grid")
            }
            else if (sideCounter === 1) {
                $("#bal-oldal").css("display", "flex")
            }
            else if (sideCounter === 2) {
                $("#hatresz").css("display", "grid")
            }
            else {
                $("#jobb-oldal").css("display", "flex")
            }
        }
        if (upDownCounter > 0) {
            $("#bomb-rotation-down").css("display", "grid")
        }

    }
    function rotateDown() {
        upDownCounter--
        hideAll()
        if (upDownCounter === 0) {
            allButtonHide()
            $("#bomb-rotation-up").css("display", "grid")
            $("#alja").css("display", "flex")
        }
        else {
            allButtonShow()
            if (sideCounter === 0) {
                $("#eloresz").css("display", "grid")
            }
            else if (sideCounter === 1) {
                $("#bal-oldal").css("display", "flex")
            }
            else if (sideCounter === 2) {
                $("#hatresz").css("display", "grid")
            }
            else {
                $("#jobb-oldal").css("display", "flex")
            }
        }
        if (upDownCounter < 2) {
            $("#bomb-rotation-up").css("display", "grid")
        }


    }
    function rotateLeft() {
        sideCounter++
        if (sideCounter > 3) {
            sideCounter = 0
        }
        sideRotate()
    }
    function rotateRight() {
        sideCounter--
        if (sideCounter < 0) {
            sideCounter = 3
        }
        sideRotate()
    }
    function sideRotate() {
        hideAll()
        if (sideCounter === 0) {
            allButtonShow()
            $("#eloresz").css("display", "grid")
        }
        else if (sideCounter === 1) {
            allButtonHide()
            $("#bomb-rotation-left").css("display", "grid")
            $("#bomb-rotation-right").css("display", "grid")
            $("#bal-oldal").css("display", "flex")
        }
        else if (sideCounter === 2) {
            allButtonShow()
            $("#hatresz").css("display", "grid")
        }
        else {
            allButtonHide()
            $("#jobb-oldal").css("display", "flex")
            $("#bomb-rotation-left").css("display", "grid")
            $("#bomb-rotation-right").css("display", "grid")
        }
    }
    function hideAll() {
        $("#jobb-oldal").css("display", "none")
        $("#bal-oldal").css("display", "none")
        $("#eloresz").css("display", "none")
        $("#hatresz").css("display", "none")
        $("#alja").css("display", "none")
        $("#teteje").css("display", "none")
    }
    function allButtonHide() {
        $("#bomb-rotation-up").css("display", "none")
        $("#bomb-rotation-left").css("display", "none")
        $("#bomb-rotation-right").css("display", "none")
        $("#bomb-rotation-down").css("display", "none")
    }
    function allButtonShow() {
        $("#bomb-rotation-up").css("display", "grid")
        $("#bomb-rotation-left").css("display", "grid")
        $("#bomb-rotation-right").css("display", "grid")
        $("#bomb-rotation-down").css("display", "grid")
    }
})