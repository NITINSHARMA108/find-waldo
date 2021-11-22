import React from 'react';

const Timer = function () {
  let time = {
    hour: 0,
    minute: 0,
    second: 0,
  };

  setInterval(() => {
    let sec = time.second;
    let min;
    let h;
    if (sec === 59) {
      sec = 0;
      min = time.minute + 1;
      if (min === 59) {
        min = 0;
        h = time.hour + 1;
        time = { hour: h, minute: min, second: sec };
      } else {
        time = { ...time, minute: min, second: sec };
      }
    } else {
      time = { ...time, second: sec + 1 };
    }

    document.querySelector('.time').innerHTML = `${time.hour}:${time.minute<10?`0${time.minute}`:time.minute}:${time.second<10?`0${time.second}`:time.second}`;
  }, 1000);
  return (
    <div className="time" />
  );
};

export default Timer;
