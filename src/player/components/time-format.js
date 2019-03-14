import React from 'react';

/*
const TimeFormat = secs => {
    const minutes = ~~(secs/60)
    const hours = ~~(minutes/60)
    
    const secsf = leftPad(~~(secs%60))
    const minutesf = leftPad(~~(minutes%60))
    const hoursf = leftPad(~~(hours%24))
    const days = leftPad(~~(hours/24))
  
    let timeString
    if (days !== '00') {
      timeString = `${days}:${hoursf}:${minutesf}:${secsf}`
    } elseif (hoursf !== '00') {
      timeString = `${hoursf}:${minutesf}:${secsf}`
    } else {
      timeString = `${minutesf}:${secsf}`
    }
  
    return timeString
}
*/


function TimeFormat(time){
    let minutes = parseInt(time / 60, 10);
    let seconds = parseInt(time % 60, 10);
    let segundos = "";
    if(seconds < 10){ segundos += "0"+seconds  } else{ segundos = seconds }
    return`${minutes} : ${segundos}`
}

export default TimeFormat;
