import React, { useState } from 'react';
import { Text } from 'react-native';
import { ModalComponentProp } from 'react-native-modalfy';
import { useMutation, useQueryClient } from 'react-query';

import { Button, ModalContainer, QuantityPicker, Space } from '../../../common/components';
import useUser from '../../../common/hooks/useUser';
import { fontSize } from '../../../constants/typography';
import { ModalStackParams } from '../../../misc/initModalfy';
import { updateShoppingList } from '../api/shopping-list';

type ChangeQuantityProps = ModalComponentProp<ModalStackParams, void, 'ChangeQuantityModal'>;

const ChangeQuantity: React.FunctionComponent<ChangeQuantityProps> = ({ modal: { closeModal, getParam } }) => {
  const [quantity, setQuantity] = useState<number>(1);
  const addToShoppingListMutation = useMutation(updateShoppingList);
  const queryClient = useQueryClient();
  const user = useUser();

  const sheetRef = getParam('sheetRef');
  const item = getParam('item');

  console.log('itemerino', item);

  const handleSave = async () => {
    await addToShoppingListMutation.mutateAsync({
      items: [{ item, quantity }],
      userId: user?._id,
    });

    queryClient.invalidateQueries('shoppingList');

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
      <Button title="Dodaj" variant="primary" onPress={handleSave} loading={addToShoppingListMutation.isLoading} />
    </ModalContainer>
  );
};

export default ChangeQuantity;
