import { socialIcons } from "@/lib/social-icon-data";
import Image from "next/image";
import Link from "next/link";

export const SocialLinks = () => {
  return (
    <nav>
      <ul className="flex gap-4">
        {socialIcons.map(({ icon: Icon, name, link: address }) => (
          <li
            key={name}
            className="bg-[#FF5A3D] w-7 h-7 flex items-center justify-center rounded-full md:w-10 md:h-10"
            aria-label={name}
          >
            <Link href={address}>
              <Image
                className="md:w-5 md:h-5 w-4 h-4 text-white"
                src={Icon}
                alt={`${name} icon`}
                width={8}
                height={8}
              />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
