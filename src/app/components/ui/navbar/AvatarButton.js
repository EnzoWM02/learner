"use client";

import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
} from "@nextui-org/react";
import { FaDoorOpen } from "react-icons/fa6";
import Icon from "src/app/components/ui/Icon";
import UserAvatar from "src/app/components/ui/UserAvatar";
import { useUserStore } from "src/stores/userStore";

export default function AvatarButton() {
  const user = useUserStore((state) => state.user);

  return (
    <Dropdown
      classNames={{
        content: "bg-primary-900",
      }}
    >
      <DropdownTrigger>
        <UserAvatar isBordered as="button" className="transition-transform" />
      </DropdownTrigger>
      <DropdownMenu aria-label="Ações do perfil" variant="flat">
        <DropdownItem key="user" className="h-14 gap-2">
          <span className="font-semibold">Bem-vindo</span>
          <span className="font-semibold">{user.email}</span>
        </DropdownItem>
        <DropdownItem key="profile">Meu perfil</DropdownItem>
        <DropdownSection>
          <DropdownItem
            key="log-out"
            className="text-danger"
            color="danger"
            startContent={<Icon icon={FaDoorOpen} color="white" />}
          >
            Sair
          </DropdownItem>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
}
