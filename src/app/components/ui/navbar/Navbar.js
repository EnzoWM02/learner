"use client";

import {
  FaHouse,
  FaBookBookmark,
  FaBagShopping,
  FaUserGroup,
  FaDollarSign,
} from "react-icons/fa6";
import TitleItem from "src/app/components/modules/store/TitleItem";
import Icon from "src/app/components/ui/Icon";
import AvatarButton from "src/app/components/ui/navbar/AvatarButton";
import NavbarIcon from "src/app/components/ui/navbar/NavbarIcon";
import useBreakpoint from "src/app/hooks/useBreakpoints";
import { useUserStore } from "src/stores/userStore";

export default function Navbar() {
  const user = useUserStore((state) => state.user);
  const { sm } = useBreakpoint();

  const navbarRoutes = [
    {
      icon: FaHouse,
      label: "Dashboard",
      path: "/dashboard",
    },
    {
      icon: FaBookBookmark,
      label: "Atividades",
      path: "/activities",
    },
    {
      icon: FaBagShopping,
      label: "Loja",
      path: "/store",
    },
    {
      icon: FaUserGroup,
      label: "Comunidades",
      path: "/communities",
    },
  ];
  return (
    <div
      className="fixed z-50
     bottom-0 sm:top-[5px] left-0 w-screen sm:w-[120px] h-[80px] sm:h-screen px-5 sm:px-0 bg-primary-900"
    >
      <div className="flex items-center sm:flex-col h-full sm:h-screen sm:py-5">
        <div className="flex sm:flex-col gap-12 sm:gap-8">
          {navbarRoutes.map((route, index) => (
            <NavbarIcon key={index} {...route} />
          ))}
        </div>
        <div className="ml-auto sm:ml-0 sm:mt-auto flex flex-col items-center justify-center">
          <div className="w-[48px] h-[48px] sm:w-[64px] sm:h-[64px] mb-2">
            <AvatarButton />
          </div>
          {sm && (
            <>
              <div className="flex flex-col mb-2 text-center">
                <span>{user.name}</span>
                <TitleItem title={user.title} />
                <span>Nível {user.level}</span>
              </div>
              <span className="flex justify-center items-center">
                <Icon icon={FaDollarSign} color="white" size="14px" />
                <span className="leading-[1px]">{user.coins}</span>
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
