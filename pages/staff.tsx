import React from "react";

export default function Staffs() {
  const coreAcademicStaff = {
    columns: ["No.", "Name", "Rank", "Specialization"],
    rows: [
      { items: [1, "Abrham Keraleme", "Lecturer", ""] },
      { items: [2, "Bedilu Alamirie", "Asst. Prof.", "Biostatistics"] },
      { items: [3, "Butte Gotu", "Assoc. Prof.", ""] },
      { items: [4, "Dejen Tesfaw", "Asst. Prof.", ""] },
      { items: [5, "Derbachew Asfaw", "Asst. Prof.", ""] },
      { items: [6, "Eshetu Wencheko", "Prof.", "Mathematical Statistics"] },
      { items: [7, "Gemechu Abdisa", "Lecturer", ""] },
      { items: [8, "Gete Bulbulu", "Lecturer", ""] },
      { items: [9, "Habte Tadesse", "Asst. Prof.", "Signal Processing"] },
    ],
  };

  return (
    <div className="mx-auto max-w-7xl pb-16">
      <div className="py-16">
        <h1 className="text-6xl md:text-8xl font-extrabold text-center pt-6 text-blue-600">
          Staff
        </h1>

        <div className="py-6">
          <h1 className="text-center">
            Chairman of the Department of Statistics
          </h1>
          <h1 className="text-xl text-center font-extrabold">
            Dr. Bedilu Alamirie
          </h1>
        </div>

        <div className="md:flex md:space-x-10">
          <section className="w-full md:w-1/2">
            <div>
              <h1 className="text-sm md:text-lg font-bold py-3">
                Core Academic Staff
              </h1>
            </div>
            <div className="flex flex-col max-w-5xl">
              {coreAcademicStaff.rows && (
                <div className="overflow-x-auto shadow-xs border border-gray-200 sm:rounded-lg">
                  <div className="inline-block min-w-full align-middle">
                    <div className="overflow-hidden ">
                      <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
                        <thead className="">
                          <tr>
                            {coreAcademicStaff.columns.map((x, i) => (
                              <th
                                key={i}
                                scope="col"
                                className={`py-2 ${
                                  i + 1 < coreAcademicStaff.columns.length
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
                          {coreAcademicStaff.rows.map((y, j) => (
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
              )}
            </div>
          </section>

          <section className="w-full md:w-1/2">right side</section>
        </div>
      </div>
    </div>
  );
}
