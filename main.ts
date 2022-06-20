serial.onDataReceived(serial.delimiters(Delimiters.Hash), function () {
    name_device = serial.readUntil(serial.delimiters(Delimiters.Colon))
    cmd = serial.readUntil(serial.delimiters(Delimiters.Hash))
    if (cmd == "0") {
        radio.sendValue(name_device, 0)
    } else if (cmd == "1") {
        radio.sendValue(name_device, 1)
    } else if (cmd == "2") {
        radio.sendValue(name_device, 2)
    } else if (cmd == "3") {
        radio.sendValue(name_device, 3)
    }
})
radio.onReceivedValue(function (name, value) {
    if (input.runningTime() - time >= 500) {
        serial.writeString("!" + name + ":" + value + "#")
        time = input.runningTime()
    }
    basic.showNumber(value)
})
let cmd = ""
let name_device = ""
let time = 0
let id = 0
time = input.runningTime()
radio.setGroup(68)
