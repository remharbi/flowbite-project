import type { CustomFlowbiteTheme } from "flowbite-react";
import { Flowbite, Card, Tabs } from "flowbite-react";

const customTheme: CustomFlowbiteTheme = {
  card: {
    root: {
      base: "flex rounded-lg bg-white",
      "children": "flex h-full flex-col justify-start gap-4 p-6",
    },
  },
  tabs: {
    base: "flex flex-col gap-2",
    tablist: {
      base: "flex text-center",
      styles: {
        default: "flex-wrap border-b border-gray-200 dark:border-gray-700",
        underline: "flex-wrap -mb-px border-b border-gray-200 dark:border-gray-700",
        pills: "flex-wrap font-medium text-sm text-gray-500 dark:text-gray-400 space-x-2",
        fullWidth:
          "w-full text-sm font-medium divide-x divide-gray-200 shadow grid grid-flow-col dark:divide-gray-700 dark:text-gray-400 rounded-none",
      },
      tabitem: {
        base: "flex items-center justify-center p-4 rounded-t-lg text-sm font-medium first:ml-0 disabled:cursor-not-allowed disabled:text-gray-400 disabled:dark:text-gray-500",
        styles: {
          underline: {
            base: "rounded-t-lg",
            active: {
              on: "text-primary rounded-t-lg border-b-2 border-primary active dark:text-cyan-500 dark:border-cyan-500",
              off: "border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300",
            },
          },
        },
      },
    },
  },
};

export function Details() {
  return (
    <Flowbite theme={{ theme: customTheme }}>
      <Card className="max-w-auto">
        <Tabs aria-label="Tabs with underline" style="underline">
          <Tabs.Item active title="عام">
            This is{" "}
            <span className="font-medium text-gray-800 dark:text-white">
              Profile tab's associated content
            </span>
            . Clicking another tab will toggle the visibility of this one for the next. The tab
            JavaScript swaps classes to control the content visibility and styling.
          </Tabs.Item>
          <Tabs.Item title="الوظيفة">
            This is{" "}
            <span className="font-medium text-gray-800 dark:text-white">
              Dashboard tab's associated content
            </span>
            . Clicking another tab will toggle the visibility of this one for the next. The tab
            JavaScript swaps classes to control the content visibility and styling.
          </Tabs.Item>
          <Tabs.Item title="كشوف المرتبات">
            This is{" "}
            <span className="font-medium text-gray-800 dark:text-white">
              Settings tab's associated content
            </span>
            . Clicking another tab will toggle the visibility of this one for the next. The tab
            JavaScript swaps classes to control the content visibility and styling.
          </Tabs.Item>
          <Tabs.Item title="المستندات">
            This is{" "}
            <span className="font-medium text-gray-800 dark:text-white">
              Contacts tab's associated content
            </span>
            . Clicking another tab will toggle the visibility of this one for the next. The tab
            JavaScript swaps classes to control the content visibility and styling.
          </Tabs.Item>
         <Tabs.Item title="الإعداد">
            This is{" "}
            <span className="font-medium text-gray-800 dark:text-white">
              Contacts tab's associated content
            </span>
            . Clicking another tab will toggle the visibility of this one for the next. The tab
            JavaScript swaps classes to control the content visibility and styling.
          </Tabs.Item>
        </Tabs>
      </Card>
    </Flowbite>
  );
}
export default Details;
