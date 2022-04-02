import React, { useMemo } from 'react';
import { BottomSheetBackdrop, BottomSheetModal } from '@gorhom/bottom-sheet';

import SheetContent from './SheetContent';

interface NewGroupSheetProps {
  sheetRef: React.MutableRefObject<BottomSheetModal | null>;
}

const NewGroupSheet: React.FunctionComponent<NewGroupSheetProps> = ({ sheetRef }) => {
  const snapPoints = useMemo(() => ['83%'], []);

  return (
    <BottomSheetModal
      ref={sheetRef}
      index={0}
      snapPoints={snapPoints}
      enablePanDownToClose
      handleComponent={() => null}
      backdropComponent={(props) => <BottomSheetBackdrop disappearsOnIndex={-1} appearsOnIndex={0} {...props} />}
      style={{ paddingTop: 30 }}>
      <SheetContent />
    </BottomSheetModal>
  );
};

export default NewGroupSheet;
