import Image from "next/image";
import Link from "next/link";

const Socials = () => {
  return (
    <div className="hidden md:flex gap-4">
      <Link href="https://www.linkedin.com/in/MuhammedFayad" target="_blank">
        <Image src="/linkedin.png" alt="linkedin logo" height={24} width={24} />
      </Link>
      <Link href="https://github.com/Nyctophilus" target="_blank">
        <Image
          src="/github.png"
          alt="github logo"
          height={24}
          width={24}
          className="dark:invert"
        />
      </Link>
      <Link href="https://codepen.io/nyctophilus" target="_blank">
        <Image
          src="/codepen.png"
          alt="copepen logo"
          className="dark:invert"
          height={24}
          width={24}
        />
      </Link>
      <Link href="https://www.instagram.com/muhammed_yuossry/" target="_blank">
        <Image
          src="/instagram.png"
          alt="instagram logo"
          height={24}
          width={24}
        />
      </Link>
    </div>
  );
};
export default Socials;