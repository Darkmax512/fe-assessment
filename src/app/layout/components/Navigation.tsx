import React, { Fragment, memo, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import NavItem from "./NavItem";
import navigationConfig, {
  utilsNavigationConfig,
} from "~/app/configs/navigationConfig";
import AppIcons from "~/@main/core/AppIcons";

type Props = {
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  sidebarOpen: boolean;
};

const Navigation = ({ setSidebarOpen, sidebarOpen }: Props) => {
  return (
    <>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-40 md:hidden"
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>
          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-white py-8">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 right-0 -mr-12 pt-2">
                    <button
                      type="button"
                      className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <AppIcons
                        icon="XMarkIcon:outline"
                        className="h-6 w-6 text-white"
                      />
                    </button>
                  </div>
                </Transition.Child>
                <div className="flex flex-shrink-0 items-center px-4">
                  <img
                    className="h-8 w-auto"
                    src="/assets/logo.svg"
                    alt="Your Company"
                  />
                </div>
                <div className="mt-5 h-0 flex-1 overflow-y-auto flex flex-col justify-between">
                  <nav className="space-y-1 px-2">
                    {navigationConfig.map((item) => (
                      <NavItem onClick={setSidebarOpen} item={item} />
                    ))}
                  </nav>
                  <nav className="px-2">
                    {utilsNavigationConfig.map((item) => (
                      <NavItem onClick={setSidebarOpen} item={item} />
                    ))}
                  </nav>
                </div>
              </Dialog.Panel>
            </Transition.Child>
            <div className="w-14 flex-shrink-0" aria-hidden="true"></div>
          </div>
        </Dialog>
      </Transition.Root>
      <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
        <div className="flex flex-grow flex-col overflow-y-auto border-r border-gray-200 bg-white py-8">
          <div className="flex flex-shrink-0 items-center  px-4">
            <img
              className="h-8 w-auto"
              src="/assets/logo.svg"
              alt="Your Company"
            />
          </div>
          <div className="mt-5 flex flex-grow flex-col justify-between">
            <nav className="flex-1 space-y-1 px-2 pb-4">
              {navigationConfig.map((item) => (
                <NavItem item={item} />
              ))}
            </nav>
            <nav className="px-2">
              {utilsNavigationConfig.map((item) => (
                <NavItem item={item} />
              ))}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Navigation);
