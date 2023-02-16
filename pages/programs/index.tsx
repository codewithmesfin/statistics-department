import Link from "next/link";
import React, { useState } from "react";
import MajorCompulsoryCourses from "./components/MajorCompulsoryCourses";
import Objectives from "./components/objectives";
import MainPrograms from "./components/programs";
import Requirements from "./components/requirements";

export default function Programs() {
  const titles = [
    "Department of Statistics Program Objectives:",
    'Admission Requirements:',
    "Programs currently offered by the Department of Statistics",
    "Major Compulsory Courses",
    "Major Elective Courses",
    "Supportive Course",
    "Common (General Education Courses)",
    "M.Sc. in Statistics Program",
    "Course Requirement for Actuarial Statistics Stream",
    "Course Requirement for No concentration Statistics Stream",
    "Course Requirement for Biostatistics Stream",
    "PhD Program in Statistics",
  ];

  const [currentLink, setCurrentLink] = useState(0);

  return (
    <div className="h-full pb-32">
      <section>
        <div className="px-3 md:p-0 bg-white">
          <div className="container m-auto px-2 text-gray-600">
            <div className="w-full">
              <div className="md:flex md:space-x-10">
                <section className="w-full">
                <Objectives/>
                <MainPrograms/>
                <MajorCompulsoryCourses/>
                <Requirements/>
                </section>
                <section className="hidden md:block w-full max-w-[350px]">
                  <div className="border border-gray-100 rounded ">
                    <h1 className="font-bold text-xl md:text-3xl p-5">
                      Quick Links
                    </h1>
                    {titles.map((x, i) => (
                      <div
                        key={i}
                        className="py-2 border-b px-10"
                        onClick={() => setCurrentLink(i)}
                      >
                        <Link
                        href={`#${i}`}
                          className={`hover:text-green-500 text-left font-semibold text-sm ${
                            currentLink === i
                              ? "text-green-600"
                              : "text-gray-500"
                          }`}
                        >
                          {x}
                        </Link>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
