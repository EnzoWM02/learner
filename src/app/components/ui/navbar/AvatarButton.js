"use client";

import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
} from "@nextui-org/react";
import { FaDollarSign, FaDoorOpen } from "react-icons/fa6";
import TitleItem from "src/app/components/modules/store/TitleItem";
import Icon from "src/app/components/ui/Icon";
import UserAvatar from "src/app/components/ui/UserAvatar";
import useBreakpoint from "src/app/hooks/useBreakpoints";
import { useUserStore } from "src/stores/userStore";

export default function AvatarButton() {
  const { sm } = useBreakpoint();
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
          className="transition-transform w-[48px] h-[48px] sm:w-[64px] sm:h-[64px]"
        />
      </DropdownTrigger>
      <DropdownMenu aria-label="Ações do perfil" variant="flat">
        <DropdownSection showDivider>
          <DropdownItem
            key="user"
            className="sm:h-14 gap-2 cursor-default"
            isReadOnly
          >
            <div className="flex flex-col">
              <span className="font-semibold">Bem-vindo</span>
              <span className="font-semibold">{user.email}</span>
            </div>
          </DropdownItem>
          <DropdownItem
            key="about"
            href="https://enzomosman.com"
            target="_blank"
          >
            Sobre nós
          </DropdownItem>
        </DropdownSection>
        {!sm && (
          <DropdownSection showDivider>
            <DropdownItem isReadOnly>
              <div className="flex flex-col mb-2">
                <span>{user.name}</span>
                <TitleItem className="text-xs" title={user.title} />
              </div>
              <div className="flex gap-2">
                <span>Nível {user.level}</span>
                <span>-</span>
                <span className="flex items-center">
                  <Icon icon={FaDollarSign} color="white" size="14px" />
                  <span className="leading-[1px]">{user.coins}</span>
                </span>
              </div>
            </DropdownItem>
          </DropdownSection>
        )}
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
