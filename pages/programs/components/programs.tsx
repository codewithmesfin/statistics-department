import React from "react";

export default function MainPrograms() {
  const items = [
    "Bachelor of Science (B.Sc.) Degree in Statistics",
    "Master of Science (M.Sc.) Degree in Statistics (Actuarial Statistics, Biostatistics or No-concentration)",
    "Doctor of Philosophy (Ph.D.) Degree in Statistics (Applied Statistics, Bio-Statistics or Mathematical Statistics)",
  ];
  return (
    <div id="1">
      <div>
        <h1 className="text-lg md:text-xl font-bold py-3">
          Programs currently offered by the Department of Statistics
        </h1>
        <ol className="pl-5">
          {items.map((x, i) => (
            <li key={i} className="text-sm list-decimal text-gray-600 py-1">
              {x}
            </li>
          ))}
        </ol>
        <div className="py-3">
          <p className="text-sm text-gray-600">
            The duration of study for the B.Sc. program is four years. Each
            student in the B.Sc. program must complete a minimum of 249
            Ethiopian Credit Transfer System (EtCTS) or 147 credit hours and a
            CGPA of at least 2.00 in Statistics courses and an overall CGPA of
            at least 2.00 with no “F” grade in any of the courses taken from any
            module.
          </p>
        </div>
      </div>
    </div>
  );
}
