import { useEffect, useRef, useState } from "react";

interface ParallaxImageProps {
  src: string;
  alt: string;
  speed?: number;
  className?: string;
  overlayClassName?: string;
  children?: React.ReactNode;
}

const ParallaxImage = ({
  src,
  alt,
  speed = 0.4,
  className = "",
  overlayClassName = "",
  children,
}: ParallaxImageProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      // Only calculate when element is in view
      if (rect.bottom > 0 && rect.top < windowHeight) {
        const scrollProgress = (windowHeight - rect.top) / (windowHeight + rect.height);
        setOffset((scrollProgress - 0.5) * speed * 200);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 w-full h-[130%] object-cover will-change-transform transition-none"
        style={{ transform: `translateY(${offset}px)`, top: "-15%" }}
      />
      {overlayClassName && <div className={`absolute inset-0 ${overlayClassName}`} />}
      {children && <div className="relative z-10">{children}</div>}
    </div>
  );
};

export default ParallaxImage;
