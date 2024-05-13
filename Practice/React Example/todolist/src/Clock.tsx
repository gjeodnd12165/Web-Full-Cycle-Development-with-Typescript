import React, { useRef, useState } from "react";
import "./Clock.css";

const Clock: React.FC = () => {
  const [time, setTime] = useState<Date>(new Date());

  let secondInterval = useRef(setInterval(() => {
    setTime(new Date());
  }, 1000));

  return (
    <div className="clock">
      <h2>현재 시간</h2>
      <div>{time.toLocaleTimeString()}</div>
    </div>
  )
}

export default Clock;