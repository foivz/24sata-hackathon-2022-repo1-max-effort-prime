import { createModalStack, ModalOptions, ModalStackConfig } from 'react-native-modalfy';

import ChangeBudgetModal from '../features/dashboard/modals/ChangeBudget';
import ChangeQuantityModal from '../features/shopping-list/modals/ChangeQuantity';
import ChangeQuantityPriceModal from '../features/expenses/modals/ChangeQuantityPrice';

const modalConfig: ModalStackConfig = {
  ChangeBudgetModal,
  ChangeQuantityModal,
  ChangeQuantityPriceModal,
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
  ChangeQuantityPriceModal: {};
}

export const modalStack = createModalStack(modalConfig, defaultOptions);
