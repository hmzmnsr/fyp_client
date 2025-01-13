import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const location = useLocation();

    useEffect(() => {
        const smoothScroll = () => {
            const scrollDuration = 400;
            const startScroll = window.scrollY;
            const targetScroll = 0;
            const distance = targetScroll - startScroll;
            let startTime = null;

            const easeInOutQuad = (time, start, change, duration) => {
                time /= duration / 2;
                if (time < 1) return (change / 2) * time * time + start;
                time--;
                return (-change / 2) * (time * (time - 2) - 1) + start;
            };

            const animateScroll = (timestamp) => {
                if (!startTime) startTime = timestamp;
                const elapsed = timestamp - startTime;
                const nextScroll = easeInOutQuad(elapsed, startScroll, distance, scrollDuration);

                window.scrollTo(0, nextScroll);

                if (elapsed < scrollDuration) {
                    requestAnimationFrame(animateScroll);
                }
            };

            requestAnimationFrame(animateScroll);
        };

        smoothScroll();
    }, [location.pathname]);

    return null;
};

export default ScrollToTop;
