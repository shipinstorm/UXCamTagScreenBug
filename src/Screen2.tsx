import React, { FC } from 'react';
import { Button, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native';
import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { Section } from './components/Section';

export const Screen2: FC<any> = ({ navigation }) => {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    return (
        <SafeAreaView style={backgroundStyle}>
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                backgroundColor={backgroundStyle.backgroundColor}
            />
            <ScrollView contentInsetAdjustmentBehavior="automatic" style={backgroundStyle}>
                <Header />
                <View style={{ backgroundColor: isDarkMode ? Colors.black : Colors.white }}>
                    <Section title="Step One">
                        Edit <Text style={styles.highlight}>Screen2.tsx</Text> to change this screen and then come back
                        to see your edits.
                    </Section>
                    <Button title="Go to Screen1... again" onPress={() => navigation.push('Screen1')} />
                    <Section title="See Your Changes">
                        <ReloadInstructions />
                    </Section>
                    <Section title="Debug">
                        <DebugInstructions />
                    </Section>
                    <Section title="Learn More">Read the docs to discover what to do next:</Section>
                    <LearnMoreLinks />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    highlight: {
        fontWeight: '700',
    },
});
