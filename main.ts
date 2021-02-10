function rolling_average () {
    serial.writeValue("roll", roll)
    total = 0
    roll_list.unshift(roll)
    for (let index = 0; index <= roll_list.length - 1; index++) {
        total = total + roll_list[index]
    }
    roll_rollingavg = total / roll_list.length
    if (roll_list.length > 10) {
        trash = roll_list.pop()
    }
    serial.writeValue("return_average", roll_rollingavg)
}
let trash = 0
let roll = 0
let total = 0
let roll_rollingavg = 0
let roll_list: number[] = []
roll_list = []
roll_rollingavg = 0
total = 0
basic.forever(function () {
    roll = input.rotation(Rotation.Roll)
    rolling_average()
})
