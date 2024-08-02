"use client";
import { Modal, ModalTrigger } from "@/components/ui/animated-modal";
import Link from "next/link";
import { HoverEffect } from "@/components/ui/card-hover-effect";

export const projects = [
  {
    title: "Stripe",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
  },
  {
    title: "Netflix",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
  },
  {
    title: "Google",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
  },
  {
    title: "Meta",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://meta.com",
  },
  {
    title: "Amazon",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "https://amazon.com",
  },
  {
    title: "Microsoft",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://microsoft.com",
  },
];

function UpcomingWebinars() {
  return (
    <>
      <div className="bg-gray-900 p-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center">
            <h2 className="text-teal-400 text-base font-semibold tracking-wide uppercase">
              FEATURED WEBINARS
            </h2>
            <p className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
              Enhance your musical journey
            </p>
          </div>
          <div className="mt-10 mx-auto">
          <HoverEffect items={projects} />
          </div>
          <div className="mt-10 flex items-center justify-center">
            <Link href={"/webinars"}>
              <Modal>
                <ModalTrigger className="bg-black dark:bg-transparent border-2 border-gray-500 dark:text-white text-white flex justify-center group/modal-btn">
                  <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
                    View All Webinars
                  </span>
                  <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500  text-white z-20">
                    💻📅
                  </div>
                </ModalTrigger>
              </Modal>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default UpcomingWebinars;
