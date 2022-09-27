import type { NavigationContainerRef } from '@react-navigation/native';
import type { NavigationState } from '@react-navigation/routers';
import type { Ref } from 'react';
import { useCallback, useMemo, useRef } from 'react';
import RNUxcam from 'react-native-ux-cam';
import { TRootStackParamList } from './model/TRootStackParamList';

interface IUseScreenTracking {
    navigationRef: Ref<NavigationContainerRef<TRootStackParamList>>;
    onReady: () => void;
    onStateChange: (state: NavigationState | undefined) => void;
}

export const useScreenTracking = (): IUseScreenTracking => {
    const navigationRef = useRef<NavigationContainerRef<TRootStackParamList>>(null);
    const routeNameRef = useRef<string>();

    const onReady = useCallback<() => void>(() => {
        routeNameRef.current = navigationRef.current?.getCurrentRoute()?.name;
    }, []);
    const onStateChange = useCallback<(state: NavigationState | undefined) => void>(() => {
        const previousRouteName = routeNameRef.current;
        const currentRouteName = navigationRef.current?.getCurrentRoute()?.name;

        if (previousRouteName !== currentRouteName) {
            if (currentRouteName) {
                RNUxcam.tagScreenName(currentRouteName);
            }
            routeNameRef.current = currentRouteName;
        }
    }, []);

    return useMemo<IUseScreenTracking>(() => ({ navigationRef, onReady, onStateChange }), [onReady, onStateChange]);
};
