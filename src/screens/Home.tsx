import { FlatList, Image, Text, View, ScrollView } from "react-native";
import { CardTrendings } from "../components/CardTrendings";
import { Header } from "../components/Header";
import { BannerItem } from "../components/BannerItem";
import { ChannelsItem } from "../components/ChannelsItem";
import { CardGame } from "../components/CardGame";
import { SafeAreaView } from 'react-native-safe-area-context';
import { TrendingMovies } from "../components/TrendingMovies";

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


const newMovies = [
    {
        id: '1',
        titulo: 'Homem-Aranha: Através do Aranhaverso',
        direcao: 'Joaquim Dos Santos, Kemp Powers, Justin Thompson',
        elenco: ['Shameik Moore', 'Hailee Steinfeld', 'Oscar Isaac'],
        image: { uri: 'https://br.web.img2.acsta.net/c_310_420/pictures/23/05/17/22/43/4869322.jpg' },
    },
    {
        id: '2',
        titulo: 'Boogeyman: Seu Medo é Real',
        direcao: 'Rob Savage',
        elenco: ['Chris Messina', 'Sophie Thatcher', 'Vivien Lyra Blair'],
        image: { uri: 'https://br.web.img2.acsta.net/c_310_420/pictures/23/05/04/20/29/2513856.jpg' },
    },
    {
        id: '3',
        titulo: 'Urubus',
        direcao: 'Cláudio Borrelli',
        elenco: ['Gustavo Garcez', 'Bella Camero', 'Julio Martins'],
        image: { uri: 'https://br.web.img2.acsta.net/c_310_420/pictures/23/05/16/08/06/1535849.jpg' },
    },
    {
        id: '4',
        titulo: 'EO',
        direcao: 'Jerzy Skolimowski',
        elenco: ['Sandra Drzymalska', 'Tomasz Organek', 'Mateusz Kosciukiewicz'],
        image: { uri: 'https://br.web.img3.acsta.net/c_310_420/pictures/23/06/01/15/50/3565779.jpg' },
    },
    {
        id: '5',
        titulo: 'O Último Ônibus',
        direcao: 'Gillies MacKinnon',
        elenco: ['Timothy Spall', 'Phyllis Logan', 'Saskia Ashdown'],
        image: { uri: 'https://br.web.img3.acsta.net/c_310_420/pictures/23/05/18/21/14/1874353.jpg' },
    }
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

const jogos = [
    {
        id: '1',
        horario: '11:00',
        timeCasa: 'América-MG',
        time1image: { uri: 'https://secure.cache.images.core.optasports.com/soccer/teams/30x30/uuid_d0tpuy1w8ckf8iiea01t1aob5.png' },
        timeVisitante: 'Athletico PR',
        time2image: { uri: 'https://secure.cache.images.core.optasports.com/soccer/teams/30x30/uuid_5h3amvo8ykt01u4h3upw3c5qf.png' },
    },
    {
        id: '2',
        horario: '16:00',
        timeCasa: 'Internacional',
        time1image: { uri: 'https://secure.cache.images.core.optasports.com/soccer/teams/30x30/uuid_c7n1isjmpyqt5pj51yekr08wo.png' },
        timeVisitante: 'Vasco da Gama',
        time2image: { uri: 'https://secure.cache.images.core.optasports.com/soccer/teams/30x30/uuid_5ponlslulpugdlvd93n9yqu2b.png' },
    },
    {
        id: '3',
        horario: '16:00',
        timeCasa: 'São Paulo',
        time1image: { uri: 'https://secure.cache.images.core.optasports.com/soccer/teams/30x30/uuid_5p301ikmaba9gesscss3zo745.png' },
        timeVisitante: 'Palmeiras',
        time2image: { uri: 'https://secure.cache.images.core.optasports.com/soccer/teams/30x30/uuid_b9d2xcvxxcwplyp4le9ulnlv9.png' },
    },
    {
        id: '4',
        horario: '18:30',
        timeCasa: 'Flamengo',
        time1image: { uri: 'https://secure.cache.images.core.optasports.com/soccer/teams/30x30/uuid_102ykb145wz6dtveg65nistwm.png' },
        timeVisitante: 'Grêmio',
        time2image: { uri: 'https://secure.cache.images.core.optasports.com/soccer/teams/30x30/uuid_1yd80wg4djlmtgkei51x0x4t6.png' },
    },
    {
        id: '5',
        horario: '18:30',
        timeCasa: 'Goiás',
        time1image: { uri: 'https://secure.cache.images.core.optasports.com/soccer/teams/30x30/uuid_5umkgpd22oex45aoco3wqgddl.png' },
        timeVisitante: 'Fluminense',
        time2image: { uri: 'https://secure.cache.images.core.optasports.com/soccer/teams/30x30/uuid_2ldx5vhhqfz2rllkgp7wpa744.png' },
    }
];


export function Home() {

    return (
        <View className="flex-1 px-4 bg-background-500 ">
            <Header />
            <ScrollView className="flex-1 w-full space-y-6" showsVerticalScrollIndicator={false}>

                <TrendingMovies />

                <View className="w-full">
                    <Text className="text-textPrimary-100 text-lg font-semibold mb-2">
                        Jogos de hoje
                    </Text>
                    <FlatList
                        data={jogos}
                        horizontal
                        keyExtractor={(item) => item.id}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{ paddingRight: 12, gap: 12 }}
                        renderItem={({ item: game }) => (
                            <CardGame
                                hours={game.horario} id={game.id}
                                homeTeam={game.timeCasa}
                                visitingTeam={game.timeVisitante}
                                image1={game.time1image}
                                image2={game.time2image} />
                        )}
                    />
                </View>

                <View>
                    <Text className="text-textPrimary-100 text-lg font-semibold mb-2">
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
                <View className="overflow-hidden mb-8">
                    <Text className="text-textPrimary-100 text-lg font-semibold mb-2">
                        Canais e Streamings
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
            </ScrollView>
        </View>

    )
}