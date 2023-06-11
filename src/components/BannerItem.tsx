import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, Dimensions, TouchableWithoutFeedback } from 'react-native'

interface CardTrending {
    id: string;
    title: string;
    image: any
}

const { width, height } = Dimensions.get('window');

export function BannerItem({ id, title, image }: CardTrending) {
    const navigation = useNavigation();

    function handleClick(idMovie: string){
        navigation.navigate('DetailsMovie', idMovie);
    }
    return (
        <TouchableWithoutFeedback onPress={() => handleClick(id)}>
            <Image
                source={image}
                style={{
                    width: width * 0.6,
                    height: height * 0.4
                }}
                className='rounded-3xl'
            />
        </TouchableWithoutFeedback>
    )
}