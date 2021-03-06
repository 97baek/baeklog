import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import React, { useEffect, useState } from 'react';
import { ClockBox, Day, Time } from './styles';

dayjs.locale('ko');

const Clock = () => {
  const MINUTE = 60000;
  const [time, setTime] = useState(dayjs());
  let timeInterval: NodeJS.Timeout;

  const changeTime = () => {
    setTime(dayjs());
  };

  useEffect(() => {
    timeInterval = setInterval(changeTime, MINUTE);

    return () => {
      clearInterval(timeInterval);
    };
  }, [time]);

  return (
    <ClockBox>
      <Time>{dayjs(time).format('a hh:mm')}</Time>
      <Day>{dayjs(time).format('YYYY-MM-DD')}</Day>
    </ClockBox>
  );
};

export default Clock;
