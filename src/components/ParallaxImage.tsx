interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  overlayClassName?: string;
  children?: React.ReactNode;
}

const ParallaxImage = ({
  src,
  className = "",
  overlayClassName = "",
  children,
}: ParallaxImageProps) => {
  return (
    <div
      className={`relative bg-fixed bg-cover bg-center ${className}`}
      style={{ backgroundImage: `url(${src})` }}
    >
      {overlayClassName && <div className={`absolute inset-0 ${overlayClassName}`} />}
      {children && <div className="relative z-10">{children}</div>}
    </div>
  );
};

export default ParallaxImage;
