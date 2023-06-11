import { View, Text, Image, TouchableOpacity } from 'react-native'

interface CardTrending {
    id: string;
    title: string;
    image: any;
}

export function ChannelsItem({ id, image, title }: CardTrending) {
    return (
        <TouchableOpacity className='w-[60px] h-[60px] overflow-hidden rounded-full' >
            <Image source={image} className='h-full' />
        </TouchableOpacity>
    )
}