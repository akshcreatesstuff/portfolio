import { useEffect, useRef } from "react";
import portrait from "../assets/Aishcropped.JPG";
import { initImageMatrix } from "../engine/imageMatrix";

function PixelCanvas() {

  const canvasRef = useRef();

  useEffect(() => {

    const cleanup =
      initImageMatrix(
        canvasRef.current,
        portrait
      );

    return cleanup;

  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: "100%",
        height: "100%"
      }}
    />
  );
}

export default PixelCanvas;