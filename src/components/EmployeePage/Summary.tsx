import type { CustomFlowbiteTheme } from "flowbite-react";
import { Card, Badge, Button, Flowbite } from "flowbite-react";
import ProfilePic from "../../assets/img/profile-pic.jpg";
import ManagerPic from "../../assets/img/avatar.jpg";
import { TbMail, TbPhone, TbWorld, TbChevronLeft, TbChevronDown } from "react-icons/tb";

const customTheme: CustomFlowbiteTheme = {
  card: {
    root: {
      base: "flex rounded-lg bg-white",
      children: "flex h-full flex-col justify-start gap-4 p-6",
    },
  },
};
export function Summary() {
  const contact = [
    {
      body: "lincoln@gmail.com",
      icon: <TbMail className="w-[20px] h-[20px] mt-2 text-gray-300" />,
    },
    {
      body: "089318298493",
      icon: <TbPhone className="w-[20px] h-[20px] mt-2 text-gray-300" />,
    },
    {
      body: "بتوقيت جرينتش +07:00",
      icon: <TbWorld className="w-[20px] h-[20px] mt-2 text-gray-300" />,
    },
  ];

  const work = [
    {
      title: "قسم",
      body: "مصممة",
    },
    {
      title: "مكتب",
      body: "Unpixel Studio",
    },
    {
      title: "مدير مباشر",
      body: "سكايلر كالزوني",
      image: <ManagerPic />,
    },
  ];
  return (
    <Flowbite theme={{ theme: customTheme }}>
      <Card className="max-w-xs w-full">
        <div className="grid grid-cols-1 divide-y">
          <div>
            <div className="flex justify-center px-4 pt-4">
              <img src={ProfilePic} alt="Profile Picture" width={100} height={100} />
            </div>
            <div className="flex flex-col items-center pb-10">
              <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                بريستيا كاندرا
              </h5>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                مصمم ثلاثي الأبعاد
              </span>
              <div>
                <Badge color="success" className="mt-6 px-10 py-[4px] rounded-sm text-primary">
                  نشطة
                </Badge>
              </div>
            </div>
          </div>
          <div>
            {contact.map((item, i) => (
              <div key={i} className="flex gap-x-5 my-[16px] items-center">
                {item.icon}
                <p className="font-bold text-sm">{item.body}</p>
              </div>
            ))}
          </div>
          <div>
            {work.map((item, i) => (
              <div key={i} className="flex justify-between items-center">
                <div className="flex flex-col my-4">
                  <h6 className="text-xs">{item.title}</h6>
                  <h4 className="font-bold">{item.body}</h4>
                </div>
                <TbChevronLeft />
              </div>
            ))}
            <div className="flex justify-center w-full">
              <Button color="dark" className="w-full mx-6 mt-6">
                <TbChevronDown className="ml-3" />
                إجراء
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </Flowbite>
  );
}
