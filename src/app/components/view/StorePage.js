"use client";

import { use } from "react";
import TitleList from "src/app/(pages)/(protected)/store/constants/titles";
import Container from "src/app/components/ui/Container";

export default function StorePage({ getUserInventoryItemsPromise }) {
  const userInventoryItems = use(getUserInventoryItemsPromise);
  console.log("userInventoryItems", userInventoryItems);
  return (
    <div className="grid grid-cols-2 gap-10">
      <Container
        className={"flex flex-col gap-5 max-h-[75vh] h-fit overflow-y-auto"}
      >
        <span className="text-lg text-center text-white font-bold">
          Inventário
        </span>
        <hr className="w-full h-1" />
        {userInventoryItems.length === 0 ? (
          <span>Nenhum item no inventário</span>
        ) : (
          <div>aaa</div>
        )}
      </Container>
      <Container
        className={"flex flex-col gap-5 max-h-[75vh] h-fit overflow-y-auto"}
      >
        <span className="text-lg text-center text-white font-bold">Loja</span>
        <hr className="w-full h-1" />
        <div className="flex flex-col gap-3">
          {TitleList.map((title, index) => (
            <div
              className="flex justify-between border-white border-solid border-1 bprder rounded-xl p-2"
              key={index}
            >
              <span className="text-lgfont-bold" style={{ color: title.color }}>
                {title.title}
              </span>
              <span className="text-lg">{title.price}</span>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
