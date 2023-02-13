import Image from "next/image";
import React from "react";

export default function Conference() {
  const keys = [
    {
      title: "Conference theme",
      value:
        "Modern robust statistical methods for sound decision-making and the expanding boundaries of statistics",
    },
    {
      title: "Organized by",
      value: "Department of Statistics, Addis Ababa University",
    },
    {
      title: "Conference date:",
      value: "June 16-17, 2023",
    },
    {
      title: "Conference venue",
      value: "Addis Ababa, Ethiopia",
    },
    {
      title: "Expected Participants of the Conference",
      value: `About 210 participants are expected. High level ministry officials, senior representatives of UN Agencies and other International organizations, Statistics department heads in universities across the country, Statistics scholars from various universities abroad, prominent researchers, and former students of the Department are expected to participate.`,
    },
  ];
  return (
    <div>
      <section>
        <div className="pt-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
            <div className="w-full mx-auto md:max-w-5xl p-10 ">
              <h2 className="text-2xl text-center text-gray-900 font-extrabold md:text-6xl">
                The 50th Anniversary of the Department of Statistics, Addis
                Ababa University
              </h2>
            </div>
            <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
              <div className="w-full md:w-1/2">
                <Image
                  src="/images/about.png"
                  alt="image"
                  loading="lazy"
                  width={200}
                  height={200}
                  className="w-full h-full"
                />
              </div>
              <div className="w-full md:w-1/2">
                <div>
                  {keys.map((x, i) => (
                    <div
                      key={i}
                      className="flex items-center md:space-x-10 border-b p-3 border-gray-100"
                      data-aos="fade-left"
                      data-aos-easing="ease-out-cubic"
                      data-aos-duration="2000"
                    >
                      <p>
                        <span className="font-bold">{x.title}:</span> {x.value}{" "}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 md:pt-0">
        <div className="mx-auto max-w-7xl p-3">
          <div className="border-b border-gray-200">
            <h1 className="font-extrabold py-2 text-xl md:text-4xl">
              1. Background
            </h1>
            <div className="md:flex md:space-x-10">
              <p
                className="py-2 text-gray-900 "
                data-aos="fade-right"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              >
                In the late 1950’s as the duties and responsibilities of the
                central government began to expand and especially as the
                Ethiopian Government started to prepare a series of five year
                development plans, the need to collect, summarize and analyze
                empirical data became obvious. The shortage of junior
                (certificate), medium (diploma) and senior (degree) level
                professionals in the field of statistics became more acute. This
                was also true for the rest of the continent. In cognizance of
                this, the first African Statisticians Conference held in 1959,
                recommended the establishment of “International Statistical
                Training Centers” on regional basis. The training center for the
                East African Region was opened in 1961 in the Faculty of Science
                of the former Haile Sellassie I University. This center was
                named “UN International Statistical Training Center”. It used to
                provide a one-year program leading to a certificate for
                candidates sponsored by governments of this region. It operated
                from 1961 to 1966 with fund and technical assistance provided by
                the UN. During this period, the enrollment from Ethiopia, Egypt,
                Libya, Sudan, Malawi, Zambia, Basutoland, and Somalia were 52,
                24, 6, 34, 10, 4, 3, and 4, respectively.
              </p>
              <p
                className="py-2 text-gray-900 "
                data-aos="fade-up"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              >
                Furthermore, the UN assisted to launch two additional programs
                in 1966, namely a three-year diploma program and a four-year
                degree program. In 1973, the Statistical Training Center was
                organized as Department of Statistics; it has been running a BSc
                degree program for regular students and the Diploma Program for
                extension students ever since. In order to address the human
                resource requirement of Ethiopia in the field of Statistics, the
                Department launched an MSc program in 1982 and a PhD program in
                2012.
              </p>
              <p
                className="py-2 text-gray-900 "
                data-aos="fade-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              >
                The graduates of the Department serve Ethiopia, the African
                continent as well as the world, at large, in various capacities
                including planning, research, consultancy, and teaching
                Statistics. Currently, the Department of Statistics, in
                collaboration with universities in Europe, is preparing a
                project proposal on a national statistical capacity
                strengthening for statistics teachers in the first-generation
                universities of the country. The Department has also placed
                initiation of new development projects with key stakeholders
                such as Ethiopian Statistics Service, UNECA, and Ministry of
                Health. This year, the Department has planned to celebrate its
                golden jubilee where former graduates, international statistics
                scholars, representatives from the UN and other development
                partners, and practitioners will meet to create networks.
              </p>
            </div>
          </div>

          <div className="py-5 border-b border-gray-200">
            <h1 className="font-extrabold py-2 text-xl md:text-4xl">
              2. Theme
            </h1>
            <p>
              Modern robust statistical methods for sound decision making and
              the expanding boundaries of statistics
            </p>
          </div>

          <div className="py-5 border-b border-gray-200">
            <h1 className="font-extrabold py-2 text-xl md:text-4xl">
              3. Purpose
            </h1>
            <p>
              This concept note is prepared to invite institutions/organizations
              to finance the conference, be part of the promotion, and
              participate in the planned event. The Department of Statistics
              highly appreciates the participation of partners for the
              realization of its 50th anniversary.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
