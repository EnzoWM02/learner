"use client";

import {
  FaHouse,
  FaBookBookmark,
  FaBagShopping,
  FaUserGroup,
  FaDollarSign,
} from "react-icons/fa6";
import Icon from "src/app/components/ui/Icon";
import AvatarButton from "src/app/components/ui/navbar/AvatarButton";
import NavbarIcon from "src/app/components/ui/navbar/NavbarIcon";
import { useUserStore } from "src/stores/userStore";

export default function Navbar() {
  const user = useUserStore((state) => state.user);

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
    <div className="fixed top-0 left-0 w-[120px] h-screen bg-primary-800">
      <div className="flex flex-col h-screen py-5">
        <div className="flex flex-col gap-8">
          {navbarRoutes.map((route, index) => (
            <NavbarIcon key={index} {...route} />
          ))}
        </div>
        <div className="mt-auto flex flex-col items-center justify-center">
          <div className="w-[64px] h-[64px] mb-2">
            <AvatarButton />
          </div>
          <div className="flex flex-col mb-2">
            <span>{user.name}</span>
            <span>Nível {user.level}</span>
          </div>
          <span className="flex justify-center items-center">
            <Icon icon={FaDollarSign} color="white" size="14px" />
            <span className="leading-[1px]">{user.coins}</span>
          </span>
        </div>
      </div>
    </div>
  );
}
