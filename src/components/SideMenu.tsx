import { useState, useEffect } from "react";
import type { CustomFlowbiteTheme } from "flowbite-react";
import { Sidebar, Flowbite, Button, Badge } from "flowbite-react";
import { useWindowSize } from "@uidotdev/usehooks";
import {
  TbUsers,
  TbClipboardText,
  TbClockStop,
  TbCalendar,
  TbCalendarUp,
  TbTrendingUp,
  TbBriefcase,
  TbLayoutGrid,
  TbChevronsLeft,
  TbChevronsRight,
  TbHelpCircle,
  TbSettings,
} from "react-icons/tb";
import Logo from "../assets/img/logo.png";

const customTheme: CustomFlowbiteTheme = {
  button: {
    color: {
      green:
        "text-white bg-primary enabled:hover:bg-green-500 dark:bg-green-600 dark:text-white dark:border-green-600 dark:enabled:hover:bg-green-700 dark:enabled:hover:border-green-700 dark:focus:ring-green-700",
    },
  },
  sidebar: {
    root: {
      base: "h-full",
      collapsed: {
        on: "w-20",
        off: "w-full",
      },
      inner:
        "h-full overflow-y-auto overflow-x-hidden rounded bg-white py-6 px-7 dark:bg-gray-800",
    },
    collapse: {
      button:
        "group flex w-full items-center rounded-lg p-2 text-base font-normal text-gray-300 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-100",
      icon: {
        base: "h-5 w-5 text-gray-300 transition duration-75 group-hover:text-gray-400 dark:text-gray-100 dark:group-hover:text-white",
        open: {
          off: "",
          on: "text-gray-900",
        },
      },
      label: {
        base: "mr-3 flex-1 whitespace-nowrap text-right font-bold text-gray-600",
      },
    },
  },
  badge: {
    root: {
      base: "flex h-fit items-center gap-1 font-semibold rounded-full",
      color: {
        failure:
          "bg-danger text-white dark:bg-red-200 dark:text-red-900 group-hover:bg-red-200 dark:group-hover:bg-red-300 rounded-full",
      },
    },
    icon: {
      off: "rounded-full px-1.5",
      on: "rounded-full p-1.5",
      size: {
        xs: "w-[20px] h-[20px]",
        sm: "w-[20px] h-[20px]",
      },
    },
  },
};

export function SideMenu() {
  const [collapse, toggleCollapse] = useState(false);
  const size = useWindowSize();
  const menuItems = [
    {
      title: "الموظفون",
      icon: TbUsers,
    },
    {
      title: "قائمة المراجعة",
      icon: TbClipboardText,
    },
    {
      title: "وقت التوقف",
      icon: TbClockStop,
    },
    {
      title: "الحضور",
      icon: TbCalendar,
    },
    {
      title: "كشوف المرتبات",
      icon: TbCalendarUp,
    },
    {
      title: "الأداء",
      icon: TbTrendingUp,
    },
    {
      title: "التوظيف",
      icon: TbBriefcase,
    },
  ];

  useEffect(() => {
    if (size.width !== null) {
      size.width > 990 ? toggleCollapse(false) : toggleCollapse(true);
    }
  }, [size]);
  return (
    <div className={`${collapse ? "auto" : " w-1/2 sm:w-1/5"}`}>
      <Flowbite theme={{ theme: customTheme }}>
        <Sidebar
          aria-label="Sidebar with multi-level dropdown"
          collapsed={collapse}
          className="max-h-screen"
        >
          <Sidebar.Items className="h-full">
            <Sidebar.ItemGroup className="h-full">
              <div className="flex flex-col items-center justify-between h-full">
                <div className="w-full">
                  <div className="flex justify-between items-center">
                    {!collapse ? (
                      <>
                        <img src={Logo} alt="logo" className="w-3/4 max-w-32" />
                        <TbChevronsRight onClick={() => toggleCollapse(!collapse)} />
                      </>
                    ) : (
                      <TbChevronsLeft onClick={() => toggleCollapse(!collapse)} />
                    )}
                  </div>
                  {collapse ? (
                    <></>
                  ) : (
                    <div className="my-6 flex justify-center">
                      <Button color="green">
                        <TbLayoutGrid className="ml-2 h-5 w-5" />
                        لوحة المعلومات
                      </Button>
                    </div>
                  )}

                  <div className={`${collapse ? "mt-8" : ""}`}>
                    {menuItems.map((item, i) => (
                      <Sidebar.Collapse
                        key={i}
                        className="text-right"
                        icon={item.icon}
                        label={item.title}
                      ></Sidebar.Collapse>
                    ))}
                  </div>
                </div>
                <div className="w-full">
                  <Sidebar.Item icon={TbHelpCircle} className="w-full">
                    <div className="flex justify-between">
                      مركز المساعدة
                      <Badge color="failure">8</Badge>
                    </div>
                  </Sidebar.Item>
                  <Sidebar.Item icon={TbSettings}>الإعداد</Sidebar.Item>
                </div>
              </div>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </Flowbite>
    </div>
  );
}
