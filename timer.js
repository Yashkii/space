'use strict'

const sale_container = document.getElementById('sale-container')

const hours_span = document.getElementById('hours')
const minutes_span = document.getElementById('minutes')
const seconds_span = document.getElementById('seconds')


const STORE_KEY_TIME = 'Sale Time'

let time = Math.ceil(0.002*60*60)// 5400
let stored_time = localStorage.getItem(STORE_KEY_TIME)
if (stored_time) {
    time = stored_time
    if (time < 0) sale_container.style.display = 'none'
}
set_time()

const interval = (time >= 0) ? setInterval(update_time,1000) : null

function update_time() {
    time = time-1
    if (time >= 0) set_time()
    else  {
        clearInterval(interval)
        sale_container.style.display = 'none'
    }
    localStorage.setItem(STORE_KEY_TIME, time)
}

function set_time() {
    let hours = Math.floor(time/3600) // 1
    let restSeconds = time - (hours * 3600) // 1800
    let minutes = Math.floor(restSeconds/60) // 30
    let seconds = restSeconds - (minutes * 60) // 0

    hours_span.innerText = hours
    if (minutes > 9) {
        minutes_span.innerText = minutes
    } else {
        minutes_span.innerText = '0' + minutes
    }
    
    seconds_span.innerText = seconds
    
    if (seconds > 9) {
        seconds_span.innerText = seconds
    } else {
        seconds_span.innerText = '0' + seconds
    }
}
