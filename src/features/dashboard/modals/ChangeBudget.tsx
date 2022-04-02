import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { ModalComponentProp } from 'react-native-modalfy';

import { Button, ModalContainer, QuantityPicker, Space } from '../../../common/components';
import colors from '../../../constants/colors';
import { fontSize } from '../../../constants/typography';
import { ModalStackParams } from '../../../misc/initModalfy';

type ChangeBudgetProps = ModalComponentProp<ModalStackParams, void, 'ChangeBudgetModal'>;

const ChangeBudget: React.FunctionComponent<ChangeBudgetProps> = ({ modal: { closeModal, getParam } }) => {
  const handleSave = async () => {
    closeModal();
  };

  return (
    <ModalContainer>
      <Text style={{ fontWeight: 'bold', marginBottom: 20, fontSize: fontSize.medium }}>Mjesečni budžet</Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: colors.whiteSmoke,
          paddingVertical: 10,
          borderRadius: 10,
        }}>
        <TextInput value="boss" textAlign="center" />
        <Text style={{ position: 'absolute', right: 10, color: colors.darkSouls }}>HRK</Text>
      </View>

      <Space height={20} />
      <Button title="Promijeni" variant="primary" onPress={handleSave} />
    </ModalContainer>
  );
};

export default ChangeBudget;
