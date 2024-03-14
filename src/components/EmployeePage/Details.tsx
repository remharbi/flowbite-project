import type { CustomFlowbiteTheme } from "flowbite-react";
import { Flowbite, Card, Tabs } from "flowbite-react";
import DetailsCard from "./DetailsCard";

const customTheme: CustomFlowbiteTheme = {
  card: {
    root: {
      base: "flex rounded-lg bg-white",
      children: "flex h-full flex-col justify-start gap-4 p-6",
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
              on: "text-primary rounded-t-lg border-b-2 border-primary active dark:text-primary dark:border-primary",
              off: "border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300",
            },
          },
        },
      },
    },
  },
};

const personalInfoFirst = [
  { label: "الاسم الكامل", info: "بريستيا كاندرا نيلسون" },
  { label: "تاريخ الميلاد", info: "23 مايو 1997" },
  { label: "الجنسية", info: "إندونيسيا" },
  { label: "عنوان البريد الإلكتروني", info: "lincoln@gmail.com" },
  { label: "التأمين الصحي", info: "تأمين أكسا" },
];

const personalInfoSecond = [
  { label: "الجنس", info: "أنثى" },
  { label: "الحالة الاجتماعية", info: "-" },
  { label: "معرف الضريبة الشخصية", info: "-" },
  { label: "التأمين الاجتماعي", info: "-" },
  { label: "رقم الهاتف", info: "089318298493" },
];

const addressInfoFirst = [
  { label: "العناوين الرئيسية", info: "شارع بانيومانيك، جاوة الوسطى. ,سيمارانج اندونيسيا" },
  { label: "البلد", info: "إندونيسيا" },
  { label: "الولاية/المقاطعة", info: "جاوة الوسطى" },
  { label: "المدينة", info: "سيمارانغ" },
  { label: "الرمز البريدي", info: "03125" },
];
export function Details() {
  return (
    <Flowbite theme={{ theme: customTheme }}>
      <Card className="max-w-auto w-full">
        <Tabs aria-label="Tabs with underline" style="underline">
          <Tabs.Item active title="عام">
            <DetailsCard
              title="المعلومات الشخصية"
              firstCol={personalInfoFirst}
              secondCol={personalInfoSecond}
            />
            <DetailsCard title="العنوان" firstCol={addressInfoFirst} />
            <DetailsCard
              title="جهة الاتصال في حالات الطوارئ"
              firstCol={personalInfoFirst}
              secondCol={personalInfoSecond}
            />
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
