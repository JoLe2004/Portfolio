import { useEffect, useRef } from "react";

export default function CustomCursor({lerpFactor = 0.6}) {
    const circlesRef = useRef([])
    const coords = useRef({ x: 0, y: 0 })

    useEffect(() => {
        const circles = circlesRef.current

        circles.forEach((circle) => {
            circle.x = 0;
            circle.y = 0;
        })

        function handleMouseMove(e) {
            coords.current.x = e.clientX
            coords.current.y = e.clientY
        }

        window.addEventListener('mousemove', handleMouseMove)

        let animationID
        function lerpCircles() {
            circles.forEach((circle, i) => {
                if (!circle) return;

                if (i === 0) {
                    circle.x += (coords.current.x - circle.x) * lerpFactor;
                    circle.y += (coords.current.y - circle.y) * lerpFactor;
                } else {
                    const prevCircle = circles[i - 1];
                    circle.x += (prevCircle.x - circle.x) * lerpFactor;
                    circle.y += (prevCircle.y - circle.y) * lerpFactor;
                }

                circle.style.left = circle.x + 'px';
                circle.style.top = circle.y + 'px';
                circle.style.transform = `translate(-50%, -50%) scale(${(circles.length - i) / circles.length})`
            })

            animationID = requestAnimationFrame(lerpCircles)
        }

        lerpCircles()

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
            cancelAnimationFrame(animationID)
        }

    }, [])

    return (
        <>
            {[...Array(15)].map((_, i) => (
                <span key={i} className="circle" ref={(el) => (circlesRef.current[i] = el)} />
            ))}
        </>
    )
}