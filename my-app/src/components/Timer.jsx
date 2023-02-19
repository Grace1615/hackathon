import React from 'react';
import { useState, useEffect } from 'react';

const Timer = () => {
  const [timer, setTimer] = useState('00:00:00');

  const deadline = "19 Feb 2023 10:00:00 GMT";

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((time / 1000 / 60) % 60);
    const seconds = Math.floor((time / 1000) % 60);
    if(time <= 0){

        setTimer(
            ('00') + ':' +
            ('00') + ':'
            + ('00')
        )
    }
    else if(days >= 1){

        setTimer(
            ('23') + ':' +
            ('59') + ':'
            + ('59')
        )
    }
    else {
        setTimer(
            (hours > 9 ? hours : '0' + hours) + ':' +
            (minutes > 9 ? minutes : '0' + minutes) + ':'
            + (seconds > 9 ? seconds : '0' + seconds)
        )
    }
    
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container"  style={{fontSize: '150px'}}>{timer}
    </div>
  );
};

export default Timer;