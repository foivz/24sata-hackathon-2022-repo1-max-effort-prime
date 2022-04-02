import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';

import useCachedResources from './src/hooks/useCachedResources';
import Navigation from './src/navigation/Navigation';

import store from './src/common/store';
import { queryClient } from './src/misc/queryClient';

const App = () => {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Provider store={store}>
        <GestureHandlerRootView style={styles.flex}>
          <QueryClientProvider client={queryClient}>
            <BottomSheetModalProvider>
              <SafeAreaProvider>
                <Navigation />
                <StatusBar />
              </SafeAreaProvider>
            </BottomSheetModalProvider>
          </QueryClientProvider>
        </GestureHandlerRootView>
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
