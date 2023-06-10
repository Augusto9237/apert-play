import {View, Text, ImageBackground} from 'react-native'

interface CardTrending {
  id: string;
  title: string;
  image: any;
}

export function CardTrendings({id, image, title}:CardTrending) {
    return (
        <ImageBackground source={image} className='h-[136px] w-[100px] rounded-lg overflow-hidden justify-end items-start p-2' >
            <Text className='text-textPrimary-100'>{title}</Text>
        </ImageBackground>
    )
}