setInterval(() => {
    d = new Date();
    htime=d.getHours();
    mtime=d.getMinutes();
    stime=d.getSeconds();

    hrotation=30*htime + mtime/2 ;
    mrotation= 6*mtime;
    srotation=6*stime;

    if (hour) {
        hour.style.transform = `rotate(${hrotation}deg)`;
    }
    if (minute) {
        minute.style.transform = `rotate(${mrotation}deg)`;
    }
    if (sec) {
        sec.style.transform = `rotate(${srotation}deg)`;
    }
}, 1000);




