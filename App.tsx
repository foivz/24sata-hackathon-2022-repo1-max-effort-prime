import 'react-native-gesture-handler';
import React from 'react';
import { LogBox, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { ActionSheetProvider } from '@expo/react-native-action-sheet';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { ModalProvider } from 'react-native-modalfy';

import useCachedResources from './src/hooks/useCachedResources';
import Navigation from './src/navigation/Navigation';

import store from './src/common/store';
import { queryClient } from './src/misc/queryClient';
import { modalStack } from './src/misc/initModalfy';

LogBox.ignoreLogs(['VirtualizedLists should never be nested']);

const App = () => {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Provider store={store}>
        <ActionSheetProvider>
          <GestureHandlerRootView style={styles.flex}>
            <QueryClientProvider client={queryClient}>
              <ModalProvider stack={modalStack}>
                <BottomSheetModalProvider>
                  <SafeAreaProvider>
                    <Navigation />
                    <StatusBar />
                  </SafeAreaProvider>
                </BottomSheetModalProvider>
              </ModalProvider>
            </QueryClientProvider>
          </GestureHandlerRootView>
        </ActionSheetProvider>
      </Provider>
    );
  }
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
});

export default App;
