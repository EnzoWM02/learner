import ActivitiesType from "src/app/(pages)/(protected)/activities/constants/ActivitiesType";

const JavascriptScopes = {
  id: "js-scopes",
  coins: 25,
  experience: 200,
  title: "Escopos",
  new: true,
  description:
    "O escopo em JavaScript define a visibilidade e a acessibilidade das variáveis. Os principais tipos de escopo são o escopo global, de função e de bloco.",
  type: ActivitiesType.singleChoice,
  questions: {
    title:
      "Qual é o escopo de uma variável declarada com `let` dentro de um bloco `{}`?",
    options: [
      { title: "Escopo de bloco", correct: true },
      { title: "Escopo global", correct: false },
      { title: "Escopo de função", correct: false },
      { title: "Escopo lexical", correct: false },
    ],
  },
};

export default JavascriptScopes;
