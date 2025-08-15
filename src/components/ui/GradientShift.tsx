import { useEffect, useRef } from "react";

export default function GradientShift() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;

      if (sectionRef.current) {
        sectionRef.current.style.background = `radial-gradient(circle at ${x * 100}% ${y * 100}%, #6a11cb, #2575fc)`;
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={sectionRef}
      className="w-full h-screen flex items-center justify-center text-white transition-all duration-300"
    >
      <h1 className="text-4xl font-bold">Apresentação</h1>
    </div>
  );
}
