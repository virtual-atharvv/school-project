import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Elpis Global School" },
      { name: "description", content: "Moments from classrooms, laboratories, the library, athletics and our annual celebrations at Elpis Global School, Biswan." },
      { property: "og:title", content: "Gallery — Elpis Global School" },
      { property: "og:image", content: "/images/elpis/award.jpg" },
    ],
  }),
  component: Gallery,
});

const photos = [
  "/images/elpis/flash1.jpg",
  "/images/elpis/flash2.jpg",
  "/images/elpis/award.jpg",
  "/images/elpis/athletics.jpg",
  "/images/elpis/event1.jpg",
  "/images/elpis/event2.jpg",
  "/images/elpis/lab1.jpg",
  "/images/elpis/lab2.jpg",
  "/images/elpis/lab3.jpg",
  "/images/elpis/library.jpg",
  "/images/elpis/computer-lab.jpg",
  "/images/elpis/paper.jpg",
  "/images/elpis/building.jpg",
];

function Gallery() {
  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title={<>Moments from a <span className="italic text-gradient-gold">life of learning.</span></>}
        intro="From quiet study in the library to the roar of sports day — glimpses of an Elpis year."
        image="/images/elpis/flash2.jpg"
      />

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-3 lg:px-6">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-3 [&>*]:mb-3">
            {photos.map((src, i) => (
              <Reveal key={src} delay={(i % 6) * 0.04}>
                <div className="relative overflow-hidden rounded-xl break-inside-avoid">
                  <img src={src} alt="" className="w-full transition-transform duration-[1500ms] hover:scale-110" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
