import React, { FC } from 'react';

interface Props {
    hours: any;
    minutes: any;
    seconds: any;
    onlySecond: boolean;
    whenOver: () => void;
}
const CountDown: FC<Props> = ({
    whenOver,
    onlySecond = true,
    hours = 0,
    minutes = 0,
    seconds = 0,
}) => {
    const [paused, setPaused] = React.useState(false);
    const [over, setOver] = React.useState(false);
    const [time, setTime] = React.useState({
        hours: parseInt(hours),
        minutes: parseInt(minutes),
        seconds: parseInt(seconds),
    });

    const tick = () => {
        if (paused || over) return;
        const reset = () => {
            setTime({
                hours: parseInt(hours),
                minutes: parseInt(minutes),
                seconds: parseInt(seconds),
            });
            setPaused(false);
            setOver(false);
        };
        if (time.hours == 0 && time.minutes == 0 && time.seconds == 0) whenOver();
        else if (time.minutes == 0 && time.seconds == 0)
            setTime({
                hours: time.hours - 1,
                minutes: 59,
                seconds: 59,
            });
        else if (time.seconds == 0)
            setTime({
                hours: time.hours,
                minutes: time.minutes - 1,
                seconds: 59,
            });
        else
            setTime({
                hours: time.hours,
                minutes: time.minutes,
                seconds: time.seconds - 1,
            });
    };

    React.useEffect(() => {
        const timerID = setInterval(() => tick(), 1000);
        return () => clearInterval(timerID);
    });

    return (
        <div>
            <p>
                {/* {onlySecond == false && ( */}
                {/* <small> */}
                {/* {time.hours.toString().padStart(2, '0')}: */}
                {/* </small> */}
                {/* )} */}
                <small>
                    {time.minutes.toString().padStart(2, '0')}:
                    {time.seconds.toString().padStart(2, '0')}
                </small>
            </p>
            {/* <div>{over ? "Time's up!" : ''}</div> */}
        </div>
    );
};

export default CountDown;
