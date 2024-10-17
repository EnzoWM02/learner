import JavascriptAbout from "src/app/(pages)/(protected)/activities/constants/javascript/JavascriptAbout";
import JsIcon from "src/app/assets/images/modules/activities/JsIcon.png";

const JavascriptList = {
  id: "js",
  title: "Javascript",
  list: [{ ...JavascriptAbout }],
  icon: JsIcon,
  links: [
    {
      title: "MDN",
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
  ],
};

export default JavascriptList;
