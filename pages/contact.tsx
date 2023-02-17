import React from "react";

export default function contact() {
  return (
    <div className="mx-auto max-w-7xl pb-16">
      <div className="md:flex items-center space-x-10">
        <div className="w-full md:w-1/2">
          <section className="py-20 px-3 md:px-0">
            <div className="mx-auto">
              <h1 className="text-6xl md:text-8xl font-extrabold text-center pt-6 text-blue-600">
                Contact us
              </h1>

              <h1 className="text-4xl md:text-6xl pt-2 pb-5 font-extrabold text-center pt-6">
                Let us know how we can help you!
              </h1>
            </div>
          </section>
        </div>
        <div className="w-full md:w-1/2">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSewg3bc6nC2aNFgLmFZs3HiNibh5gNkKRRo96pQ-C6ADrwdGw/viewform?embedded=true"
            width="100%"
            className="h-screen"
          >
            Loading…
          </iframe>
        </div>
      </div>
    </div>
  );
}
