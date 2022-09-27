/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import './UXCamProvider';
import React, { FC } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Screen1 } from './Screen1';
import { Screen2 } from './Screen2';
import { useScreenTracking } from './useScreenTracking';

const Stack = createNativeStackNavigator();

export const App: FC = () => {
    const { navigationRef, onReady, onStateChange } = useScreenTracking();
    return (
        <NavigationContainer ref={navigationRef} onReady={onReady} onStateChange={onStateChange}>
            <Stack.Navigator>
                <Stack.Screen name="Screen1" component={Screen1} />
                <Stack.Screen name="Screen2" component={Screen2} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
