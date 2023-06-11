import { Text, TouchableOpacity, View, ImageBackground } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { Header } from "../components/Header";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { LinearGradient } from 'expo-linear-gradient';

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

type Movie = {
    id: string;
    titulo: string;
    direcao: string;
    elenco: string[];
    image: any;
};

export function DetailsMovie() {
    const [movie, setMovie] = useState<Movie | undefined>(undefined);
    const navigation = useNavigation();
    const { params: id } = useRoute();

    useEffect(() => {
        if (id) {
            const movieData = getMovieById(String(id));
            setMovie(movieData);
        }
    }, [id]);

    function getMovieById(id: string): Movie | undefined {
        return newMovies.find(movie => movie.id === id);
    }
    return (
        <View className=" relative flex-1 bg-background-500 ">
            <TouchableOpacity
                onPress={() => navigation.goBack()}
                className="absolute left-4 top-10 z-20"
            >
                <AntDesign name="arrowleft" size={24} color='white' />
            </TouchableOpacity>
            <Header />

            <ImageBackground
                className="flex-1 justify-end"
                source={movie?.image!}
                resizeMode="cover"
            >

                <LinearGradient
                    // Background Linear Gradient
                    colors={['transparent', 'rgba(0, 0, 0, 0.842)']}
                >
                    <View className="px-4 mb-4">
                        <Text className="text-textPrimary-100 text-2xl font-bold">
                            {movie?.titulo}
                        </Text>
                        <Text className="text-textPrimary-100 text-base my-2">
                            Direção: {movie?.direcao}
                        </Text>
                        <Text className="text-textPrimary-100">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate necessitatibus sed impedit, excepturi nobis libero molestias at distinctio suscipit provident labore modi sequi, eligendi corporis! Debitis architecto optio eaque vel!
                        </Text>
                        <TouchableOpacity className="bg-textSecondary-100 items-center space-x-2 justify-center flex-row rounded-xl py-2">
                            <AntDesign name='play' size={24} style={{ marginTop: 3 }} />
                            <Text className="text-textPrimary-100 text-xl font-bold">
                                Trailer
                            </Text>
                        </TouchableOpacity>
                    </View>
                </LinearGradient>
            </ImageBackground>
        </View>

    )
}