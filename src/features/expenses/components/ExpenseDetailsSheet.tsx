import React, { useMemo } from 'react';
import { View, Text } from 'react-native';
import { BottomSheetBackdrop, BottomSheetModal } from '@gorhom/bottom-sheet';
import SheetContent from './SheetContent';

interface ExpenseDetailsSheetProps {
  sheetRef: React.MutableRefObject<BottomSheetModal | null>;
  selected: any;
}

const ExpenseDetailsSheet: React.FunctionComponent<ExpenseDetailsSheetProps> = ({ sheetRef, selected }) => {
  const snapPoints = useMemo(() => ['83%'], []);

  return (
    <BottomSheetModal
      ref={sheetRef}
      index={0}
      snapPoints={snapPoints}
      enablePanDownToClose
      handleComponent={() => null}
      backdropComponent={(props) => <BottomSheetBackdrop disappearsOnIndex={-1} appearsOnIndex={0} {...props} />}>
      <SheetContent selected={selected} />
    </BottomSheetModal>
  );
};

export default ExpenseDetailsSheet;
