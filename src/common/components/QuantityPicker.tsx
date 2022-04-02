import React from 'react';
import { StyleSheet, View } from 'react-native';

import { MinusIcon, PlusIcon } from '../assets/icons';
import ActionButton from './ActionButton';
import TextField from './TextField';

interface QuantityPickerProps {
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
}

const QuantityPicker: React.FunctionComponent<QuantityPickerProps> = ({ quantity, setQuantity }) => {
  const handleIncrease = () => {
    setQuantity((old) => old + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) setQuantity((old) => old - 1);
  };

  const handleEditQuantity = (value: string) => {
    const parsed = parseInt(value, 10);

    if (isNaN(parsed)) {
      setQuantity(1);
      return;
    }

    setQuantity(parsed);
  };

  return (
    <View style={styles.quantityContainer}>
      <ActionButton icon={MinusIcon} onPress={handleDecrease} />
      <TextField
        style={styles.textField}
        textAlign="center"
        value={quantity.toString()}
        onChangeText={handleEditQuantity}
        keyboardType="numeric"
      />
      <ActionButton icon={PlusIcon} onPress={handleIncrease} />
    </View>
  );
};

const styles = StyleSheet.create({
  quantityContainer: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  textField: {
    marginHorizontal: 10,
    flex: 1,
  },
});

export default QuantityPicker;
