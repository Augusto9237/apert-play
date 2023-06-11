import { FlatList, Image, Text, View } from "react-native";
import { GuideItem } from "../components/GuidItem";
import { ChannelsItem } from "../components/ChannelsItem";
import { Header } from "../components/Header";


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

const dataChannels = [
    {
        id: '1',
        title: 'Item 1',
        image: { uri: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Netflix-new-icon.png' },
    },
    {
        id: '2',
        title: 'Item 2',
        image: { uri: 'https://macmagazine.com.br/wp-content/uploads/2021/10/18-globoplay.jpg' },
    },
    {
        id: '3',
        title: 'Item 3',
        image: { uri: 'https://play-lh.googleusercontent.com/1iyX7VdQ7MlM7iotI9XDtTwgiVmqFGzqwz10L67XVoyiTmJVoHX87QtqvcXgUnb0AC8=w240-h480-rw' },
    },
    {
        id: '4',
        title: 'Item 3',
        image: { uri: 'https://play-lh.googleusercontent.com/Uyk7DkQElC-0OfJCOHZLIgnQ0ulHoEC06d9ENRklNh-0t6nrFc6mqmpRMajoVU3Yt9w' },
    },
    {
        id: '5',
        title: 'Item 3',
        image: { uri: 'https://play-lh.googleusercontent.com/aZLb5JKvnzXBAcaU2M9fsgp0vfYBfsXQu_yHaehDzqMDqxCXixVPOdY3y1kWVfJfSBew' },
    },
];

export function GuidePlay() {
    return (
        <View className="flex-1 px-4 bg-background-500">
            <Header />
            <View className="flex-1  space-y-6">
                <View className="overflow-hidden">
                    <Text className="text-textPrimary-100 text-lg font-semibold mb-2">
                        Selecione um canal ou streaming
                    </Text>
                    <FlatList
                        data={dataChannels}
                        horizontal
                        keyExtractor={(item) => item.id}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{ gap: 12 }}
                        renderItem={({ item: channel }) => (
                            <ChannelsItem id={channel.id} title={channel.title} image={channel.image} />
                        )}
                    />

                </View>

                <View >
                    <Text className="text-textPrimary-100 text-lg font-semibold my-2">
                        Programação
                    </Text>
                    <FlatList
                        data={data}
                        keyExtractor={(item) => item.id}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{ gap: 12 }}
                        renderItem={({ item: trending }) => (
                            <GuideItem id={trending.id} title={trending.title} image={trending.image} />
                        )}
                    />
                </View>
            </View>
        </View>
    )
}