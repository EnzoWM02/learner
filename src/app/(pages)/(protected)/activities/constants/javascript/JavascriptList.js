import JavascriptAbout from "src/app/(pages)/(protected)/activities/constants/javascript/JavascriptAbout";
import JavascriptArrayMethods from "src/app/(pages)/(protected)/activities/constants/javascript/JavascriptArrayMethods";
import JavascriptArrays from "src/app/(pages)/(protected)/activities/constants/javascript/JavascriptArrays";
import JavascriptAsyncAwait from "src/app/(pages)/(protected)/activities/constants/javascript/JavascriptAsyncAwait";
import JavascriptClosures from "src/app/(pages)/(protected)/activities/constants/javascript/JavascriptClosures";
import JavascriptConditionals from "src/app/(pages)/(protected)/activities/constants/javascript/JavascriptConditionals";
import JavascriptDataTypes from "src/app/(pages)/(protected)/activities/constants/javascript/JavascriptDataTypes";
import JavascriptErrorHandling from "src/app/(pages)/(protected)/activities/constants/javascript/JavascriptErrorHandling";
import JavascriptFunctions from "src/app/(pages)/(protected)/activities/constants/javascript/JavascriptFunctions";
import JavascriptScopes from "src/app/(pages)/(protected)/activities/constants/javascript/JavascriptScopes";
import JavascriptVariables from "src/app/(pages)/(protected)/activities/constants/javascript/JavascriptVariables";
import JsIcon from "src/app/assets/images/modules/activities/JsIcon.png";

const JavascriptList = {
  id: "js",
  title: "Javascript",
  list: [
    { ...JavascriptAbout },
    { ...JavascriptDataTypes },
    { ...JavascriptVariables },
    { ...JavascriptConditionals },
    { ...JavascriptFunctions },
    { ...JavascriptArrays },
    { ...JavascriptArrayMethods },
    { ...JavascriptErrorHandling },
    { ...JavascriptAsyncAwait },
    { ...JavascriptScopes },
    { ...JavascriptClosures },
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
