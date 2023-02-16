import React from "react";

export default function MajorCompulsoryCourses() {
  const columns = [
    "Course Code",
    "Course Title",
    "Credit Hour",
    "ECTS",
    "Prerequisite Course Code",
  ];

  const bscPrograms = [
    {
      title: "Major Compulsory Courses",
      rows: [
        {
          items: ["Stat 2011", "Basic Statistics", "", 5, ""],
        },
        {
          items: [
            "Stat 2012",
            ,
            "Introduction to Probability Theory",
            "",
            5,
            "",
          ],
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
          items: [
            "Stat 4091",
            "Project I: Proposal Writing",
            1,
            2,
            "Stat 3032",
          ],
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
          items: [
            "Stat 4161",
            "Introduction to Data mining",
            3,
            5,
            "Stat 3022",
          ],
        },
      ],
      total: [63, 106],
    },

    {
      title: "Major Elective Courses",
      rows: [
        {
          items: ["Stat 4101", "Biostatistics and Epidemiology", 3, 5, ""],
        },
        { items: ["Stat 4102", "Operations Research", 3, 5, ""] },
        { items: ["Stat 4112", "Actuarial Statistics", 3, 5, ""] },
        { items: ["Stat 4121", "Applied Spatial Statistics", 3, 5, ""] },
        { items: ["Stat 4131", "Statistical Ecology", 3, 5, ""] },
        {
          items: [
            "Stat 4142",
            "Introduction to Statistical Modeling and Simulation",
            3,
            5,
            "",
          ],
        },
      ],
      total: [18, 30],
    },

    {
      title: "Supportive Course",

      rows: [
        {
          items: [
            "Comp2011",
            "Introduction to Computer Science and Application",
            3,
            5,
            "",
          ],
        },
        { items: ["Comp2012", "	Fundamentals of Programming", 3, 5, ""] },
        { items: ["Comp3021", "Data Base Systems", 3, 5, ""] },
        { items: ["Econ 2032", "Microeconomics", 3, 5, ""] },
        { items: ["Econ 3033", "Macroeconomics", 3, 5, ""] },
        { items: ["Math 2041", "Calculus I", 4, 7, ""] },
        { items: ["Math 2042", "Calculus for Statistics", 3, 5, ""] },
        { items: ["Math2051", "Linear Algebra I", 3, 5, ""] },
        { items: ["Math2052", "Linear Algebra II", 3, 5, ""] },
        { items: ["Math 3062", "Numerical Methods for Statistics", 3, 5, ""] },
      ],
      total: [31, 52],
    },
    {
      title: "Common (General Education Courses)",
      total: [44, 76],
      rows: [
        {
          items: [
            "FLEn 1011",
            "Communicative English Language Skills I",
            3,
            5,
            "",
          ],
        },
        {
          items: [
            "FLEn 1012",
            "Communicative English Language Skills II",
            3,
            5,
            "",
          ],
        },
        { items: ["LoCT 1011", "Critical Thinking", 3, 5, ""] },
        { items: ["Econ 1011", "Economics", 3, 5, ""] },
        { items: ["MGMT 1012", "Entrepreneurship", 3, 5, ""] },
        { items: ["Biol 1011", "General Biology", 3, 5, ""] },
        { items: ["Chem 1012", "General Chemistry", 3, 5, ""] },
        { items: ["Phys 1011", "General Physics", 3, 5, ""] },
        { items: ["Psyc 1011", "General Psychology", 3, 5, ""] },
        {
          items: ["GeES 1011", "Geography of Ethiopia and the Horn", 3, 5, ""],
        },
        { items: ["GlTr 1012", "Global Trends", 2, 4, ""] },
        { items: ["SNIE 1012", "Inclusiveness", 2, 4, ""] },
        {
          items: [
            "EmTe 1012",
            "Technologies	Introduction to Emerging",
            3,
            5,
            "",
          ],
        },
        { items: ["Math 1011", "Mathematics for Natural Science", 3, 5, ""] },
        {items:['MCiE 1012',	'Moral and Civic Education',	2,	4,'']},
        {items:['SpSc 1011',	'Physical Fitness',	'P/F','',''	 ]},
        {items:['Anth 1012',	'Social Anthropology',	2,	4,'']}
      ],
    },
  ];

  return (
    <div id="2">
      {bscPrograms.map((program, k) => (
        <div key={k} className="py-5">
          <h1 className="text-lg md:text-xl font-bold py-3">{program.title}</h1>
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
                      {program.rows.map((y, j) => (
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
                      {program.total && (
                        <tr className="border-t">
                          <td className="py-2 px-4 text-xs text-left font-semibold ">
                            Total
                          </td>
                          <td className="border-r"></td>
                          {program.total.map((t) => (
                            <td
                              key={t}
                              className="border-r font-semibold text-xs py-2 px-4"
                            >
                              {t}{" "}
                            </td>
                          ))}
                          <td></td>
                        </tr>
                      )}
                    </thead>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* <div>
        <h1 className="text-lg md:text-xl font-bold py-3">
          Major Elective Courses
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
                    {rowsMajorElectiveCourses.map((y, j) => (
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
                      <td className="border-r py-2 px-4">18</td>
                      <td className="border-r py-2 px-4">30</td>
                      <td></td>
                    </tr>
                  </thead>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h1 className="text-lg md:text-xl font-bold py-3">Supportive Course</h1>
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
                    {rowsMajorElectiveCourses.map((y, j) => (
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
                      <td className="border-r py-2 px-4">32</td>
                      <td className="border-r py-2 px-4">52</td>
                      <td></td>
                    </tr>
                  </thead>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
