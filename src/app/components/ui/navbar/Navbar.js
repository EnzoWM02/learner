import { Suspense } from "react";
import {
  FaHouse,
  FaBookBookmark,
  FaBagShopping,
  FaUserGroup,
} from "react-icons/fa6";
import { Loading } from "src/app/components/ui/Loading";
import NavbarIcon from "src/app/components/ui/navbar/NavbarIcon";
import UserAvatar from "src/app/components/ui/UserAvatar";

export default function Navbar() {
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
      <div className="flex flex-col gap-8 pt-5">
        {navbarRoutes.map((route, index) => (
          <NavbarIcon key={index} {...route} />
        ))}
      </div>
      <div className="mt-auto">
        <Suspense fallback={<Loading />}>
          <UserAvatar />
        </Suspense>
      </div>
    </div>
  );
}
