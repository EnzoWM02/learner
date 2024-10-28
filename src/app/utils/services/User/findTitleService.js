import TitleList from "src/app/(pages)/(protected)/store/constants/titles";

export default function findTitleService(title) {
  return TitleList.find((listItem) => listItem.id === title.item_id);
}
