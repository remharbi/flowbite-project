import type { CustomFlowbiteTheme } from "flowbite-react";
import { Card, Flowbite } from "flowbite-react";
import { TbPencil } from "react-icons/tb";

const customTheme: CustomFlowbiteTheme = {
  card: {
    root: {
      base: "flex rounded-lg bg-white border",
    },
  },
};

export function DetailsCard({ ...props }) {
  return (
    <Flowbite theme={{ theme: customTheme }}>
      <Card className="mb-6">
        <div className="grid grid-cols-1 divide-y">
          <div className="flex justify-between mb-6">
            <h2 className="text-lg font-bold">{props.title}</h2>
            <TbPencil className="w-6 h-6 text-gray-300" />
          </div>
          <div className={`grid ${props.secondCol ? "grid-cols-2" : "grid-cols-1"} pt-6`}>
            <div>
              {props.firstCol.map((item: any, i: number) => (
                <div key={i}>
                  <div className="grid grid-cols-2 mt-4">
                    <p>{item.label}</p>
                    <p className="font-bold">{item.info}</p>
                  </div>
                </div>
              ))}
            </div>
            <div>
              {props.secondCol ? (
                props.secondCol.map((item: any, i: number) => (
                  <div key={i}>
                    <div className="grid grid-cols-2 mt-4">
                      <p>{item.label}</p>
                      <p className="font-bold">{item.info}</p>
                    </div>
                  </div>
                ))
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </Card>
    </Flowbite>
  );
}
export default DetailsCard;
