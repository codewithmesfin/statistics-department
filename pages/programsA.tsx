import Link from "next/link";
import React, { useState } from "react";

export default function Programs() {
  const titles = [
    "Department of Statistics Program Objectives:",
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
    <div>
      <section>
        <div className="px-3 md:p-0 bg-white">
          <div className="container m-auto px-2 text-gray-600">
            <div className="w-full">
              <div className="md:flex md:space-x-10">
                <section className="w-full">
                  <div>
                    <div id="0" className="pt-10 md:pt-32">
                      <h2 className="text-2xl py-5 text-gray-900 font-extrabold md:text-6xl">
                        Programs of Statistics
                      </h2>
                      <h1 className="text-lg md:text-xl font-bold py-3">
                        Department of Statistics Program Objectives:
                      </h1>
                      <ul className="pl-5">
                        <li className="list-disc text-gray-600 py-1">
                          To train statisticians at the B.Sc, M.Sc and PhD
                          levels who will be able to take-up positions in the
                          public and private sectors and provide professional
                          support for orderly development of thecountry.{" "}
                        </li>
                        <li className="list-disc text-gray-600 py-1">
                          To carry out research in theoretical and applied
                          statistics
                        </li>
                        <li className="list-disc text-gray-600 py-1">
                          To provide consultancy services and run short term
                          courses in statistics and related fields.
                        </li>
                        <li className="list-disc text-gray-600 py-1">
                          To participate and play an active role in the
                          activities of professional statistical and related
                          societies.
                        </li>
                      </ul>
                    </div>
                    <div id="1" className="pt-10 md:pt-32">
                     
                      <h1 className="text-lg md:text-xl font-bold py-3">
                        Department of Statistics Program Objectives:
                      </h1>
                      <ul className="pl-5">
                        <li className="list-disc text-gray-600 py-1">
                          To train statisticians at the B.Sc, M.Sc and PhD
                          levels who will be able to take-up positions in the
                          public and private sectors and provide professional
                          support for orderly development of thecountry.{" "}
                        </li>
                        <li className="list-disc text-gray-600 py-1">
                          To carry out research in theoretical and applied
                          statistics
                        </li>
                        <li className="list-disc text-gray-600 py-1">
                          To provide consultancy services and run short term
                          courses in statistics and related fields.
                        </li>
                        <li className="list-disc text-gray-600 py-1">
                          To participate and play an active role in the
                          activities of professional statistical and related
                          societies.
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>
                <section className="hidden md:block w-full max-w-[350px] md:pt-32">
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
                          className={`hover:text-green-500 font-semibold text-sm ${
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
