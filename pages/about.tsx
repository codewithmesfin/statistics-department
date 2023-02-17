import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function about() {
  const items = [
    {
      title: "Conference",
      subtitle: `The 50th Anniversary of the Department of Statistics, Addis Ababa University, several Scientists are expected to attend the event.`,
      img: "",
      href: "conference",
    },
    {
      title: "Our Programs",
      subtitle: `Programs currently offered by the Department of Statistics. Bachelor of Science, Master of Science, and Doctor of Philosophy.`,
      img: "",
      href: "/programs",
    },
    {
      title: "Department Staffs",
      subtitle: `Dr. Bedilu Alamirie is the Chairman of the Department of Statistics. Other staffcs are Adjunct staff, echnical staff, Support staff.`,
      img: "",
      href: "/staff",
    },
  ];

  return (
    <div>
      <section>
        <div className="py-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
            <div className="space-y-6 md:space-y-0 md:flex md:gap-6 items-center lg:gap-12">
              <div className="md:5/12 lg:w-5/12">
                <Image
                  src="/images/about.png"
                  alt="image"
                  loading="lazy"
                  width={200}
                  height={200}
                  className="w-full h-full"
                />
              </div>
              <div className="md:7/12 lg:w-6/12">
                <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                  Welcome to the Department of Statistics!
                </h2>
                <p className="mt-6 text-gray-600">
                  We are proud to have been providing high-quality statistical
                  education to students for the past 50 years.
                </p>
                <p className="mt-6 text-gray-600">
                  Our department offers comprehensive programs for students at
                  every level of study, from B.Sc to M.Sc and PhD. Whether you
                  are just beginning your statistical journey or are looking to
                  further your knowledge in this field, our experienced faculty
                  and cutting-edge curriculum will provide you with the tools
                  and skills needed to excel in the ever-evolving world of
                  statistics.
                </p>
                <p className="mt-4 text-gray-600">
                  Our approach to teaching emphasizes hands-on learning and
                  practical applications of statistical theory. We believe that
                  a deep understanding of statistical methods is crucial to
                  success in any field, from data analysis in the sciences to
                  business analytics and beyond.
                </p>
                <p className="mt-4 text-gray-600">
                  Our faculty consists of renowned statisticians and
                  researchers, who are committed to mentoring students and
                  providing them with the knowledge and skills needed to become
                  leaders in the field. Through their mentorship, our students
                  are equipped with the tools they need to succeed in their
                  careers and make meaningful contributions to the field of
                  statistics.
                </p>
                <p className="mt-4 text-gray-600">
                  Join us on this exciting statistical journey, and become a
                  part of a community of passionate and driven statisticians.
                  Whether you are interested in pursuing a career in academia,
                  industry, or government, we have a program that will help you
                  achieve your goals. We look forward to welcoming you to the
                  Department of Statistics!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-10">
          <div className="md:flex md:space-x-10 justify-between px-3 md:px-0">
            {items.map((x, i) => (
              <Link href={x.href} key={i} className="p-3 md:p-0">
                <div className="max-w-sm cursor-pointer bg-white h-full rounded-xl overflow-hidden shadow-xs border border-gray-100 hover:border-gray-300 hover:bg-gray-300">
                  <div className="p-10">
                    <div className="font-bold text-xl mb-2">{x.title}</div>
                    <p className="text-gray-700 text-base">
                      {x.subtitle}
                      <span className="pl-2 text-blue-600">Read more</span>
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
