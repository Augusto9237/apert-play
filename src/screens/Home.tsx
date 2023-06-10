import { FlatList, Image, Text, View } from "react-native";

export function Home() {
    return (
        <View className="flex-1 px-6 bg-background-500">
            <View className="flex-row w-full mt-10">
                <Text className="text-textPrimary-100 text-2xl">
                    Apert
                </Text>
                <Text className="text-textSecondary-100 text-2xl">
                    Play
                </Text>
            </View>
            <View className="w-full h-48 overflow-hidden rounded-xl mt-7">
                <Image className="w-full h-full" source={require('../assets/movies/Hindi.png')} />
            </View>
        </View>
    )
}