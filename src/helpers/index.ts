import { toast } from "react-toastify";

interface ToastTypes {
  success: (message: string) => void;
}

export const showToast = (type: keyof ToastTypes, message: string) => {
  toast.dismiss();
  toast[type](message);
};





