import { useState } from "react";

interface IToast {
  visible: boolean;
  message: string;
  type: "info" | "danger";
}

function useToast() {
  const [toast, setToast] = useState<IToast>({
    visible: false,
    type: "info",
    message: "",
  });

  const onDismiss = () =>
    setToast((prev) => ({
      ...prev,
      message: "",
      type: "info",
      visible: false,
    }));

  return { toast, setToast, onDismiss };
}

export default useToast;
