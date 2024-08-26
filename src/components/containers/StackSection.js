import Image from "next/image";

export const StackSection = () => {
  return (
    <div className="flex items-center w-full mt-[0.75rem] gap-2 flex-wrap">
      {[
        "/stack/next.png",
        "/stack/react.png",
        "/stack/ts.png",
        "/stack/tailwind.png",
        "/stack/framer.webp",
        "/stack/node.png",
        "/stack/vercel.png",
      ].map((img) => (
        <Image
          key={img}
          alt={
            img.substring(img.lastIndexOf("/") + 1, img.lastIndexOf(".")) +
            " icon"
          }
          loading="lazy"
          width="200"
          height="200"
          decoding="async"
          data-nimg="1"
          className="object-contain mr-4 mb-4 h-10 w-14"
          src={img}
          sizes="(40px, 60px)"
        />
      ))}
    </div>
  );
};
