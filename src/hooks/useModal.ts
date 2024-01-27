import { useAtom } from "jotai";
import { modalContext } from "../context";
import { useCallback } from "react";

export interface ModalState {
  component: React.ReactNode;
  visible?: boolean;
  manualClose?: boolean;
  onClose?: () => void;
}

export const useModal = () => {
  const [modal, setModal] = useAtom(modalContext);

  const openModal = useCallback(
    ({ component }: ModalState) => {
      setModal({ component, visible: true });
    },
    [setModal]
  );

  const closeModal = useCallback(() => {
    setModal({ component: null, visible: false });
  }, [setModal]);

  return { openModal, closeModal, visible: !!modal.visible };
};
