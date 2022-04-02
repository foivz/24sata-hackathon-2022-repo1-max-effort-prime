import React, { useMemo } from 'react';
import { View } from 'react-native';
import { BottomSheetBackdrop, BottomSheetModal } from '@gorhom/bottom-sheet';

import SplitExpensesNavigator from './SplitExpensesNavigator';

interface SplitExpensesSheetProps {
  sheetRef: React.MutableRefObject<BottomSheetModal | null>;
}

const SplitExpensesSheet: React.FunctionComponent<SplitExpensesSheetProps> = ({ sheetRef }) => {
  const snapPoints = useMemo(() => ['83%'], []);

  return (
    <BottomSheetModal
      ref={sheetRef}
      index={0}
      snapPoints={snapPoints}
      enablePanDownToClose
      handleComponent={() => null}
      backdropComponent={(props) => <BottomSheetBackdrop disappearsOnIndex={-1} appearsOnIndex={0} {...props} />}>
      <View style={{ flex: 1, paddingHorizontal: 20, marginTop: 32 }}>
        <SplitExpensesNavigator />
      </View>
    </BottomSheetModal>
  );
};

export default SplitExpensesSheet;
