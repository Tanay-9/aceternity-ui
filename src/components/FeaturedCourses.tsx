'use client'
import React from "react";
import courseData from "@/data/music_courses.json";
import {
  Modal,
  ModalTrigger,
} from "@/components/ui/animated-modal";
import Link from "next/link";
import { BackgroundGradient } from "@/components/ui/background-gradient";


interface Course {
    id : number,
    title : string,
    slug : string,
    description : string,
    price : number, 
    instructor : string,
    isFeatured : boolean
}

function FeaturedCourses() {
   const featuredCourses =  courseData.courses.filter((course:Course) => course.isFeatured)

  return (
    <div className="py-12 bg-gray-900">
      <div>
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide">
            FEATURED COURSES
          </h2>
          <p>Learn from the best</p>
        </div>
      </div>
      <div className="mt-10 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {featuredCourses.map((c : Course)=> (
                <div key={c.id} className="flex justify-center ">
                    <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                    <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                                <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{c.title}</p>
                                <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">{c.description}</p>
                                <Link href={`/courses/${c.slug}`}>
                                Learn More
                                </Link>
                            </div>
                    </BackgroundGradient>
                    </div>
            ))}
        </div>
      </div>
      <div className="mt-20 flex items-center justify-center">
        <Link href={"/courses"}>
          <Modal>
            <ModalTrigger className="bg-black dark:bg-transparent border-2 border-gray-500 dark:text-white text-white flex justify-center group/modal-btn">
              <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
                View All Courses
              </span>
              <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
              🎺🎷
              </div>
            </ModalTrigger>
          </Modal>
        </Link>
      </div>
    </div>
  );
}

export default FeaturedCourses;
