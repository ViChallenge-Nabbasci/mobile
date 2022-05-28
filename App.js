import 'react-native-gesture-handler';
import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { AppNavigator } from "./components/router"
import { EvaIconsPack } from '@ui-kitten/eva-icons';

export default () => (
    <>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider {...eva} theme={eva.light}>
            <AppNavigator />
        </ApplicationProvider>
    </>
);
