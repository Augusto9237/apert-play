import { useNavigation } from '@react-navigation/native';
import { Image, Dimensions, TouchableWithoutFeedback } from 'react-native'
import { image500 } from '../api/moviedb';
import { Movie } from '../@types/MoviesType';

  interface MovieProps{
    movie: Movie;
  }

const { width, height } = Dimensions.get('window');

export function BannerItem( {movie} : MovieProps) {
    const navigation = useNavigation();

    return (
        <TouchableWithoutFeedback onPress={() => navigation.navigate('DetailsMovie', movie.id)}>
            <Image
                source={{uri: image500(movie.poster_path)}}
                style={{
                    width: width * 0.6,
                    height: height * 0.4
                }}
                className='rounded-3xl'
            />
        </TouchableWithoutFeedback>
    )
}