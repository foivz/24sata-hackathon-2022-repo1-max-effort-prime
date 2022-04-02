import React, { useState } from 'react';
import { Text } from 'react-native';
import { ModalComponentProp } from 'react-native-modalfy';

import { Button, ModalContainer, QuantityPicker, Space } from '../../../common/components';
import { fontSize } from '../../../constants/typography';
import { ModalStackParams } from '../../../misc/initModalfy';

type ChangeQuantityProps = ModalComponentProp<ModalStackParams, void, 'ChangeQuantityModal'>;

const ChangeQuantity: React.FunctionComponent<ChangeQuantityProps> = ({ modal: { closeModal, getParam } }) => {
  const [quantity, setQuantity] = useState<number>(1);

  const handleSave = async () => {
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
