import React, { useEffect, useRef, useState } from 'react';

const DoubleRuledMask = ({ reset, label }) => {
  const canvasRef = useRef(null);
  const userDrawingRef = useRef([]);
  const [reload, setReload] = useState(false);
  let isDrawing = false;
  let previousPosition = { x: 0, y: 0 };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.lineWidth = 3;
    context.lineCap = 'round';
    context.strokeStyle = '#000';

    const startPosition = (event) => {
      isDrawing = true;
      const { offsetX, offsetY } = getMousePosition(canvas, event);
      previousPosition = { x: offsetX, y: offsetY };
    };

    const endPosition = () => {
      isDrawing = false;
      userDrawingRef.current.push(null);
    };

    const draw = (event) => {
      if (!isDrawing) return;

      const { offsetX, offsetY } = getMousePosition(canvas, event);

      context.beginPath();
      context.moveTo(previousPosition.x, previousPosition.y);
      context.lineTo(offsetX, offsetY);
      context.stroke();

      previousPosition = { x: offsetX, y: offsetY };
      userDrawingRef.current.push({ x: offsetX, y: offsetY });
    };

    const getMousePosition = (canvas, event) => {
      const rect = canvas.getBoundingClientRect();
      const scaleX = canvas.width / rect.width;
      const scaleY = canvas.height / rect.height;
      const offsetX = event.clientX - rect.left;
      const offsetY = event.clientY - rect.top;
      return { offsetX: offsetX * scaleX, offsetY: offsetY * scaleY };
    };

    canvas.addEventListener('mousedown', startPosition);
    canvas.addEventListener('mouseup', endPosition);
    canvas.addEventListener('mousemove', draw);

    return () => {
      canvas.removeEventListener('mousedown', startPosition);
      canvas.removeEventListener('mouseup', endPosition);
      canvas.removeEventListener('mousemove', draw);
    };
  }, [reload]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
  
    const lineSpacing = 20;
    const lineWidth = canvas.width;
    const lineHeight = 18; // Set the line height based on the font size
  
    // Clear the canvas before drawing the initial lines and text
    context.clearRect(0, 0, canvas.width, canvas.height);
  
    const lineColors = ['white','white','red', 'blue', 'blue', 'blue', 'red','blue', 'blue', 'blue'];
  
    for (let i = 0; i < 10; i++) {
      const y = i * lineSpacing;
      
      context.beginPath();
      context.moveTo(0, y);
      context.lineTo(lineWidth, y);
      context.strokeStyle = lineColors[i];
      context.stroke();
  
      context.beginPath();
      context.moveTo(0, y + lineHeight);
      // context.lineTo(lineWidth, y + lineHeight);
      context.strokeStyle = lineColors[i];
      context.stroke();
    }
  
    // Draw the text with the desired line style
    const text = label;
    context.font = 'normal 150px Arial';
    context.fillStyle = '#000';
 
  // Draw the text with the desired line style
context.setLineDash([5, 5]); // Set the line style to dotted
context.lineWidth = 2;
context.strokeStyle = '#000';
context.strokeText(text, 0, 130);
context.setLineDash([]);
context.strokeStyle = '#000';
  }, [reload, label]);
  

  const clearCanvas = () => {
    userDrawingRef.current = [];
    setReload((prevReload) => !prevReload);
  };

  useEffect(() => {
    clearCanvas();
  }, [reset]);

  return (
    <div>
      <canvas ref={canvasRef} width={440} height={200} />
    </div>
  );
};

export default DoubleRuledMask;
