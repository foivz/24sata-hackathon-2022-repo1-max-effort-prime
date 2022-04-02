import { StyleSheet } from 'react-native';
import { ActionSheetOptions, useActionSheet as useActionSheetExpo } from '@expo/react-native-action-sheet';

type CustomActionSheetOptions = Omit<ActionSheetOptions, 'options'>;

const useActionSheet = <T extends unknown>(
  options: string[],
  callback: (i?: number, prop?: T) => void | Promise<void>,
  additionalOptions?: CustomActionSheetOptions,
) => {
  const { showActionSheetWithOptions } = useActionSheetExpo();

  const commonOptions = {
    cancelButtonIndex: 0,
    showSeparators: true,
  };

  return (prop?: T) =>
    showActionSheetWithOptions(
      {
        ...commonOptions,
        options: ['Odustani', ...options],
        ...additionalOptions,
      },
      (i) => callback(i, prop),
    );
};

export default useActionSheet;
