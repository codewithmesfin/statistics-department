import Icon from "@/components/Icon";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Typewriter from "typewriter-effect";

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

  const reasons = [
    {
      title: "Networking",
      desc: "How you transform your business as technology, consumer, habits industry dynamic",
      icon: (
        <svg
          width="50px"
          height="50px"
          fill="#000000"
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 32 32"
          xmlSpace="preserve"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth={0} />
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              id="networking--05_1_"
              d="M12,31.36c-1.301,0-2.36-1.059-2.36-2.36s1.059-2.36,2.36-2.36c1.179,0,2.159,0.869,2.333,2h5.307 V10.333c-1.131-0.174-2-1.154-2-2.333c0-1.301,1.059-2.36,2.36-2.36S22.36,6.699,22.36,8c0,1.179-0.869,2.159-2,2.333V29 c0,0.199-0.161,0.36-0.36,0.36h-5.667C14.159,30.491,13.179,31.36,12,31.36z M12,27.36c-0.904,0-1.64,0.735-1.64,1.64 s0.736,1.64,1.64,1.64s1.64-0.735,1.64-1.64S12.904,27.36,12,27.36z M20,6.36c-0.904,0-1.64,0.736-1.64,1.64S19.096,9.64,20,9.64 S21.64,8.904,21.64,8S20.904,6.36,20,6.36z M4,31.36c-1.853,0-3.359-1.508-3.359-3.36c0-1.731,1.316-3.161,3-3.341v-6.326 c-1.131-0.174-2-1.154-2-2.333c0-1.301,1.059-2.36,2.36-2.36S6.36,14.699,6.36,16c0,1.179-0.869,2.159-2,2.333v6.326 c1.684,0.181,3,1.61,3,3.341C7.36,29.853,5.853,31.36,4,31.36z M4,25.36c-1.456,0-2.64,1.184-2.64,2.64S2.544,30.64,4,30.64 S6.641,29.456,6.641,28S5.456,25.36,4,25.36z M4,14.36c-0.904,0-1.64,0.736-1.64,1.64c0,0.904,0.736,1.64,1.64,1.64 S5.64,16.904,5.64,16S4.904,14.36,4,14.36z M12,23.36c-1.853,0-3.36-1.508-3.36-3.36c0-1.73,1.316-3.16,3-3.341v-4.51L6.106,6.616 C5.53,7.081,4.796,7.36,4,7.36C2.147,7.36,0.64,5.853,0.64,4S2.147,0.64,4,0.64S7.36,2.147,7.36,4c0,0.797-0.279,1.53-0.744,2.106 l5.639,5.639c0.068,0.067,0.105,0.159,0.105,0.254v4.659c1.684,0.18,3,1.609,3,3.341C15.36,21.853,13.853,23.36,12,23.36z M12,17.36 c-1.456,0-2.641,1.184-2.641,2.64s1.185,2.64,2.641,2.64s2.64-1.184,2.64-2.64S13.456,17.36,12,17.36z M4,1.36 C2.544,1.36,1.36,2.544,1.36,4S2.544,6.64,4,6.64c1.456,0,2.64-1.184,2.64-2.64S5.456,1.36,4,1.36z M27.966,22.345 c-1.302,0-2.36-1.059-2.36-2.36c0-1.19,0.887-2.179,2.034-2.338v-6.306c-1.684-0.18-3-1.61-3-3.341c0-1.853,1.508-3.359,3.36-3.359 S31.36,6.147,31.36,8c0,1.731-1.316,3.161-3,3.341v6.316c1.114,0.188,1.966,1.16,1.966,2.327 C30.326,21.286,29.268,22.345,27.966,22.345z M27.966,18.345c-0.904,0-1.64,0.735-1.64,1.64s0.735,1.64,1.64,1.64 s1.64-0.735,1.64-1.64S28.87,18.345,27.966,18.345z M28,5.36c-1.456,0-2.64,1.184-2.64,2.64s1.184,2.641,2.64,2.641 S30.64,9.456,30.64,8S29.456,5.36,28,5.36z"
            />{" "}
            <rect
              id="_Transparent_Rectangle"
              style={{ fill: "none" }}
              width={8}
              height={8}
            />{" "}
          </g>
        </svg>
      ),
    },
    {
      title: "New People",
      desc: "How you transform your business as technology, consumer, habits industry dynamic",
      icon: (
        <>
          <svg
            width="50px"
            height="50px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.4"
              d="M17.9981 7.16C17.9381 7.15 17.8681 7.15 17.8081 7.16C16.4281 7.11 15.3281 5.98 15.3281 4.58C15.3281 3.15 16.4781 2 17.9081 2C19.3381 2 20.4881 3.16 20.4881 4.58C20.4781 5.98 19.3781 7.11 17.9981 7.16Z"
              stroke="#292D32"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.4"
              d="M16.9675 14.4402C18.3375 14.6702 19.8475 14.4302 20.9075 13.7202C22.3175 12.7802 22.3175 11.2402 20.9075 10.3002C19.8375 9.59016 18.3075 9.35016 16.9375 9.59016"
              stroke="#292D32"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.4"
              d="M5.96656 7.16C6.02656 7.15 6.09656 7.15 6.15656 7.16C7.53656 7.11 8.63656 5.98 8.63656 4.58C8.63656 3.15 7.48656 2 6.05656 2C4.62656 2 3.47656 3.16 3.47656 4.58C3.48656 5.98 4.58656 7.11 5.96656 7.16Z"
              stroke="#292D32"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.4"
              d="M6.9975 14.4402C5.6275 14.6702 4.1175 14.4302 3.0575 13.7202C1.6475 12.7802 1.6475 11.2402 3.0575 10.3002C4.1275 9.59016 5.6575 9.35016 7.0275 9.59016"
              stroke="#292D32"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.0001 14.6302C11.9401 14.6202 11.8701 14.6202 11.8101 14.6302C10.4301 14.5802 9.33008 13.4502 9.33008 12.0502C9.33008 10.6202 10.4801 9.47021 11.9101 9.47021C13.3401 9.47021 14.4901 10.6302 14.4901 12.0502C14.4801 13.4502 13.3801 14.5902 12.0001 14.6302Z"
              stroke="#292D32"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.0907 17.7804C7.6807 18.7204 7.6807 20.2603 9.0907 21.2003C10.6907 22.2703 13.3107 22.2703 14.9107 21.2003C16.3207 20.2603 16.3207 18.7204 14.9107 17.7804C13.3207 16.7204 10.6907 16.7204 9.0907 17.7804Z"
              stroke="#292D32"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </>
      ),
    },
    {
      title: "Great Speakers",
      desc: "How you transform your business as technology, consumer, habits industry dynamic",
      icon: (
        <>
          <svg
            fill="#000000"
            width="50px"
            height="50px"
            viewBox="-6.31 0 122.88 122.88"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            xmlSpace="preserve"
          >
            <style
              type="text/css"
              dangerouslySetInnerHTML={{
                __html: ".st0{fill-rule:evenodd;clip-rule:evenodd;}",
              }}
            />
            <g>
              <path
                className="st0"
                d="M10.69,55.55C5.74,57,3.64,62.09,3.71,67.87c0.03,2.61,0.5,5.35,1.35,8c0.85,2.64,2.07,5.15,3.62,7.31 c3.52,4.93,8.76,7.94,14.9,5.83c0.46-0.16,0.95-0.12,1.36,0.07c0.1-0.04,0.2-0.07,0.31-0.11c1.53-0.5,2.95-0.93,4.24-1.32 c1.44-0.43,2.8-0.82,4.08-1.16c0.99-0.27,2.01,0.32,2.28,1.31c0.02,0.07,0.03,0.14,0.04,0.21c0.18,0.81,0.37,1.62,0.55,2.43 c1.41,6.28,2.77,12.34,4.59,17.26c0.03,0.09,0.27,0.76,0.52,1.43c1.12,3.1,2.33,6.41,3.88,8.36c1.37,1.71,3.26,2.22,6.2-0.08 c0.55-0.52,1.11-1,1.68-1.49c1.75-1.51,3.51-3.01,4.15-5.27c-0.4-0.55-1.17-0.88-1.94-1.21c-2.57-1.09-5.14-2.19-4.45-7.59 c0.03-0.28,0.07-0.53,0.1-0.78c0.2-1.58,0.31-2.39,0.21-2.74c-0.05-0.19-0.44-0.54-1.21-1.25l-0.28-0.26 c-1.52-1.39-2.06-3.38-2.04-5.53c0.02-2.53,0.85-5.31,1.68-7.31c0.26-0.63,0.83-1.04,1.46-1.13l0,0 c19.22-2.66,30.94,0.68,40.26,3.34c0.4,0.11,0.8,0.23,1.19,0.34c-8.32-8.58-15.14-21.58-19.81-34.9 c-4.93-14.07-7.46-28.61-6.8-38.79c-7.62,11.26-20.99,29.14-52.86,40.86c-0.03,0.01-0.06,0.02-0.09,0.03l-0.25,0.09 c-0.33,0.12-0.38,0.09-0.43,0.13c-0.07,0.06,0,0.06-0.13,0.27c-0.02,0.03,0.04-0.07-0.34,0.53C11.49,55.15,11.11,55.42,10.69,55.55 L10.69,55.55L10.69,55.55z M90.07,52.82c0,4.61-4.52,12.9-7.35,13.06c4.82,9.44,10.74,17.61,17.41,22.49 c0.39,0.05,0.75,0.08,1.09,0.06c0.65-0.02,1.29-0.2,1.99-0.64c1.52-1.53,2.48-3.93,2.97-6.96c1.5-9.34-1.56-23.97-6.69-38.05 C94.35,28.67,87.17,15.22,80.46,8.26C78,5.71,75.68,4.11,73.67,3.78c-0.51-0.08-0.8-0.1-0.94-0.05c-0.17,0.06-0.43,0.3-0.84,0.71 c-0.2,0.2-0.4,0.42-0.61,0.66c-0.02,0.06-0.05,0.12-0.07,0.17c-3.14,6.48-2.12,20.47,1.95,35.47l0,0 C76.23,39.3,90.07,40.94,90.07,52.82L90.07,52.82z M99.94,92.08c-0.4,0.08-0.83,0.02-1.21-0.18c-0.35-0.06-0.7-0.14-1.07-0.21 c-2.42-0.5-4.83-1.19-7.43-1.93c-8.81-2.51-19.86-5.66-37.66-3.38c-0.55,1.52-1.01,3.33-1.02,4.94c-0.01,1.16,0.21,2.18,0.83,2.75 l0.28,0.26c1.32,1.2,1.97,1.79,2.3,3.04c0.28,1.04,0.14,2.09-0.13,4.17c-0.03,0.24-0.06,0.5-0.1,0.78 c-0.33,2.62,0.95,3.17,2.23,3.71c1.66,0.71,3.33,1.42,4.15,3.69c0.14,0.33,0.19,0.71,0.12,1.09c-0.75,3.84-3.13,5.89-5.52,7.94 c-0.53,0.46-1.06,0.91-1.56,1.38l0,0c-0.04,0.04-0.08,0.07-0.12,0.11c-5.2,4.16-8.77,2.99-11.5-0.42 c-1.95-2.44-3.26-6.04-4.48-9.41c-0.1-0.29-0.21-0.57-0.52-1.42c-1.89-5.1-3.28-11.31-4.72-17.73l-0.15-0.65 c-0.72,0.2-1.43,0.41-2.13,0.62c-1.45,0.43-2.84,0.86-4.17,1.29c-0.17,0.05-0.28,0.1-0.37,0.14c-0.87,0.35-1.26,0.5-2.04,0.14 c-7.65,2.23-14.04-1.46-18.32-7.45C3.89,82.86,2.49,79.99,1.53,77C0.57,74.01,0.04,70.89,0,67.9c-0.08-7.1,2.62-13.44,8.94-15.68 c0.31-0.51,0.49-0.79,0.88-1.12c0.44-0.37,0.8-0.5,1.55-0.77l0.24-0.09c0.03-0.01,0.06-0.02,0.09-0.03 C44.41,38.17,56.97,19.42,64.11,8.75c2-2.98,3.59-5.36,5.16-6.93c0.77-0.77,1.36-1.26,2.16-1.56c0.83-0.31,1.64-0.33,2.82-0.14 c2.86,0.46,5.87,2.45,8.88,5.57c7.06,7.32,14.55,21.28,19.85,35.84c5.31,14.6,8.47,29.91,6.86,39.89 c-0.62,3.88-1.96,7.03-4.16,9.15l0,0c-0.07,0.07-0.16,0.14-0.25,0.2c-1.4,0.95-2.72,1.32-4.08,1.38 C100.88,92.16,100.41,92.13,99.94,92.08L99.94,92.08z"
              />
            </g>
          </svg>
        </>
      ),
    },
    {
      title: "Have Fun",
      desc: "How you transform your business as technology, consumer, habits industry dynamic",
      icon: (
        <>
          <svg
            fill="#000000"
            height="50px"
            width="50px"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 302.25 302.25"
            xmlSpace="preserve"
          >
            <g>
              <g>
                <path
                  d="M290.192,270.772c-1.689-4.674-6.846-7.096-11.522-5.407l-18.417,6.652l-30.2-83.612
          c22.259-12.605,32.906-39.835,23.931-64.686L211.445,5.945c-1.689-4.674-6.846-7.097-11.522-5.407l-48.798,17.625L102.326,0.538
          C97.65-1.151,92.492,1.27,90.804,5.945L48.265,123.719c-8.975,24.85,1.672,52.081,23.931,64.685l-30.2,83.612l-18.417-6.652
          c-4.674-1.688-9.834,0.732-11.522,5.407c-1.688,4.675,0.732,9.834,5.407,11.522l53.763,19.419c1.01,0.365,2.042,0.538,3.057,0.538
          c3.684,0,7.142-2.28,8.465-5.945c1.688-4.675-0.732-9.834-5.407-11.522l-18.417-6.652l30.194-83.596
          c3.144,0.571,6.315,0.862,9.481,0.862c7.747,0,15.466-1.706,22.687-5.095c12.932-6.069,22.727-16.811,27.58-30.247l2.257-6.248
          l2.257,6.248c4.853,13.436,14.648,24.178,27.58,30.247c7.222,3.389,14.939,5.095,22.687,5.095c3.166,0,6.337-0.291,9.481-0.862
          l30.194,83.596l-18.417,6.652c-4.675,1.688-7.096,6.847-5.407,11.522c1.324,3.665,4.781,5.945,8.465,5.945
          c1.015,0,2.047-0.173,3.057-0.538l53.763-19.419C289.46,280.605,291.881,275.447,290.192,270.772z M191.089,35.401
          c-1.014-2.161-2.845-3.83-5.09-4.641l-8.381-3.027l19.955-7.208l19.676,54.474l-43.31,15.643l17.467-48.36
          C192.217,40.037,192.103,37.562,191.089,35.401z M131.938,153.94c-3.22,8.914-9.718,16.041-18.297,20.067
          c-8.579,4.026-18.213,4.472-27.127,1.251c-18.401-6.646-27.964-27.024-21.318-45.425l13.691-37.904l66.743,24.107L131.938,153.94z
           M151.744,99.107L85,74.999l19.676-54.474l66.744,24.107L151.744,99.107z M215.736,175.259
          c-8.914,3.219-18.549,2.775-27.128-1.252c-8.58-4.026-15.078-11.153-18.297-20.067l-9.617-26.626l5.295-14.661l57.375-20.723
          l13.69,37.904C243.7,148.235,234.137,168.613,215.736,175.259z"
                />
              </g>
            </g>
          </svg>
        </>
      ),
    },
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

            <div
              className="w-full md:w-1/2"
              data-aos="flip-left"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <Image
                src="/images/man1.png"
                alt="image"
                loading="lazy"
                width={200}
                height={200}
                className="w-full h-full max-w-[400px] max-h-[300px] md:max-h-[600px] rounded object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-7xl mx-auto py-10">
          <div>
            <h1 className="text-xl text-center md:text-2xl py-2 px-5 font-bold">
              Conference Theme
            </h1>
            <div className="max-w-[100px] mx-auto h-[2px] my-3 bg-blue-600"></div>
            <h1 className="text-blue-600 py-10 con-text leading-10 text-center font-extrabold text-2xl md:text-6xl p-2 px-5 ">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString(
                      "Modern robust statistical methods for sound decision-making and the expanding boundaries of statistics."
                    )
                    .pauseFor(1500)
                    .start();
                }}
                options={{ loop: false, delay: 30 }}
              />
            </h1>
            <div className="max-w-[100px] mx-auto h-[2px] my-3 bg-blue-600"></div>
            <h1 className="text-xl text-center md:text-2xl p-2 font-extrabold">
              Organized by the{" "}
              <span className="text-blue-600">Department of Statistics</span>
            </h1>
          </div>
        </div>
      </section>

      <section className="bg-blue-600 px-10 md:px-0 py-10">
        <div className="mx-auto max-w-7xl p-3">
          <div className="md:flex justify-center  md:space-x-10">
            <div className="w-full md:w-1/2">
              <h1 className="pb-6 text-white font-extrabold">
                Conference Note
              </h1>
              <div className="flex items-center space-x-4 text-white">
                <Icon path="done" />
                <p>
                  <span className="font-semibold">Conference Date: </span>June
                  16-17, 2023
                </p>
              </div>

              <div className="flex items-center space-x-4 text-white">
                <Icon path="done" />
                <p>
                  <span className="font-semibold">Conference venue: </span>Addis
                  Ababa, Ethiopia
                </p>
              </div>

              <div className="flex items-center space-x-4 text-white">
                <Icon path="done" />
                <p>
                  <span className="font-semibold">Organized by: </span>
                  Department of Statistics, Addis Ababa University
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h1 className="pb-6 text-white font-extrabold">
                Expected Participants of the Conference
              </h1>
              <div className="flex space-x-4 text-white">
                <Icon path="done" />
                <p>High level ministry officials</p>
              </div>
              <div className="flex space-x-4 text-white">
                <Icon path="done" />
                <p>
                  Senior representatives of UN Agencies and other International
                  organizations
                </p>
              </div>
              <div className="flex space-x-4 text-white">
                <Icon path="done" />
                <p>
                  Statistics department heads in universities across the country
                </p>
              </div>
              <div className="flex space-x-4 text-white">
                <Icon path="done" />
                <p>Statistics scholars from various universities abroad</p>
              </div>
              <div className="flex space-x-4 text-white">
                <Icon path="done" />
                <p>Prominent researchers</p>
              </div>
              <div className="flex space-x-4 text-white">
                <Icon path="done" />
                <p>
                  Former students of the Department are expected to participate
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 px-3 md:px-0 py-10">
        <div className="mx-auto max-w-7xl p-3">
          <div className="md:flex items-center md:space-x-10">
            <div className="w-full md:w-1/2">
              <h1 className="text-md md:text-lg">WHY JOIN EXHIBIT</h1>
              <h1 className="text-[#3b1d82] py-2 pb-4 font-extrabold text-4xl md:text-4xl">
                Why you should Join the Conference
              </h1>
              <span className="title-shape">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="71px"
                  height="11px"
                >
                  <path
                    fillRule="evenodd"
                    d="M59.669,10.710 L49.164,3.306 L39.428,10.681 L29.714,3.322 L20.006,10.682 L10.295,3.322 L1.185,10.228 L-0.010,8.578 L10.295,0.765 L20.006,8.125 L29.714,0.765 L39.428,8.125 L49.122,0.781 L59.680,8.223 L69.858,1.192 L70.982,2.895 L59.669,10.710 Z"
                  />
                </svg>
              </span>
              <p className="py-3 text-gray-500">
                How you transform your business as tech, consumer, habits
                industry dynamic change, Find out from those leading the charge.
              </p>
              <div className="pb-16 pt-6 md:py-6">
                <Link
                  href="/reserve"
                  className=" text-white bg-blue-600 border rounded border-blue-600 shadow py-3 px-6"
                >
                  Reserve Seat
                </Link>
              </div>
            </div>
            <div className="w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {reasons.map((x, i) => (
                  <div key={i} className="shadow-xl pl-10 pt-10 bg-white">
                    <div className="flex justify-between">
                      <div className="text-xl md:text-2xl font-bold">
                        {x.title}{" "}
                      </div>
                      <div>{x.icon} </div>
                    </div>
                    <div className="py-2 pr-10">
                      <p>{x.desc} </p>
                    </div>
                    <div className="flex justify-between">
                      <div></div>
                      <div className="bg-blue-600 px-10 py-3 rounded-tl-full">
                        <p className="text-2xl md:text-4xl text-white font-extrabold">
                          {" "}
                          {i + 1}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

  

      <section className="py-10">
        <div className="mx-auto max-w-7xl md:p-3">
          <div className="md:flex md:space-x-10">
            <div className="w-full md:w-1/2 hidden md:block" data-aos="zoom-in-left" data-aos-duration="3000">
              <Image
                src="/images/aau.jpeg"
                alt="image"
                loading="lazy"
                width={200}
                height={200}
                className="w-full h-full rounded object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 md:py-6" >
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
