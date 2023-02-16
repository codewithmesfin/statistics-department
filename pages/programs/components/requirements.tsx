import React from "react";

export default function Requirements() {
    const columns=[
        'No.',	'Program'	,'Number of Students']
   const rows= [
    { items: [1,'BSc',46] },
    { items: [2,'M.Sc.',20] },
    { items: [3,'PhD',	6] },
  ]

  return (
    <div id="1">
      <div>
        <h1 className="text-md md:text-lg font-bold py-2">
          Admission Requirements:{" "}
        </h1>
        <h2 className="text-sm md:text-md font-bold py-2">
          1. Bachelor of Science (B.Sc.) in Statistics
        </h2>
        <p className="text-sm text-gray-600">
          An applicant must have successfully completed secondary school with
          good performance in mathematics in the national or equivalent
          placement/entrance examination or the applicant must have graduated
          from a recognized university/college with a diploma in Statistics or
          related fields.
        </p>
        <h2 className="text-sm md:text-md font-bold py-2">
          2. Master of Science (M.Sc.) in Statistics
        </h2>
        <p className="text-sm text-gray-600">
          To be admitted to the M.Sc. program in a specific stream
        </p>
        <div className="pl-6">
          <ul>
            <li className="list-disc text-sm">
              the applicant must have a bachelor’s degree in statistics or any
              other field related to the stream from a recognized university
            </li>
            <li className="list-disc text-sm">
              the performance of the applicant in the M.Sc. entrance examination
              must be satisfactory as assessed and decided by the DGC
            </li>
            <li className="list-disc text-sm">
              the applicant must also meet the general admission requirements of
              the Addis Ababa University.
            </li>
            <li className="list-disc text-sm">
              the applicant should secure a pass mark in the University-level
              Graduate Admission Test.
            </li>
          </ul>
        </div>
        <p className="text-sm text-gray-600 py-2">
          Applicants from disciplines other than Statistics who want to pursue
          the MSc in Statistics must present evidence that shows they took the
          courses mentioned below OR spend one year taking the following
          remedial courses with undergraduate students and score pass grades{" "}
          {"(>=”C”)"} in all courses before taking graduate level statistics
          courses.
        </p>
        <div className="py-3">
          <ol className="list-decimal pl-6 text-sm">
            <li>Introduction to Probability theory</li>
            <li>Statistical Methods</li>
            <li>Calculus I</li>
            <li>Linear Algebra I</li>
            <li>Sampling Theory</li>
            <li>Regression Analysis</li>
            <li>Statistical Computing I</li>
            <li>Statistical Theory of Distributions</li>
            <li>Statistical Inference</li>
          </ol>
        </div>
        <p className="text-sm text-gray-600">
          Other stream specific courses may also be recommended by the
          department graduate committee. All applicants from related fields that
          have scored pass grades {"(>=”C”)"} in all remedial courses are
          exempted from department level entrance examination.
        </p>
        <div className="py-3">
          <h2 className="text-sm md:text-md font-bold py-2">
            3. Doctor of Philosophy (Ph.D.) in Statistics
          </h2>
          <p className="text-sm text-gray-600">
            In addition to meeting standard requirements set by the graduate
            studies programs of Addis Ababa University, candidates
          </p>
          <ol className="py-3 list-disc pl-6 text-sm">
            <li>
              with a Master’s Degree in Statistics from any recognized
              institution, and
            </li>
            <li>
              who will pass a qualifying examination may be admitted to the Ph.
              D. program in Statistics.
            </li>
          </ol>
        </div>
        <div>
        <h1 className="text-sm md:text-lg font-bold py-3">Current number of students</h1>
        </div>
        <div className="overflow-x-auto shadow-xs border border-gray-200 sm:rounded-lg">
                <div className="inline-block min-w-full align-middle">
                  <div className="overflow-hidden ">
                    <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
                      <thead className="">
                        <tr>
                          {columns.map((x, i) => (
                              <th
                                key={i}
                                scope="col"
                                className={`py-2 ${
                                  i + 1 < columns.length
                                    ? "border-r"
                                    : ""
                                } px-4`}
                              >
                                <div className="flex text-xs items-center font-semibold">
                                  {x}
                                </div>
                              </th>
                            ))}
                        </tr>
                        {rows.map((y, j) => (
                            <tr
                              key={j}
                              className={`hover:bg-gray-100 border-t`}
                            >
                              {y.items.map((x, i) => (
                                <td
                                  key={i}
                                  className={`py-2 px-4 ${
                                    i + 1 < y.items.length ? "border-r" : ""
                                  } text-xs text-left`}
                                >
                                  {x}
                                </td>
                              ))}
                            </tr>
                          ))}
                        
                      </thead>
                    </table>
                  </div>
                </div>
              </div>
      </div>
    </div>
  );
}
