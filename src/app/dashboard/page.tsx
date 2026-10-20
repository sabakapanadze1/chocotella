import Image from "next/image";
import Link from "next/link";
import { Noto_Sans_Georgian, Noto_Serif_Georgian } from "next/font/google";
import ScrollToTop from "@/part/ScrollToTop";
import Footer from "@/part/Footer";

const display = Noto_Serif_Georgian({
  subsets: ["georgian"],
  weight: ["400", "600", "700"],
});

const body = Noto_Sans_Georgian({
  subsets: ["georgian"],
  weight: ["400", "500"],
});

const categories = [
  {
    title: "მიქს ბოქსები",
    description: "სხვადასხვა გემოს და ვიზუალის ბონ ბონების მიქსიები",
    image:
      "https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "სასიყვარულო კოლექცია",
    description: "სიყვარულის თემატიკის ბოქსები",
    image:
      "https://images.unsplash.com/photo-1548907040-4baa42d10919?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "არტ ფილები",
    description: "სხვადასხვა ვიზუალით და შიგთავსით შოკოლადის ფილები",
    image:
      "https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "ბონ ბონები",
    description: "სხვადასხვა გემოს და ვიზუალის ბონბონები",
    image:
      "https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&w=900&q=80",
  },
];

const flavors = [
  {
    title: "მარილიანი კარამელი და არაქისი",
    description:
      "მარილიანი კარამელი, მთლიანი არაქისი და არაქისის ჟანდუია რძიანი შოკოლადის გარსში",
  },
  {
    title: "ყავა და თხილი",
    description:
      "ყავის და შავი შოკოლადის განაში, თხილის პრალინე რძიანი შოკოლადის გარსში",
  },
];

export default function Dashboard() {
  return (
    <main className={`${body.className} min-h-screen bg-white text-[#3a3330]`}>
      <section className="relative overflow-hidden px-6 pb-16 pt-16 md:px-12 md:pt-20">
        <div className="mx-auto max-w-6xl text-center">
          <h1
            className={`${display.className} text-4xl tracking-wide text-[#2b2420] md:text-5xl`}
          >
            შოკოტელა
          </h1>
          <div className="mx-auto mt-3 h-px w-16 bg-[#c6b08a]" />
          <p className="mx-auto mt-6 max-w-xl text-[15px] leading-7 text-[#5b534e]">
            ხელნაკეთი არტ შოკოლადები. ყველაზე ფერადი და გემრიელი
            <br />
            საჩუქარი
          </p>

          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => (
              <Link
                key={category.title}
                href="/dashboard/products"
                className="group block"
              >
                <div className="overflow-hidden rounded-md">
                  <Image
                    src={category.image}
                    alt={category.title}
                    width={640}
                    height={480}
                    className="h-44 w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                  />
                </div>
                <h2
                  className={`${display.className} mt-4 text-lg text-[#2b2420]`}
                >
                  {category.title}
                </h2>
                <p className="mt-2 px-2 text-[13px] leading-6 text-[#6b635e]">
                  {category.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative min-h-[520px] overflow-hidden">
        <div className="absolute inset-0 bg-black/35" />
        <div className="relative mx-auto grid min-h-[520px] max-w-5xl grid-cols-1 items-center gap-12 px-8 py-20 text-center text-white md:grid-cols-2">
          {flavors.map((flavor) => (
            <article key={flavor.title} className="mx-auto max-w-sm">
              <h3 className={`${display.className} text-xl leading-8`}>
                {flavor.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-white/90">
                {flavor.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </main>
  );
}
