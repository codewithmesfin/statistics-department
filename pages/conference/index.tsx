import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

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

  const objectives = [
    "promote Statistics to address development sustainability challenges through presentations of scientific papers and panel discussions;",
    "create opportunities for multi‐stakeholder collaborations among statisticians in the academia and other sectors;",
    "initiate new project ideas together with different development partners;",
    "establish a forum of discussion on the challenges and opportunities of statistical advancement in Ethiopia and Africa to the larger domain;",
    "foster dialogue among researchers, development partners, and policymakers;",
    "promote proper utilization of statistical methods for generating quality data and performing data analysis;",
    "share best practices and experiences with the participation of delegates from universities abroad; reunite former students of the Department and establish partnerships.",
    "realize the role of Statistics in day-to-day decision making processes.",
  ];

  const outputs = [
    "Establish a new platform and strengthen partnership with development partners.",
    "Advocate utilization of proper statistical methods.",
    "Upturn engagement of statisticians in various development agenda",
    "Share best practices and knowledge among the statistics community.",
    "Boost statistical project initiatives. ",
  ];

  const participants = [
    {
      title: "High government officials and keynote speakers",
      participant: 10,
    },
    {
      title: "UN agencies and representatives of International organizations ",
      participant: 5,
    },
    {
      title: "Statistics department heads across the country",
      participant: 20,
    },
    { title: "Scientific paper presenters", participant: 15 },
    { title: "Poster presenters", participant: 10 },
    { title: "Guests from various universities abroad", participant: 10 },
    { title: "Former students of the Department", participant: 150 },
    { title: "Media personnel ", participant: 5 },
    { title: "Students", participant: 5 },
    { title: "AAU cultural center musicians", participant: 20 },
    { title: "Others (Committees, video assistants, …)" },
  ];

  return (
    <div className="pb-16">
      <section className="py-10 bg-[url('/images/bg.webp')] bg-cover">
        <div className="mx-auto max-w-7xl md:p-3">
          <div className="md:flex justify-center items-center md:space-x-10">
            <div
              className="w-full  md:w-1/2 mx-auto p-10"
              data-aos="zoom-in-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <p className="text-2xl leading-10 text-left text-white font-extrabold md:text-6xl">
                The 50th Anniversary of the Department of Statistics, Addis
                Ababa University.
              </p>
            </div>

            <div className="w-full md:w-1/2"   data-aos="flip-left"
                  data-aos-easing="linear"
                  data-aos-duration="1500">
              <Image
                src="/images/man1.png"
                alt="image"
                loading="lazy"
                width={200}
                height={200}
                className="w-full h-full max-w-[400px] max-h-[600px] rounded object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="bg-white">
          <div className="container m-auto px-2  text-gray-600">
            <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
              <div className="w-full md:w-1/2 shadow-xs rounded border border-gray-100">
                <div className="bg-gray-100">
                  <h1 className="text-xl p-2 px-5 font-semibold">
                    Conference Note
                  </h1>
                </div>
                <div>
                  {keys.map((x, i) => (
                    <div
                      key={i}
                      className="flex items-center md:space-x-10 border-b p-2 px-5 border-gray-100"
                    >
                      <p>
                        <span className="font-bold">{x.title}:</span> {x.value}{" "}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-full md:w-1/2 hidden md:block">
                <Image
                  src="/images/student.jpeg"
                  alt="image"
                  loading="lazy"
                  width={200}
                  height={200}
                  className="w-full h-full rounded object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl md:p-3">
          <div className="md:flex md:space-x-10">
            <div className="w-full md:w-1/2 hidden md:block">
              <Image
                src="/images/aau.jpeg"
                alt="image"
                loading="lazy"
                width={200}
                height={200}
                className="w-full h-full rounded object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 md:py-6">
              <div>
                <h1 className="font-extrabold py-2  px-5 text-xl md:text-4xl">
                  1. Background
                </h1>
              </div>
              <div className="px-5 py-2">
                <p className="text-gray-900">
                  In the late 1950’s as the duties and responsibilities of the
                  central government began to expand and especially as the
                  Ethiopian Government started to prepare a series of five year
                  development plans, the need to collect, summarize and analyze
                  empirical data became obvious. The shortage of junior
                  (certificate), medium (diploma) and senior (degree) level
                  professionals in the field of statistics became more acute.
                  This was also true for the rest of the continent. In
                  cognizance of this, the first African Statisticians Conference
                  held in 1959, recommended the establishment of “International
                  Statistical Training Centers” on regional basis. The training
                  center for the East African Region was opened in 1961 in the
                  Faculty of Science of the former Haile Sellassie I University.
                  This center was named “UN International Statistical Training
                  Center”. It used to provide a one-year program leading to a
                  certificate for candidates sponsored by governments of this
                  region.
                </p>
                <Link href="/conference/background" className="text-blue-600">
                  Read more ...
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="md:py-10 md:pt-0">
        <div className="mx-auto max-w-7xl p-3">
          <div className="md:flex md:space-x-10">
            <div className="w-full md:w-1/2 md:py-5">
              <h1 className="font-extrabold py-2 text-xl md:text-4xl">
                2. Theme
              </h1>
              <p>
                Modern robust statistical methods for sound decision making and
                the expanding boundaries of statistics
              </p>
            </div>

            <div className="w-full md:w-1/2 py-5 ">
              <h1 className="font-extrabold py-2 text-xl md:text-4xl">
                3. Purpose
              </h1>
              <p>
                This concept note is prepared to invite
                institutions/organizations to finance the conference, be part of
                the promotion, and participate in the planned event. The
                Department of Statistics highly appreciates the participation of
                partners for the realization of its 50th anniversary.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="md:py-10 md:pt-0">
        <div className="mx-auto max-w-7xl p-3">
          <div className="md:flex md:space-x-10">
            <div className="w-full md:w-1/2">
              <div>
                <h1 className="font-extrabold py-2 text-xl md:text-4xl">
                  4. Objectives
                </h1>
                <p className="text-lg font-semibold">
                  The objectives of the conference are to:
                </p>
                <div className="ml-6">
                  <ul>
                    {objectives.map((x, i) => (
                      <li key={i} className="list-disc text-gray-600">
                        {" "}
                        {x}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="py-3 md:py-10">
                <h1 className="font-extrabold py-2 text-xl md:text-4xl">
                  5. Expected outputs
                </h1>
                <p className="text-lg font-semibold">
                  The 50th Anniversary of the Department of Statistics in Addis
                  Ababa University has the following expected outputs.
                </p>
                <div className="ml-6">
                  <ul>
                    {outputs.map((x, i) => (
                      <li key={i} className="list-disc text-gray-600">
                        {x}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="w-full py-5">
                <h1 className="font-extrabold py-2 text-xl md:text-4xl">
                  6. Conference Participants
                </h1>
                <p>
                  High government officials, UN agencies and international
                  organizations representatives, statistics scholars,
                  researchers, scientific paper presenters, and former students
                  of the Department are expected to participate on the 50th
                  Anniversary. We are expecting a total of 210 participants will
                  take part in Golden Jubilee Conference. The summary list of
                  participants is presented in the table below.
                </p>
              </div>

              <div className="flex flex-col max-w-5xl">
                <div className="overflow-x-auto shadow-xs border border-gray-200 sm:rounded-lg">
                  <div className="inline-block min-w-full align-middle">
                    <div className="overflow-hidden ">
                      <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
                        <thead className="">
                          <tr>
                            <th scope="col" className="py-2 px-4">
                              <div className="flex text-xs items-center font-semibold">
                                No
                              </div>
                            </th>
                            <th
                              scope="col"
                              className="py-2 px-4 font-semibold text-xs text-left"
                            >
                              List of participating organizations
                            </th>
                            <th
                              scope="col"
                              className="py-2 px-4 text-xs text-right font-semibold"
                            >
                              Estimated number of participants
                            </th>
                          </tr>
                        </thead>

                        <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                          {participants.map((x, i) => (
                            <tr
                              key={i}
                              className={`hover:bg-gray-100  ${
                                i % 2 === 0 ? "bg-blue-100" : ""
                              }`}
                            >
                              <td className="py-2 px-4 text-xs text-left">
                                {i + 1}
                              </td>
                              <td className="py-2 px-4 text-xs text-left">
                                {x.title}
                              </td>
                              <td className="py-2 px-4 text-xs text-right">
                                {x.participant}
                              </td>
                            </tr>
                          ))}
                          <tr>
                            <td className="py-2 px-4 text-md text-left font-semibold">
                              Total
                            </td>
                            <td></td>
                            <td className="py-2 px-4 text-md text-right font-semibold">
                              250
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
