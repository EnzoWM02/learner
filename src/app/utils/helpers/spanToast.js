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

  toast[type](<Msg />, options);
};
