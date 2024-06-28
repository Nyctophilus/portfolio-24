import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import Switch from "./switch";
import FramerMagnetic from "./framerMagnetic";

const Socials = ({ toggleBtn }) => {
  return (
    <div className="hidden md:flex items-center gap-4">
      <FramerMagnetic>
        <Link href="https://www.linkedin.com/in/MuhammedFayad" target="_blank">
          <Image
            src="/linkedin.png"
            alt="linkedin logo"
            height={24}
            width={24}
          />
        </Link>
      </FramerMagnetic>
      <FramerMagnetic>
        <Link href="https://github.com/Nyctophilus" target="_blank">
          <Image
            src="/github.png"
            alt="github logo"
            height={24}
            width={24}
            className="dark:invert"
          />
        </Link>
      </FramerMagnetic>
      <FramerMagnetic>
        <Link href="https://codepen.io/nyctophilus" target="_blank">
          <Image
            src="/codepen.png"
            alt="copepen logo"
            className="dark:invert"
            height={24}
            width={24}
          />
        </Link>
      </FramerMagnetic>

      {toggleBtn && (
        <Suspense>
          <Switch />
        </Suspense>
      )}
    </div>
  );
};
export default Socials;
