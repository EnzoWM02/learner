"use client";

import { use, useState } from "react";
import TitleList from "src/app/(pages)/(protected)/store/constants/titles";
import Container from "src/app/components/ui/Container";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import TitleItem from "src/app/components/modules/store/TitleItem";
import handleClientAction from "src/app/utils/helpers/handleClientAction";
import { buyStoreItemAction } from "src/app/api/actions/Store/buyStoreItemAction";
import { useUserStore } from "src/stores/userStore";
import { useRouter } from "next/navigation";
import { equipItemAction } from "src/app/api/actions/Store/equipItemAction";

export default function StorePage({ getUserInventoryItemsPromise }) {
  const router = useRouter();
  const {
    isOpen: buyModalIsOpen,
    onOpen: buyModalOnOpen,
    onOpenChange: buyModalOnOpenChange,
  } = useDisclosure();

  const {
    isOpen: equipModalIsOpen,
    onOpen: equipModalOnOpen,
    onOpenChange: equipModalOnOpenChange,
  } = useDisclosure();

  const [selectedTitle, setSelectedTitle] = useState(null);
  const [equipingTitle, setEquipingTitle] = useState(null);

  const userInventoryItems = use(getUserInventoryItemsPromise);
  const updateUser = useUserStore((state) => state.updateUser);

  const inventoryTitles = TitleList.filter((title) => {
    return userInventoryItems.find((item) => item.item_id === title.id);
  });

  const filteredStoreTitles = TitleList.filter((title) => {
    return !userInventoryItems.find((item) => item.item_id === title.id);
  });

  const onClickTitleBuy = (title) => {
    setSelectedTitle(title);
    buyModalOnOpen();
  };

  const onItemBuy = async (onClose) => {
    const res = await handleClientAction(
      buyStoreItemAction({
        item_id: selectedTitle.id,
        item_type: "title",
        price: selectedTitle.price,
      }),
      "Realizando compra"
    );

    if (!res?.error) {
      onClose();
      router.refresh();
    }
  };

  const onTitleEquip = async (onClose) => {
    const res = await handleClientAction(
      equipItemAction({
        item_id: equipingTitle.id,
        item_type: "title",
      }),
      "Equipando item"
    );

    if (!res?.error) {
      onClose();
      await updateUser();
      router.refresh();
    }
  };

  const onClickTitleEquip = (title) => {
    setEquipingTitle(title);
    equipModalOnOpen();
  };

  return (
    <div className="flex flex-col sm:grid sm:grid-cols-2 gap-5 sm:gap-10">
      <Container
        className={"flex flex-col gap-5 sm:max-h-[75vh] h-fit overflow-y-auto"}
      >
        <span className="text-lg text-center text-white font-bold">
          Inventário
        </span>
        <hr className="w-full h-1" />
        {userInventoryItems.length === 0 ? (
          <span>Nenhum item no inventário</span>
        ) : (
          <div className="flex flex-col gap-3">
            {inventoryTitles.map((title, index) => (
              <div
                className="flex justify-between border-white hover:border-gray-600 transition-all cursor-pointer border-solid border-1 bprder rounded-xl p-2"
                key={index}
                onClick={() => onClickTitleEquip(title)}
              >
                <TitleItem title={title} />
              </div>
            ))}
          </div>
        )}
      </Container>
      <Container
        className={"flex flex-col gap-5 sm:max-h-[75vh] h-fit overflow-y-auto"}
      >
        <span className="text-lg text-center text-white font-bold">Loja</span>
        <hr className="w-full h-1" />
        <div className="flex flex-col gap-3">
          {filteredStoreTitles.map((title, index) => (
            <div
              className="flex justify-between border-white hover:border-gray-600 transition-all cursor-pointer border-solid border-1 bprder rounded-xl p-2"
              key={index}
              onClick={() => onClickTitleBuy(title)}
            >
              <TitleItem title={title} />
              <span className="text-lg">${title.price}</span>
            </div>
          ))}
        </div>
      </Container>

      <Modal
        className="learner-theme-protected text-white"
        isOpen={buyModalIsOpen}
        onOpenChange={buyModalOnOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Comprar</ModalHeader>
              <ModalBody>
                <span>
                  Deseja comprar o título: <TitleItem title={selectedTitle} />?
                </span>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onClick={onClose}>
                  Fechar
                </Button>
                <Button color="primary" onClick={() => onItemBuy(onClose)}>
                  Comprar ${selectedTitle.price}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

      <Modal
        className="learner-theme-protected text-white"
        isOpen={equipModalIsOpen}
        onOpenChange={equipModalOnOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Equipar título
              </ModalHeader>
              <ModalBody>
                <span>
                  Deseja equipar o título: <TitleItem title={equipingTitle} />?
                </span>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onClick={onClose}>
                  Fechar
                </Button>
                <Button color="primary" onClick={() => onTitleEquip(onClose)}>
                  Equipar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
