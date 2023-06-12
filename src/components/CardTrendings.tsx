import { View, Text, ImageBackground, TouchableWithoutFeedback } from 'react-native'
import { Movie } from '../@types/MoviesType';
import { image342, image500 } from '../api/moviedb';
import { LinearGradient } from 'expo-linear-gradient';
import { SeriesType } from '../@types/SeriesTvTypes';
import { useNavigation } from '@react-navigation/native';
interface MovieProps {
    movie?: Movie;
    series?: SeriesType;
}
export function CardTrendings({ movie, series }: MovieProps) {
    const navigation = useNavigation();
    return (
        <TouchableWithoutFeedback onPress={movie? () => navigation.navigate('DetailsMovie', movie.id): () => navigation.navigate('DetailsSeries', series.id)}>
            <ImageBackground source={{ uri: image342(movie ? movie.poster_path : series.poster_path) }} className='h-[136px] w-[100px] rounded-lg overflow-hidden justify-end' >
                <LinearGradient
                    // Background Linear Gradient
                    colors={['transparent', 'rgba(23,23,23,0.8)', 'rgba(0, 0, 1, 0.912)']}
                >
                    <View className='items-center p-1'>
                        <Text className='text-textPrimary-100'>{movie ? movie.title.length > 16 ? movie.title.slice(0, 16) + '...' : movie.title : series.name.length > 16 ? series.name.slice(0, 16) + '...' : series.name}</Text>
                    </View>
                </LinearGradient>
            </ImageBackground>
        </TouchableWithoutFeedback>
    )
}