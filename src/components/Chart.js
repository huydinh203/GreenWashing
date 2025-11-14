import React, { useEffect, useRef } from "react";

function Chart() {
  const canvasRef = useRef();

  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d");
    const data = [45, 30, 25];
    const colors = ["#3CB371", "#FFD700", "#FF6347"];
    let start = 0;

    data.forEach((value, i) => {
      const slice = (value / 100) * 2 * Math.PI;
      ctx.beginPath();
      ctx.moveTo(150, 75);
      ctx.arc(150, 75, 70, start, start + slice);
      ctx.fillStyle = colors[i];
      ctx.fill();
      start += slice;
    });
  }, []);

  return <canvas ref={canvasRef} width="300" height="150"></canvas>;
}

export default Chart;
