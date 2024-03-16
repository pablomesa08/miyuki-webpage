import React from "react";
import {
  DropdownItem,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  Avatar,
} from "@nextui-org/react";

export default function AvatarProfile() {
  return (
    <Dropdown placement="bottom-end">
      <DropdownTrigger>
        <Avatar
          isBordered
          as="button"
          className="transition-transform"
          color="secondary"
          name="Jason Hughes"
          size="sm"
          src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
        />
      </DropdownTrigger>
      <DropdownMenu aria-label="Profile Actions" variant="flat">
        <DropdownItem key="profile" className="h-14 gap-2">
          <p className="font-semibold">Logeado como</p>
          <p className="font-semibold">example@example.com</p>
        </DropdownItem>
        <DropdownItem key="settings">Ajustes</DropdownItem>
        <DropdownItem key="configurations">Configurations</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
