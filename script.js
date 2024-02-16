// digital function


function showTime(){
    var today = new Date()
    var h = today.getHours()
    var m = today.getMinutes()
    var s = today.getSeconds()
    var session = "AM"
    if(h >= 12 ){
        h = h - 12;
        session = "PM"
    }
setTimeout(showTime, 1000)

  h = h < 10 ?"0"+h : h;
   m = m < 10 ? "0"+m : m;
  s=  s < 10 ?"0"+s : s;
    var dis = `${h} : ${m} : ${s}   ${session}`;
    document.getElementById('showtime').innerText = dis
}

//  analogFunction

setInterval(() => {
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();
    const hrotate = 30 * hour + minute / 2;
    const mrotate = 6 * minute;
    const srotate = 6 * second;

    console.log(hrotate, mrotate, srotate);

    const hourElement = document.getElementById('hour');
    const minuteElement = document.getElementById('minute');
    const secondElement = document.getElementById('second');

    hourElement.style.transform = `rotate(${hrotate}deg)`;
    minuteElement.style.transform = `rotate(${mrotate}deg)`;
    secondElement.style.transform = `rotate(${srotate}deg)`;
}, 1000);