import React, { useState, useEffect } from 'react'

const CountDownTimer = (props: any) => {

    const { minutes = 0, seconds = 60 } = props.hoursMinSecs;
    const [[mins, secs], setTime] = useState([minutes, seconds]);


    const tick = () => {

        if (mins === 0 && secs === 0)
            reset();
        else if (secs === 0) {
            setTime([mins - 1, 59]);
        } else {
            setTime([mins, secs - 1]);
        }
    };

    const reset = () => { props.setTimeOut(true) };


    useEffect(() => {
        const timerId = setInterval(() => tick(), 1000);
        return () => {
            clearInterval(timerId);
        }
    });


    return (
        <div className="countdown-timer">
            <p>
                {`${"Seats selected will expire in "}${mins
                    .toString()
                    .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`}
            </p>
        </div>
    );
}

export default CountDownTimer;