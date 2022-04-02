import React, { useState } from 'react';
import { Text } from 'react-native';
import { ModalComponentProp } from 'react-native-modalfy';
import { useMutation } from 'react-query';

import { Button, ModalContainer, QuantityPicker, Space } from '../../../common/components';
import { fontSize } from '../../../constants/typography';
import { ModalStackParams } from '../../../misc/initModalfy';
import { updateShoppingList } from '../api/shopping-list';

type ChangeQuantityProps = ModalComponentProp<ModalStackParams, void, 'ChangeQuantityModal'>;

const ChangeQuantity: React.FunctionComponent<ChangeQuantityProps> = ({ modal: { closeModal, getParam } }) => {
  const [quantity, setQuantity] = useState<number>(1);
  const addToShoppingListMutation = useMutation(updateShoppingList);

  const sheetRef = getParam('sheetRef');
  const item = getParam('item');

  const handleSave = async () => {
    if (sheetRef) {
      sheetRef.current?.dismiss();
    }
    closeModal();
  };

  return (
    <ModalContainer>
      <Text style={{ alignSelf: 'center', fontWeight: 'bold', marginBottom: 20, fontSize: fontSize.medium }}>Količina</Text>
      <QuantityPicker quantity={quantity} setQuantity={setQuantity} />
      <Space height={20} />
      <Button title="Dodaj" variant="primary" onPress={handleSave} />
    </ModalContainer>
  );
};

export default ChangeQuantity;
