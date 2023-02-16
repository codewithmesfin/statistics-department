import React from "react";

export default function MajorCompulsoryCourses() {
  const columns = [
    "Course Code",
    "Course Title",
    "Credit Hour",
    "ECTS",
    "Prerequisite Course Code",
  ];

  const rows = [
    {
      items: ["Stat 2011", "Basic Statistics", "", 5, ""],
    },
    {
      items: ["Stat 2012", , "Introduction to Probability Theory", "", 5, ""],
    },
    {
      items: ["Stat 2013", "Statistical methods", 4, 7, "Stat 2011"],
    },
    {
      items: ["Stat 3021", "Statistical computing I", 3, 5, "Stat 2013"],
    },
    {
      items: ["Stat 3022", "Statistical Computing II", 3, 5, "Stat 3021"],
    },
    {
      items: ["Stat 3031", "Sampling Theory", 4, 7, "Stat 2012, Stat 2013"],
    },
    {
      items: [
        "Stat 3032",
        "Research methods and Sample survey practice",
        3,
        5,
        "Stat 3031",
      ],
    },
    {
      items: ["Stat 3041", "Regression Analysis", 3, 5, "Stat 2013"],
    },
    {
      items: ["Stat 3042", "Time Series Analysis", 3, 5, "Stat 2013"],
    },
    {
      items: [
        "Stat 3043",
        "Design and Analysis of Experiments",
        4,
        7,
        "Stat 2013",
      ],
    },
    {
      items: [
        "Stat 4051",
        "Statistical Theory of Distributions",
        3,
        5,
        "Stat 2012",
      ],
    },
    {
      items: ["Stat 4052", "Statistical Inference", 3, 5, "Stat 4051"],
    },
    {
      items: [
        "Stat 3062",
        "Categorical Data Analysis",
        3,
        5,
        "Stat 2013, Stat 3041",
      ],
    },
    {
      items: ["Stat 4061", "Econometrics", 3, 5, "Stat 3041"],
    },
    {
      items: [
        "Stat 4062",
        "Introduction to Multivariate Methods",
        3,
        5,
        "Stat 2012, Math2051, Math 2041",
      ],
    },
    {
      items: ["Stat 4071", "Demography", 3, 5, "Stat 2012"],
    },
    {
      items: ["Stat 3072", "Social and Economic Statistics", 3, 5, ""],
    },
    {
      items: ["Stat 4081", "Statistical Quality Control", 3, 5, ""],
    },
    {
      items: ["Stat 4091", "Project I: Proposal Writing", 1, 2, "Stat 3032"],
    },
    {
      items: [
        "Stat 4092",
        "Project II: Research Project in Statistics",
        2,
        3,
        "Stat 3041, Stat 3042, Stat 3043, Stat 4091",
      ],
    },
    {
      items: [
        "Stat 4093",
        "Practical Attachment* (learning from data)",
        "P/F",
        "",
        "Stat 2013, Stat 3041, Stat 3022",
      ],
    },
    {
      items: ["Stat 4161", "Introduction to Data mining", 3, 5, "Stat 3022"],
    },
  ];

  return (
    <div id="2">
      <div>
        <h1 className="text-lg md:text-xl font-bold py-3">
          Major Compulsory Courses
        </h1>
        <div className="flex flex-col max-w-5xl">
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
                            i + 1 < columns.length ? "border-r" : ""
                          } px-4`}
                        >
                          <div className="flex text-xs items-center font-semibold">
                            {x}
                          </div>
                        </th>
                      ))}
                    </tr>
                    {rows.map((y, j) => (
                      <tr key={j} className={`hover:bg-gray-100 border-t`}>
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
                    <tr className="border-t">
                      <td className="py-2 px-4 text-md text-left font-semibold ">
                        Total
                      </td>
                      <td className="border-r"></td>
                      <td className="border-r py-2 px-4">63</td>
                      <td className="border-r py-2 px-4">106</td>
                      <td></td>
                    </tr>
                  </thead>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
