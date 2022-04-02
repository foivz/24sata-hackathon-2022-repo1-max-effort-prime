import { createModalStack, ModalOptions, ModalStackConfig } from 'react-native-modalfy';

import ChangeBudgetModal from '../features/dashboard/modals/ChangeBudget';
import ChangeQuantityModal from '../features/shopping-list/modals/ChangeQuantity';

const modalConfig: ModalStackConfig = {
  ChangeBudgetModal,
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
  ChangeBudgetModal: {};
}

export const modalStack = createModalStack(modalConfig, defaultOptions);
