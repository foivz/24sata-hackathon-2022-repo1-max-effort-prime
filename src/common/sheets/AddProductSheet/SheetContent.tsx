import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import { PlusIcon, SearchIcon } from '../../assets/icons';

import { ActionButton, Divider, TextField } from '../../components';
import colors from '../../../constants/colors';
import { fontSize } from '../../../constants/typography';
import useSearchProduct from '../../hooks/useSearchProduct';

interface SheetContentProps {
  onSelected: (product: any) => void;
}

const SheetContent: React.FunctionComponent<SheetContentProps> = ({ onSelected }) => {
  const [query, setQuery] = useState<string | null>('null');

  const handleCreateNewProduct = () => {};

  const { data } = useSearchProduct(query);

  return (
    <View style={{ paddingHorizontal: 20, marginTop: 20, flex: 1 }}>
      <TextField icon={SearchIcon} value={query} onChangeText={setQuery} placeholder="Pretraži proizvode" />

      <FlatList
        keyExtractor={(item) => item._id}
        data={data}
        contentContainerStyle={{ paddingTop: 30 }}
        ListHeaderComponent={() => (
          <View>
            {query ? (
              <>
                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <ActionButton
                    icon={PlusIcon}
                    color={colors.green}
                    iconSize={35}
                    onPress={handleCreateNewProduct}
                    style={{ borderRadius: 30, marginRight: 20, width: 48, height: 48 }}
                  />
                  <Text style={{ color: colors.gray, fontSize: fontSize.smallToNormal }}>Kreiraj proizvod "{query}"</Text>
                </TouchableOpacity>
                <Divider />
              </>
            ) : null}
          </View>
        )}
        renderItem={({ item }) => (
          <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => onSelected(item)}>
            <Image source={{ uri: item.imageUrl }} style={{ width: 50, height: 50, marginRight: 18 }} />
            <Text style={{ fontSize: fontSize.smallToNormal }}>{item.name}</Text>
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={() => <Divider />}
      />
    </View>
  );
};

export default SheetContent;
