
import type { CustomFlowbiteTheme } from "flowbite-react";
import { Flowbite, Avatar, Dropdown, Navbar, TextInput } from "flowbite-react";
import { TbSearch } from "react-icons/tb";
import ShortcutIcon from "../assets/img/command.svg";
import MsgNotif from "../assets/img/msgNotif.svg";
import MailNotif from "../assets/img/mainNotif.svg";

const customTheme: CustomFlowbiteTheme = {
  textInput: {
    field: {
      base: "relative w-full",
      icon: {
        base: "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3",
        svg: "h-7 w-12 text-gray-500 dark:text-gray-400",
      },
    },
  },
  navbar: {
    root: {
      base: "bg-white px-2 py-2.5 dark:border-gray-700 dark:bg-gray-800 sm:px-4",
      rounded: {
        on: "rounded",
        off: "",
      },
      bordered: {
        on: "border",
        off: "",
      },
      inner: {
        base: "mx-auto flex items-center justify-between",
        fluid: {
          on: "",
          off: "container",
        },
      },
    },
    brand: {
      base: "flex items-center",
    },
    collapse: {
      base: "w-full md:block md:w-auto",
      list: "mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium",
      hidden: {
        on: "hidden",
        off: "",
      },
    },
    link: {
      base: "block py-2 pr-4 pr-3 md:p-0",
      active: {
        on: "bg-primary text-white dark:text-white md:bg-transparent md:text-primary",
        off: "border-b border-gray-100  text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-cyan-700 md:dark:hover:bg-transparent md:dark:hover:text-white",
      },
    },
    toggle: {
      base: "inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden",
      icon: "h-6 w-6 shrink-0",
    },
  },
};

export function TopNavBar() {
  return (
    <Flowbite theme={{ theme: customTheme }}>
      <Navbar fluid rounded>
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <TextInput
            id="search"
            type="text"
            icon={ShortcutIcon}
            rightIcon={TbSearch}
            placeholder="ابحث عن اي شي...."
            className="ml-6"
          />
          <Navbar.Collapse>
            <Navbar.Link></Navbar.Link>
            <Navbar.Link>وثائق</Navbar.Link>
            <Navbar.Link>أخبار</Navbar.Link>
            <Navbar.Link>قسيمة الدفع</Navbar.Link>
            <Navbar.Link>تقرير</Navbar.Link>
          </Navbar.Collapse>
        </div>
        <div className="flex items-center gap-x-6 invisible sm:visible">
          <MsgNotif />
          <MailNotif />
          <Dropdown
            arrowIcon={true}
            inline
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded
              />
            }
          >
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
        </div>

        <Navbar.Toggle />
      </Navbar>
    </Flowbite>
  );
}
