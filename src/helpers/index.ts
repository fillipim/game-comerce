import {toast, ToastContent} from "react-toastify";

export const showToast = (type: "success" | "error", message: ToastContent) => {
  toast.dismiss()
  toast[type](message)
}