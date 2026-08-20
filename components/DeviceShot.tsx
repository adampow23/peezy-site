import Image from "next/image";

/** Real app screen in a minimal device frame: thin bezel, 54px radius,
 *  subtle shadow, consistent scale. Screenshots are drop-in files under
 *  /public/media — overwrite the file, the site updates. */
export default function DeviceShot({
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div className={`phone ${className}`}>
      <div className="phone-screen">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          sizes="(min-width: 768px) 300px, 72vw"
          className="h-auto w-full"
        />
      </div>
    </div>
  );
}
