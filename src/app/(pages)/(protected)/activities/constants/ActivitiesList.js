import JavaList from "src/app/(pages)/(protected)/activities/constants/java/JavaList";
import JavascriptList from "src/app/(pages)/(protected)/activities/constants/javascript/JavascriptList";
import KotlinList from "src/app/(pages)/(protected)/activities/constants/kotlin/KotlinList";

const ActivitiesList = [
  { ...JavascriptList },
  { ...JavaList },
  { ...KotlinList },
];

export default ActivitiesList;
