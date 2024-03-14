import { PageTitle } from "../components/EmployeePage/PageTitle";
import { Summary } from "../components/EmployeePage/Summary";
import { Details } from "../components/EmployeePage/Details";

export function EmployeePage() {
  return (
    <div className="bg-[#FAFAFA] w-full h-screen overflow-y-scroll px-6 pb-10">
      <PageTitle />
      <div className="mt-8 flex flex-col md:flex-row gap-x-6">
        <Summary />
        <Details />
      </div>
    </div>
  );
}
