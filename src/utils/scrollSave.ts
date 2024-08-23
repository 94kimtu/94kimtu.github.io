import { useEffect } from "react";

function useScrollPositionSaver() {
    useEffect(() => {
        const savedPosition = localStorage.getItem("scrollPosition");
        if (savedPosition) {
            window.scrollTo(0, parseInt(savedPosition, 10));
        }

        const handleBeforeUnload = () => {
            localStorage.setItem("scrollPosition", window.scrollY.toString());
        };

        window.addEventListener("beforeunload", handleBeforeUnload);

        return () => {
            window.removeEventListener("beforeunload", handleBeforeUnload);
        };
    }, []);
}
export default useScrollPositionSaver;
