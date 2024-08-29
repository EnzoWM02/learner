import { toast } from "react-toastify";

export const spanToast = (type = "info", message, options) => {
  const Msg = ({ closeToast }) => (
    <div onClick={closeToast}>
      <span
        style={{ whiteSpace: "pre-wrap" }}
        dangerouslySetInnerHTML={{ __html: message }}
      />
    </div>
  );

  console.log("hehehe");

  toast[type](<Msg />, options);
};
