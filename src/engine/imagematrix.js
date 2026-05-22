export function initImageMatrix(canvas, imageSrc) {

    const ctx = canvas.getContext("2d");

    let animationId;

    let mouse = {
        x: 0,
        y: 0
    };

    const handleMouseMove = (e) => {

        const rect =
            canvas.getBoundingClientRect();

        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
    };

    const dpr =
        window.devicePixelRatio || 1;

    const rectWidth =
        canvas.offsetWidth;

    const rectHeight =
        canvas.offsetHeight;

    canvas.width =
        rectWidth * dpr;

    canvas.height =
        rectHeight * dpr;

    canvas.style.width =
        rectWidth + "px";

    canvas.style.height =
        rectHeight + "px";

    ctx.scale(dpr, dpr);

    window.addEventListener(
        "mousemove",
        handleMouseMove
    );

    const img = new Image();

    img.src = imageSrc;

    const pixels = [];

    img.onload = () => {

        const tempCanvas =
            document.createElement("canvas");

        const tctx =
            tempCanvas.getContext("2d");

        tempCanvas.width =
            img.naturalWidth;

        tempCanvas.height =
            img.naturalHeight;

        tctx.drawImage(img, 0, 0);

        const data =
            tctx.getImageData(
                0,
                0,
                img.naturalWidth,
                img.naturalHeight
            ).data;

        const gap = Math.max(
            6,
            Math.floor(img.naturalWidth / 130)
        );

        const scale = Math.min(
            canvas.offsetWidth /
                img.naturalWidth,

            canvas.offsetHeight /
                img.naturalHeight

        ) * 0.8;

        const offsetX =
            (
                canvas.offsetWidth -
                img.naturalWidth * scale
            ) / 2;

        const offsetY =
            (
                canvas.offsetHeight -
                img.naturalHeight * scale
            ) / 2;

        for (
            let y = 0;
            y < img.naturalHeight;
            y += gap
        ) {

            for (
                let x = 0;
                x < img.naturalWidth;
                x += gap
            ) {

                const i =
                    (
                        y *
                        img.naturalWidth +
                        x
                    ) * 4;

                const r = data[i];
                const g = data[i + 1];
                const b = data[i + 2];

                const brightness =
                    (r + g + b) / 3;

                if (brightness < 75) {

                    pixels.push({

                        x:
                            x * scale +
                            offsetX,

                        y:
                            y * scale +
                            offsetY,

                        baseX:
                            x * scale +
                            offsetX,

                        baseY:
                            y * scale +
                            offsetY,

                        size: 2
                    });
                }
            }
        }

        animate();
    };

    function animate() {

        ctx.clearRect(
            0,
            0,
            canvas.offsetWidth,
            canvas.offsetHeight
        );

        pixels.forEach((p) => {

            const dx =
                mouse.x - p.baseX;

            const dy =
                mouse.y - p.baseY;

            const dist =
                Math.sqrt(
                    dx * dx +
                    dy * dy
                );

            const radius = 120;

            const force =
                Math.max(
                    0,
                    radius - dist
                ) / radius;

            const angle =
                Math.atan2(
                    p.baseY - mouse.y,
                    p.baseX - mouse.x
                );

            const offsetX =
                Math.cos(angle) *
                force *
                40;

            const offsetY =
                Math.sin(angle) *
                force *
                40;

            p.x +=
                (
                    p.baseX +
                    offsetX -
                    p.x
                ) * 0.08;

            p.y +=
                (
                    p.baseY +
                    offsetY -
                    p.y
                ) * 0.08;

            const opacity =
                0.6 +
                Math.random() * 0.4;

            ctx.fillStyle =
                `rgba(0, 195, 255, ${opacity})`;

            ctx.fillRect(
                p.x,
                p.y,
                p.size,
                p.size
            );
        });

        animationId =
            requestAnimationFrame(
                animate
            );
    }

    return () => {

        cancelAnimationFrame(
            animationId
        );

        window.removeEventListener(
            "mousemove",
            handleMouseMove
        );
    };
}