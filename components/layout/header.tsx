import Link from "next/link";
import React from "react";
import Icon from "../Icon";

export default function TopHeader() {
  const leftItems = [
    {
      title: "Addis Ababa, Ethiopia",
      icon: <Icon path={"location"}/>,
    },
    {
      title: "info@statistics.aau.edu.et",
      icon:<Icon  path="email"/>,
    },
    {
      title: "+251911522902",
      icon:<Icon path="phone" />,
    },
  ];
  const rightItems= [
    {
     href:"",
      icon:<Icon path="facebook" />
    },
    {
     href:"", icon:<svg
      className="w-6 h-6 fill-current"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512">
      <path
        d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
      ></path>
    </svg>
    },
    {
    href:"", icon:<Icon path="twitter" />
    }
  ]

  return (
    <header className="bg-green-600 p-3 w-full ">
      <div className="mx-auto max-w-7xl">
        <div className="flex justify-between">
          <div className="flex space-x-10">
            {leftItems.map((x, i) => (
              <Link href="/aa" key={i} className="flex space-x-2 text-white">
                {x.icon}
                {x.title}
              </Link>
            ))}
          </div>
          <div className="flex space-x-6">
            <div className="text-white flex space-x-2">
              <Icon path="time"/>
              <p>Office Hours: 8:00 AM – 5:00 PM</p>
            </div>
            {rightItems.map((x, i) => (
              <Link href="/aa" key={i} className="text-white">
                {x.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
