import { IProduct } from "@/types";
import { create } from "zustand";

interface IPreviewModalStore {
  isOpen: boolean;
  data?: IProduct;
  onOpen: (data: IProduct) => void;
  onClose: () => void;
}

const usePreviewModal = create<IPreviewModalStore>((set) => ({
  isOpen: false,
  data: undefined,
  onOpen: (data: IProduct) => set({ data: data, isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default usePreviewModal;
