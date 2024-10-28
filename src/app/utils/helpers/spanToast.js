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

  console.log("res", message);
  toast[type](<Msg />, options);
};
