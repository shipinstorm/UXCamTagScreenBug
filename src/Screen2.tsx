import React, { FC } from 'react';
import { Button, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native';
import { Colors, Header } from 'react-native/Libraries/NewAppScreen';
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
                    <Section title="Screen2.tsx">
                        You are currently on <Text style={styles.highlight}>Screen2.tsx</Text>.
                    </Section>
                    <Button title="Go to Screen1" onPress={() => navigation.push('Screen1')} />
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
