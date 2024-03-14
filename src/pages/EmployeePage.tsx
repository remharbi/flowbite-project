import { PageTitle } from "../components/EmployeePage/PageTitle";
import { Summary } from "../components/EmployeePage/Summary";
import { Details } from "../components/EmployeePage/Details";

export function EmployeePage() {
  return (
    <div className="bg-[#FAFAFA] w-full h-full px-6">
      <PageTitle />
      <div className="mt-8 flex gap-x-6">
        <Summary />
        <Details />
      </div>
      <div></div>
      <div></div>
    </div>
  );
}
