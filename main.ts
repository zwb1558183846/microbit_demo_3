basic.forever(function () {
    // 通过rgb的色值来控制小车探照灯的验收
    cbit_小车类.RGB_Car_Big(60, 0, 0)
    basic.pause(1000)
    cbit_小车类.RGB_Car_Big(30, 30, 0)
    basic.pause(1000)
    cbit_小车类.RGB_Car_Big(0, 60, 0)
    basic.pause(1000)
    cbit_小车类.RGB_Car_Big(0, 30, 30)
    basic.pause(1000)
    cbit_小车类.RGB_Car_Big(0, 0, 60)
    basic.pause(1000)
    cbit_小车类.RGB_Car_Big(30, 30, 30)
    basic.pause(1000)
    cbit_小车类.RGB_Car_Big(20, 20, 20)
    basic.pause(1000)
})
