import React, { useMemo } from 'react';
import { BottomSheetBackdrop, BottomSheetModal } from '@gorhom/bottom-sheet';

import SheetContent from './SheetContent';

interface GroupDetailsSheetProps {
  sheetRef: React.MutableRefObject<BottomSheetModal | null>;
}

const GroupDetailsSheet: React.FunctionComponent<GroupDetailsSheetProps> = ({ sheetRef }) => {
  const snapPoints = useMemo(() => ['83%'], []);

  return (
    <BottomSheetModal
      ref={sheetRef}
      index={0}
      snapPoints={snapPoints}
      enablePanDownToClose
      handleComponent={() => null}
      backdropComponent={(props) => <BottomSheetBackdrop disappearsOnIndex={-1} appearsOnIndex={0} {...props} />}
      style={{ paddingHorizontal: 10, paddingTop: 10 }}>
      <SheetContent />
    </BottomSheetModal>
  );
};

export default GroupDetailsSheet;
