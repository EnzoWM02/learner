import TitleList from "src/app/(pages)/(protected)/store/constants/titles";

export default function findTitleService(title) {
  if (!title) {
    return null;
  }
  
  return TitleList.find((listItem) => listItem.id === title.item_id);
}
