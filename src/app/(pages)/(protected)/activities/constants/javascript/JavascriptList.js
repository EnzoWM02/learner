import JavascriptAbout from "src/app/(pages)/(protected)/activities/constants/javascript/JavascriptAbout";
import JavascriptArrays from "src/app/(pages)/(protected)/activities/constants/javascript/JavascriptArrays";
import JavascriptConditionals from "src/app/(pages)/(protected)/activities/constants/javascript/JavascriptConditionals";
import JavascriptFunctions from "src/app/(pages)/(protected)/activities/constants/javascript/JavascriptFunctions";
import JavascriptScopes from "src/app/(pages)/(protected)/activities/constants/javascript/JavascriptScopes";
import JavascriptVariables from "src/app/(pages)/(protected)/activities/constants/javascript/JavascriptVariables";
import JsIcon from "src/app/assets/images/modules/activities/JsIcon.png";

const JavascriptList = {
  id: "js",
  title: "Javascript",
  list: [
    { ...JavascriptAbout },
    { ...JavascriptVariables },
    { ...JavascriptConditionals },
    { ...JavascriptFunctions },
    { ...JavascriptArrays },
    { ...JavascriptScopes },
  ],
  icon: JsIcon,
  links: [
    {
      title: "MDN",
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
  ],
};

export default JavascriptList;
