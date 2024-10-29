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
        content: "dark shadow-sm",
      }}
    >
      <DropdownTrigger>
        <UserAvatar
          isBordered
          as="button"
          className="transition-transform w-[64px] h-[64px]"
        />
      </DropdownTrigger>
      <DropdownMenu aria-label="Ações do perfil" variant="flat">
        <DropdownSection showDivider>
          <DropdownItem
            key="user"
            className="h-14 gap-2 cursor-default"
            isReadOnly
          >
            <div className="flex flex-col">
              <span className="font-semibold">Bem-vindo</span>
              <span className="font-semibold">{user.email}</span>
            </div>
          </DropdownItem>
          <DropdownItem key="profile">Meu perfil</DropdownItem>D
          <DropdownItem
            key="about"
            href="https://enzomosman.com"
            target="_blank"
          >
            Sobre
          </DropdownItem>
          D
        </DropdownSection>
        <DropdownSection>
          <DropdownItem
            key="log-out"
            className="text-danger"
            color="danger"
            startContent={<Icon icon={FaDoorOpen} color="white" size="15" />}
            href="/sign-out"
          >
            Sair
          </DropdownItem>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
}
