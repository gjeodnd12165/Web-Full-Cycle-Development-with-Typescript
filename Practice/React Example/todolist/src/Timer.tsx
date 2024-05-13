import React, { useRef, useState } from "react";
import "./Timer.css";
import { ButtonGroup, Button } from "react-bootstrap";

const Timer: React.FC = () => {
  const [seconds, setSeconds] = useState<number>(0);
  let intervaler = useRef<NodeJS.Timer | null>(null);

  const handleTimerStart = () => {
    if (!intervaler.current) {
      intervaler.current = setInterval(() => {
        setSeconds((prev: number) => {
          return prev+1;
        });
      }, 1000);
    }
  }

  const handleTimerStop = () => {
    clearInterval(intervaler.current ?? undefined);
    intervaler.current = null;
  }

  const handleTimerClear = () => {
    clearInterval(intervaler.current ?? undefined);
    intervaler.current = null;
    setSeconds(0);
  }

  return (
    <div className="timer">
      <h2>타이머</h2>
      <div>{seconds} 초</div>
      <ButtonGroup>
        <Button variant="primary" onClick={handleTimerStart}>Start</Button>
        <Button variant="success" onClick={handleTimerStop}>Stop</Button>
        <Button variant="danger" onClick={handleTimerClear}>Clear</Button>
      </ButtonGroup>
    </div>
  )
}

export default Timer;