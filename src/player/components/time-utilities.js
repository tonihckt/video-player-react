import React from 'react';


    function leftPad (number){
        const pad = '00';
        return pad.substring (0,pad.length - number.length) + number
    }
    
    function formattedTime (secs){
        const minutes = parseInt(secs / 60, 10);
        const seconds = parseInt(secs % 60, 10);
        return `${minutes} : ${leftPad(seconds.toString())}`
    }
    


//export default {leftPad, formattedTime};
module.exports = {
    formattedTime,
    leftPad,
}


/////////** */
function formatedTimer(currentTime, duration){

  let formatedCurrentTime = formatTime(currentTime);
  let formatedDuration = formatTime(duration);

  return`${formatedCurrentTime} / ${formatedDuration}`;
}

function formatTime(milliseconds){
  let minutes = parseMinutes(milliseconds);
  let seconds = parseSeconds(milliseconds);

  return`${minutes}:${seconds}`; 
}

function parseMinutes(milliseconds)
{
  returnparseInt(milliseconds / 60, 10);
}

function parseSeconds(milliseconds){
  let seconds = parseInt(milliseconds % 60, 10); 
  return putZeroInFrontOfSeconds(seconds);
}

function putZeroInFrontOfSeconds(seconds){
  return seconds >= 10 ? seconds : `0${seconds}`;
}
export default formatedTimer;
