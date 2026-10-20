import { Noto_Sans_Georgian, Noto_Serif_Georgian } from "next/font/google";

const display = Noto_Serif_Georgian({
  subsets: ["georgian"],
  weight: ["400", "600"],
});

const body = Noto_Sans_Georgian({
  subsets: ["georgian"],
  weight: ["400", "500"],
});

const socials = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/Chocotella.handmadechocolate",
    icon: (
      <path d="M14 8h3V5h-3c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h2.6L16 11h-3V9c0-.6.4-1 1-1z" />
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/",
    icon: (
      <>
        <rect x="4" y="4" width="16" height="16" rx="5" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="12" cy="12" r="3.4" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="16.8" cy="7.2" r="0.9" />
      </>
    ),
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/",
    icon: (
      <path d="M14.5 4c.4 2.2 1.8 3.8 4 4.2v2.4c-1.4 0-2.7-.4-4-1.1V15c0 2.9-2.4 5.2-5.4 5.2S3.7 17.9 3.7 15s2.4-5.2 5.4-5.2c.3 0 .6 0 .9.1v2.6c-.3-.1-.6-.2-.9-.2-1.5 0-2.7 1.2-2.7 2.7s1.2 2.7 2.7 2.7 2.7-1.2 2.7-2.7V4h2.7z" />
    ),
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/995599088996",
    icon: (
      <path d="M12 4.4c-4 0-7.2 3.2-7.2 7.2 0 1.3.3 2.5 1 3.6L5 19.6l4.5-1.2c1 .5 2.2.8 3.4.8 4 0 7.2-3.2 7.2-7.2S16 4.4 12 4.4zm4.1 10.2c-.2.5-1 .9-1.4 1-.4 0-.8.2-2.6-.6-2.2-1-3.6-3.3-3.7-3.4-.1-.2-1-1.3-1-2.5s.6-1.8.9-2c.2-.2.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 1.9c.1.2 0 .4-.1.6l-.4.5c-.1.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.2 1.3 2.5 1.4.3.1.5.1.7-.1l1-.1.6c.2-.1.4-.1.5.3.1.5.1 1.1-.1 1.6z" />
    ),
  },
];

export default function Footer() {
  return (
    <footer className={`${body.className} text-[#e8ddd4]`}>
      <div className="bg-[#3a2418]">
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-12 px-8 py-16 md:grid-cols-2 md:gap-0">
          <div className="md:border-r md:border-white/15 md:pr-12">
            <h2 className={`${display.className} text-lg text-white`}>
              მისამართი
            </h2>
            <div className="mt-6 space-y-1 text-sm leading-7 text-[#d8cdc4]">
              <p>საქართველო თბილისი, ვასილ ბარნოვის</p>
              <p>73</p>
              <p>+995 599 08 89 96</p>
              <a href="mailto:info@chocotella.ge" className="hover:text-white">
                info@chocotella.ge
              </a>
              <p>© 2023 შოკოტელა</p>
              <p>ყველა უფლება დაცულია</p>
            </div>
          </div>

          <div className="md:pl-12">
            <h2 className={`${display.className} text-lg text-white`}>
              ჩვენ შესახებ
            </h2>
            <p className="mt-6 max-w-sm text-sm leading-7 text-[#d8cdc4]">
              შოკოტელა არის ბრენდი ავტორული პრემიუმ ხარისხის შოკოლადის,
              რომელიც დამზადებულია უმაღლესი ხარისხის ინგრედიენტებით.
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center bg-[#9b6848] py-6">
        <div className="flex items-center gap-4">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.name}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#c9a227] bg-black text-[#c9a227] transition hover:bg-neutral-900"
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                {social.icon}
              </svg>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
