import KotlinConditionals from "src/app/(pages)/(protected)/activities/constants/kotlin/KotlinConditionals";
import KotlinDataClasses from "src/app/(pages)/(protected)/activities/constants/kotlin/KotlinDataClasses";
import KotlinDataTypes from "src/app/(pages)/(protected)/activities/constants/kotlin/KotlinDataTypes";
import KotlinFunctions from "src/app/(pages)/(protected)/activities/constants/kotlin/KotlinFunctions";
import KotlinLoops from "src/app/(pages)/(protected)/activities/constants/kotlin/KotlinLoops";
import KotlinNullSafety from "src/app/(pages)/(protected)/activities/constants/kotlin/KotlinNullSafety";
import KotlinVariables from "src/app/(pages)/(protected)/activities/constants/kotlin/KotlinVariables";
import KotlinIcon from "src/app/assets/images/modules/activities/KotlinIcon.png";

const KotlinList = {
  id: "kotlin",
  title: "Kotlin",
  list: [
    { ...KotlinVariables },
    { ...KotlinDataTypes },
    { ...KotlinConditionals },
    { ...KotlinLoops },
    { ...KotlinFunctions },
    { ...KotlinNullSafety },
    { ...KotlinDataClasses },
  ],
  icon: KotlinIcon,
  links: [
    {
      title: "Kotlin",
      url: "https://kotlinlang.org/docs/home.html",
    },
  ],
};

export default KotlinList;
