import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { useTheme } from "@react-navigation/native";

export default function FeedbackBox({ text }) {
    const { colors } = useTheme();

    return (
        <ScrollView style={{
            ...styles.box,
            backgroundColor: colors.dialogueBG,
            borderColor: colors.dialogueBorder,
        }}>
            <Text style={{
                color: colors.text,
                fontSize: 18,
                paddingBottom: 30
            }}>
                {text}
            </Text>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    box: {
        minHeight: 70,
        maxHeight: 280,
        width: 315,
        borderRadius: 10,
        borderWidth: 3,
        padding: 10
    }
})