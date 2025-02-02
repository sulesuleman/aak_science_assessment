import { useState } from "react";

interface IToast {
  visible: boolean;
  message: string;
}

function useToast() {
  const [toast, setToast] = useState<IToast>({
    visible: false,
    message: "",
  });

  const onDismiss = () =>
    setToast((prev) => ({ ...prev, message: "", visible: false }));

  return { toast, setToast, onDismiss };
}

export default useToast;
