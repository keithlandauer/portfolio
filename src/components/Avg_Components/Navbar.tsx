import {
  BiHomeAlt,
  BiWinkTongue,
  BiQuestionMark,
  BiChevronsDown,
  BiChevronsUp,
} from "react-icons/bi";
import { Disclosure } from "@headlessui/react";
import React from "react";
import { motion } from "framer-motion";
const navigation = [
  { name: "Home", icon: BiHomeAlt, href: "#", current: true },
  { name: "About", icon: BiQuestionMark, href: "#about", current: false },
  { name: "Projects", icon: BiWinkTongue, href: "#projects", current: false },
  { name: "Reviews", icon: "", href: "#reviews", current: false },
];

export const Navbar = () => {
  return (
    <motion.div
      initial={{ y: -250 }}
      animate={{ y: 0 }}
      transition={{ delay: 2, duration: 0.75, type: "tween" }}
    >
      <Disclosure as="nav" className="bg-gray-900">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex h-16 justify-between">
                <div className="flex">
                  <div className="-ml-2 mr-2 flex items-center md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <BiChevronsUp
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <BiChevronsDown
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                  <div className="flex flex-shrink-0 items-center">
                    <img
                      src={require("../../img/logo.jpg")}
                      alt=""
                      className="block h-10 w-auto rounded-full text-green-400 lg:hidden"
                    />
                    <img
                      src={require("../../img/logo.jpg")}
                      alt=""
                      className="hidden h-10 w-auto rounded-full text-green-400 lg:block"
                    />
                  </div>
                  <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="rounded-md px-3 py-2 font-mono text-sm font-medium text-gray-300 duration-300 hover:scale-125 hover:text-green-300"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pt-2 pb-3">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className="rounded-md px-3 py-2 font-mono text-sm font-medium text-gray-300 duration-300 hover:scale-125 hover:text-green-300"
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </motion.div>
  );
};
