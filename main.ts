/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Elliott Roach
 * Created on: Sep 2024
 * This program adds 1 on 'A' buttion
*/

let amontOfCookes: number
amontOfCookes = 0

basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function () {
    amontOfCookes += 1
    basic.showNumber(amontOfCookes)
})

input.onButtonPressed(Button.B, function () {
    amontOfCookes = 0
    basic.showNumber(amontOfCookes)
})
