import Icon from "@/components/Icon";
import Link from "next/link";
import React from "react";

export default function Conference() {
  return (
    <div className="pb-16">
      <section>
        <div className="pt-4 px-3 md:p-0 bg-white">
          <div className="container m-auto px-2  text-gray-600">
            <div className="w-full">
              <Link
                href="/conference"
                className="text-blue-600 flex items-center py-5"
              >
                <Icon path="back" />
                <span className="pl-5">Conference Note</span>
              </Link>
              <h2 className="text-2xl py-5 text-gray-900 font-extrabold md:text-6xl">
                Background
              </h2>
              <div className="md:flex md:space-x-10">
                <div>
                  <p className="text-gray-900">
                    In the late 1950’s as the duties and responsibilities of the
                    central government began to expand and especially as the
                    Ethiopian Government started to prepare a series of five
                    year development plans, the need to collect, summarize and
                    analyze empirical data became obvious. The shortage of
                    junior (certificate), medium (diploma) and senior (degree)
                    level professionals in the field of statistics became more
                    acute. This was also true for the rest of the continent. In
                    cognizance of this, the first African Statisticians
                    Conference held in 1959, recommended the establishment of
                    “International Statistical Training Centers” on regional
                    basis. The training center for the East African Region was
                    opened in 1961 in the Faculty of Science of the former Haile
                    Sellassie I University. This center was named “UN
                    International Statistical Training Center”. It used to
                    provide a one-year program leading to a certificate for
                    candidates sponsored by governments of this region. It
                    operated from 1961 to 1966 with fund and technical
                    assistance provided by the UN. During this period, the
                    enrollment from Ethiopia, Egypt, Libya, Sudan, Malawi,
                    Zambia, Basutoland, and Somalia were 52, 24, 6, 34, 10, 4,
                    3, and 4, respectively.
                  </p>
                  <p className="text-gray-900">
                    Furthermore, the UN assisted to launch two additional
                    programs in 1966, namely a three-year diploma program and a
                    four-year degree program. In 1973, the Statistical Training
                    Center was organized as the Department of Statistics; it has
                    been running a BSc degree program for regular students and
                    the Diploma Program for extension students ever since. In
                    order to address the human resource requirement of Ethiopia
                    in the field of Statistics, the Department launched an MSc
                    program in 1982 and a PhD program in 2012.
                  </p>
                </div>
                <div>
                  <p className="text-gray-900">
                    The graduates of the Department serve Ethiopia, the African
                    continent as well as the world, at large, in various
                    capacities including planning, research, consultancy, and
                    teaching Statistics.
                  </p>
                  <p className="text-gray-900">
                    Currently, the Department of Statistics, in collaboration
                    with universities in Europe, is preparing a project proposal
                    on a national statistical capacity strengthening for
                    statistics teachers in the first-generation universities of
                    the country. The Department has also placed initiation of
                    new development projects with key stakeholders such as
                    Ethiopian Statistics Service, UNECA, and Ministry of Health.
                    This year, the Department has planned to celebrate its
                    golden jubilee where former graduates, international
                    statistics scholars, representatives from the UN and other
                    development partners, and practitioners will meet to create
                    networks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
