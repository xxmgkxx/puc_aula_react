// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useState, useEffect } from 'react'


export default function Clock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  return (
    <div>
      {time}
    </div>
  );
}