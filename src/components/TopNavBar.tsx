import { Avatar, Dropdown, Navbar, TextInput } from "flowbite-react";
import { TbSearch } from "react-icons/tb";
import  ShortcutIcon from "../assets/img/command.svg";

export function TopNavBar() {
  return (
    <Navbar fluid rounded>
      <div className="flex items-center">
        <TextInput
          id="search"
          type="text"
          icon={ShortcutIcon}
          rightIcon={TbSearch}
          placeholder="ابحث عن اي شي...."
          className="ml-6"
        />
        <Navbar.Collapse>
          <Navbar.Link>وثائق</Navbar.Link>
          <Navbar.Link>أخبار</Navbar.Link>
          <Navbar.Link>قسيمة الدفع</Navbar.Link>
          <Navbar.Link>تقرير</Navbar.Link>
        </Navbar.Collapse>
      </div>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
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
        <Navbar.Toggle />
      </div>
    </Navbar>
  );
}
