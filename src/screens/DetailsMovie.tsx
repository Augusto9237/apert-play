import { Text, TouchableOpacity, View, ImageBackground, ActivityIndicator } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { Header } from "../components/Header";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { LinearGradient } from 'expo-linear-gradient';
import { fetchMovieDetails, image500 } from "../api/moviedb";
import { MovieDetail } from "../@types/MoviesType";
import { LoadingSpinner } from "../components/LoadingSpinner";

export function DetailsMovie() {
    const [movie, setMovie] = useState<MovieDetail>(null);
    const [loading, setLoading] = useState(false);
    const navigation = useNavigation();
    const { params: id } = useRoute();

    useEffect(() => {
        setLoading(true);

        getMovieDetail(String(id));

        setTimeout(() => {
            setLoading(false);
        }, 500);
    }, [id]);

    async function getMovieDetail(id: string) {
        const data = await fetchMovieDetails(id);
        if (data) {
            setMovie(data);
        }
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
            {
                loading && (
                    <LoadingSpinner/>
                )
            }
            {!loading && (
                <ImageBackground
                    className="flex-1 justify-end"
                    source={{ uri: image500(movie?.poster_path!) }}
                    resizeMode="cover"
                >

                    <LinearGradient
                        colors={['transparent', 'rgba(23,23,23,0.8)', 'rgba(0, 0, 1, 0.912)']}
                    >
                        <View className="px-4 mb-4">
                            <Text className="text-textPrimary-100 text-2xl font-bold">
                                {movie?.title!}
                            </Text>
                            <Text className="text-textPrimary-100 text-base my-2">
                                {movie?.tagline!}
                            </Text>
                            <Text className="text-textPrimary-100">
                                {movie?.overview!}
                            </Text>
                            <TouchableOpacity className="bg-textSecondary-100 items-center space-x-2 justify-center flex-row rounded-xl py-2 mt-2">
                                <AntDesign name='play' size={24} style={{ marginTop: 3 }} />
                                <Text className="text-textPrimary-100 text-xl font-bold">
                                    Trailer
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </LinearGradient>
                </ImageBackground>
            )}
        </View>

    )
}