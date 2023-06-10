import { FlatList, Image, Text, View } from "react-native";
import { CardTrendings } from "../components/CardTrendings";


const data = [
    {
        id: '1',
        title: 'Item 1',
        image: require('../assets/movies/English.png'),
    },
    {
        id: '2',
        title: 'Item 2',
        image: require('../assets/movies/dark-knight.png'),
    },
    {
        id: '3',
        title: 'Item 3',
        image: require('../assets/movies/Hindi.png'),
    },
];

export function Home() {
    return (
        <>
            <View className="flex-1 px-6 bg-background-500">
                <View className="flex-row w-full mt-10">
                    <Text className="text-textPrimary-100 text-2xl">
                        Apert
                    </Text>
                    <Text className="text-textSecondary-100 text-2xl">
                        Play
                    </Text>
                </View>
                <View className="w-full h-48 overflow-hidden rounded-xl my-8">
                    <Image className="w-full h-full" source={require('../assets/movies/Hindi.png')} />
                </View>
                <View className="gap-4">
                    <Text className="text-textPrimary-100 text-lg font-semibold">
                        Mais Populares
                    </Text>
                    <FlatList
                        data={data}
                        horizontal
                        keyExtractor={(item) => item.id}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{ paddingRight: 12, gap: 12 }}
                        renderItem={({ item: trending }) => (
                            <CardTrendings id={trending.id} title={trending.title} image={trending.image} />
                        )}
                    />
                </View>
            </View>
        </>
    )
}