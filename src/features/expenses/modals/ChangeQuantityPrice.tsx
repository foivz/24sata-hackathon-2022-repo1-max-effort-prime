import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import { ModalComponentProp } from 'react-native-modalfy';

import { Button, ModalContainer, QuantityPicker, Space } from '../../../common/components';
import colors from '../../../constants/colors';
import { fontSize } from '../../../constants/typography';
import { ModalStackParams } from '../../../misc/initModalfy';

type ChangeQuantityPriceProps = ModalComponentProp<ModalStackParams, void, 'ChangeQuantityPriceModal'>;

const ChangeQuantityPrice: React.FunctionComponent<ChangeQuantityPriceProps> = ({ modal: { closeModal, getParam } }) => {
  const [quantity, setQuantity] = useState<number>(1);

  const handleSave = async () => {
    closeModal();
  };

  return (
    <ModalContainer>
      <Text style={{ alignSelf: 'center', fontWeight: 'bold', marginBottom: 20, fontSize: fontSize.medium }}>Cijena</Text>
      <View
        style={{
          backgroundColor: colors.whiteSmoke,
          paddingHorizontal: 20,
          paddingVertical: 15,
          borderRadius: 12,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 24,
        }}>
        <TextInput value="80" style={{ marginRight: 10 }} keyboardType="numeric" />
        <Text style={{ color: colors.darkSouls, fontSize: fontSize.small }}>HRK</Text>
      </View>
      <Text style={{ alignSelf: 'center', fontWeight: 'bold', marginBottom: 20, fontSize: fontSize.medium }}>Količina</Text>
      <QuantityPicker quantity={quantity} setQuantity={setQuantity} />
      <Space height={20} />
      <Button title="Dodaj" variant="primary" onPress={handleSave} />
    </ModalContainer>
  );
};

export default ChangeQuantityPrice;
