import React from "react";

export default function Objectives() {
  const items = [
    `To train statisticians at the B.Sc, M.Sc and PhD levels who will be
able to take-up positions in the public and private sectors and
provide professional support for orderly development of thecountry.`,
    `To carry out research in theoretical and applied statistics`,
    `To provide consultancy services and run short term courses in
statistics and related fields.`,
    `To participate and play an active role in the activities of
professional statistical and related societies.`,
  ];
  return (
    <div className="py-10" id="0">
      <div>
        <h2 className="text-2xl py-5 text-gray-900 font-extrabold md:text-6xl">
          Programs of Statistics
        </h2>
        <h1 className="text-lg md:text-xl font-bold py-3">
          Department of Statistics Program Objectives:
        </h1>
        <ul className="pl-5">
          {items.map((x, i) => (
            <li key={i} className="list-disc text-sm text-gray-600 py-1">
              {x}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
