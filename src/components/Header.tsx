import { View, Text, Image } from 'react-native'

export function Header() {
    return (
        <View className="flex-row pt-8 pb-4 items-center w-full justify-center">
            <Text className="text-textPrimary-100 text-2xl">
                Apert
            </Text>
            <Text className="text-textSecondary-100 text-2xl">
                Play
            </Text>
        </View>
    )
}