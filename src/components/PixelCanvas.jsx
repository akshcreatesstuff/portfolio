import { useEffect, useRef } from "react";
const ASSET_BASE = import.meta.env.VITE_ASSET_BASE_URL;
import { initImageMatrix } from "../engine/imagematrix";

function PixelCanvas() {

  const canvasRef = useRef();
  useEffect(() => {

    const cleanup =
      initImageMatrix(
        canvasRef.current,
        ASSET_BASE + "/assets/Aishcropped.JPG"
      );

    return cleanup;

  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: "100%",
        height: "100%",
        display: "block"
      }}
    />
  );
}

export default PixelCanvas;