import { View, Text, Image, TouchableWithoutFeedback, Dimensions } from 'react-native';

import Carousel from 'react-native-snap-carousel';
import { BannerItem } from './BannerItem';

export interface NewMovie {
    id: string;
    titulo: string;
    direcao: string;
    elenco: string[];
    image: any;
};

interface MovieCardProps {
    image: any;
    title: string
}

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
const { width, height } = Dimensions.get('window');

export function TrendingMovies() {


    return (
        <View className="w-full mb-2">
            <Text className="text-textPrimary-100 text-lg font-semibold mb-2">
                Lançamentos
            </Text>
            <Carousel
                data={newMovies}
                renderItem={({ item }) => <BannerItem id={item.id} image={item.image} title={item.titulo} />}
                firstItem={1}
                inactiveSlideOpacity={0.6}
                sliderWidth={width}
                itemWidth={width * 0.62}
                slideStyle={{ display: 'flex', alignItems: 'baseline' }}
            />
        </View>
    )
}

