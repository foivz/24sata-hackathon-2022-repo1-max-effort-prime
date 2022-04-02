import { createModalStack, ModalOptions, ModalStackConfig } from 'react-native-modalfy';

import ChangeQuantityModal from '../features/shopping-list/modals/ChangeQuantity';

const modalConfig: ModalStackConfig = {
  ChangeQuantityModal,
};
const defaultOptions: ModalOptions = {
  animateInConfig: {
    duration: 50,
  },
  animateOutConfig: {
    duration: 50,
  },
};

export interface ModalStackParams {
  ChangeQuantityModal: {};
}

export const modalStack = createModalStack(modalConfig, defaultOptions);
