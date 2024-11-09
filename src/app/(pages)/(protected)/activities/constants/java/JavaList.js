import JavaArrayList from "src/app/(pages)/(protected)/activities/constants/java/JavaArrayList";
import JavaConditionals from "src/app/(pages)/(protected)/activities/constants/java/JavaConditionals";
import JavaDataTypes from "src/app/(pages)/(protected)/activities/constants/java/JavaDataTypes";
import JavaInheritance from "src/app/(pages)/(protected)/activities/constants/java/JavaInheritance";
import JavaLoops from "src/app/(pages)/(protected)/activities/constants/java/JavaLoops";
import JavaOperators from "src/app/(pages)/(protected)/activities/constants/java/JavaOperators";
import JavaPolymorphism from "src/app/(pages)/(protected)/activities/constants/java/JavaPolymorphism";
import JavaStrings from "src/app/(pages)/(protected)/activities/constants/java/JavaStrings";
import JavaIcon from "src/app/assets/images/modules/activities/JavaIcon.png";

const JavaList = {
  id: "java",
  title: "Java",
  list: [
    { ...JavaDataTypes },
    { ...JavaOperators },
    { ...JavaStrings },
    { ...JavaConditionals },
    { ...JavaInheritance },
    { ...JavaArrayList },
    { ...JavaLoops },
    { ...JavaPolymorphism },
  ],
  icon: JavaIcon,
  links: [
    {
      title: "Java Dev",
      url: "https://dev.java/learn/getting-started/",
    },
    {
      title: "Java Beginner's guide",
      url: "https://github.com/free-educa/books/blob/main/books/Java%20-%20A%20Beginner's%20Guide%2C%20Sixth%20Edition%20-%20Autor%20(Herbert%20Schildt).pdf",
    },
  ],
};

export default JavaList;
