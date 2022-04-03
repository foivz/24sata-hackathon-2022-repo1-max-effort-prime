import React from 'react';
import { createModalStack, ModalOptions, ModalStackConfig } from 'react-native-modalfy';

import ChangeBudgetModal from '../features/dashboard/modals/ChangeBudget';
import ChangeQuantityModal from '../features/shopping-list/modals/ChangeQuantity';
import ChangeQuantityPriceModal from '../features/expenses/modals/ChangeQuantityPrice';
import { BottomSheetModal } from '@gorhom/bottom-sheet';

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
  ChangeQuantityModal: {
    sheetRef?: React.MutableRefObject<BottomSheetModal | null>;
    item: string;
  };
  ChangeBudgetModal: {};
  ChangeQuantityPriceModal: {
    _id: string;
    price: number;
    quantity: number;
    name: string;
    imageUrl: string;
    sheetRef?: React.MutableRefObject<BottomSheetModal | null>;
  };
}

export const modalStack = createModalStack(modalConfig, defaultOptions);
