import React from "react";


interface Props {
  weather: string;
  children: React.ReactNode;
}

const Weather: React.FC<Props> = ({ weather, children }: Props) => {

  return (
    <div>
      <h2>{children}</h2>
      <div>현재 날씨는 {weather} 입니다</div>
      <div><del>아닐 수 있음</del></div>
    </div>
  )
}

export default Weather;