import React, { useMemo } from 'react';
import { BottomSheetBackdrop, BottomSheetModal } from '@gorhom/bottom-sheet';
import SheetContent from './SheetContent';

interface AddProductSheetProps {
  sheetRef: React.MutableRefObject<BottomSheetModal | null>;
  onSelected: (product: any) => void;
}

const AddProductSheet: React.FunctionComponent<AddProductSheetProps> = ({ sheetRef, onSelected }) => {
  const snapPoints = useMemo(() => ['83%'], []);

  return (
    <BottomSheetModal
      ref={sheetRef}
      index={0}
      snapPoints={snapPoints}
      enablePanDownToClose
      handleComponent={() => null}
      backdropComponent={(props) => <BottomSheetBackdrop disappearsOnIndex={-1} appearsOnIndex={0} {...props} />}>
      <SheetContent onSelected={onSelected} />
    </BottomSheetModal>
  );
};

export default AddProductSheet;
