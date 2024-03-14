import { TbChevronLeft } from "react-icons/tb";

export function PageTitle() {
  return (
      <div className="flex items-center gap-x-2 mr-4 pt-10">
        <TbChevronLeft />
        <h2 className="text-xl font-bold">تفاصيل الموظف</h2>
      </div>
   );
}
