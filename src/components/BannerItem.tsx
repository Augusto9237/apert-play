import { View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native'

interface CardTrending {
    id: string;
    title: string;
    image: any
}

export function BannerItem({ id, title, image }: CardTrending) {
    return (
        <TouchableOpacity className='h-[190px] w-[322px] overflow-hidden rounded-sm' >

            <ImageBackground source={image} className='h-full w-full justify-end'>
                <Text className='text-textPrimary-100 p-2'>
                    {title}
                </Text>
            </ImageBackground>

        </TouchableOpacity>
    )
}