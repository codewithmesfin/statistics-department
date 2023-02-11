import { Fragment } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import { Popover, Transition } from "@headlessui/react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About us", href: "/about" },
  { name: "Membership", href: "/membership" },
  { name: "Congress", href: "/congress" },
  { name: "Workshops", href: "/workshops" },
  { name: "Staff", href: "/staff" },
  { name: "Contact us", href: "/contact" },
];

export default function Toolbar() {
  return (
    <div className="sticky bg-white p-5 md:py-10 z-10 top-0">
      <div className="mx-auto max-w-7xl">
        <Popover>
          <div className="relative">
            <div className="flex flex items-center justify-between">
              <nav
                className="relative w-full flex items-center justify-between sm:h-10 "
                aria-label="Global"
              >
                <div className="flex flex-shrink-0 flex-grow items-center lg:flex-grow-0">
                  <div className="flex w-full items-center justify-between md:w-auto">
                    <Link href="/" className="flex space-x-2 items-center">
                      <Image
                        alt="Your Company"
                        className="h-16 sm:h-24 w-auto sm:h-24"
                        src="/logo.png"
                        width={50}
                        height={50}
                      />
                      <div className="pl-2">
                        <p className="text-sm md:text-xl">
                          Addis Ababa University
                        </p>
                        <span className="text-sm md:text-xl font-extrabold text-green-600">
                          Department of Statistics
                        </span>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="hidden md:ml-10 md:block md:space-x-8 md:pr-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-gray-500 hover:text-green-600"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </nav>
              <div className="-mr-2 flex items-center md:hidden">
                <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-green-600 hover:bg-gray-100 hover:text-gray-500 focus:outline-none ">
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
          </div>
          <Transition
            as={Fragment}
            enter="duration-150 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition md:hidden"
            >
              <div className="overflow-hidden rounded-lg bg-white shadow-md">
                <div className="flex items-center justify-between px-5 pt-4">
                  <Link
                    href="/"
                    className="flex border-0 border-white space-x-2 items-center"
                  >
                    <Image
                      alt="Your Company"
                      className="h-16 w-auto sm:h-16"
                      src="/logo.png"
                      width={50}
                      height={50}
                    />
                   <div className="pl-2">
                        <p className="text-sm md:text-xl">
                          Addis Ababa University
                        </p>
                        <span className="text-sm md:text-xl font-extrabold text-green-600">
                          Department of Statistics
                        </span>
                      </div>
                  </Link>
                  <div className="-mr-2">
                    <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-red-600 focus:outline-none">
                      <span className="sr-only">Close main menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="space-y-1 px-2 pt-2 pb-3">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
      </div>
    </div>
  );
}
