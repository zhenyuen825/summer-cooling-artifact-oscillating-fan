let a = 135
let b = 0
basic.showIcon(IconNames.Heart)
SuperBit.Servo2(SuperBit.enServo.S1, a)
basic.pause(1000)
basic.forever(function () {
    SuperBit.MotorRun(SuperBit.enMotors.M1, 255)
    basic.showLeds(`
        . . # # .
        # . # . .
        # # # # #
        . . # . #
        . # # . .
        `)
    basic.pause(100)
    basic.showLeds(`
        # # . . #
        . # . # #
        . . # . .
        # # . # .
        # . . # #
        `)
    basic.pause(100)
})
basic.forever(function () {
    if (b == 0) {
        SuperBit.Servo2(SuperBit.enServo.S1, a)
        a = a + 1
        if (a > 270) {
            b = 1
        }
    }
    if (b == 1) {
        SuperBit.Servo2(SuperBit.enServo.S1, a)
        a = a - 1
        if (a < 0) {
            b = 0
        }
    }
})
