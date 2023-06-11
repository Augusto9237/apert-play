import { View, Text, Image } from 'react-native'

interface CardTrending {
    id: string;
    title: string;
    image: any;
}

export function GuideItem({ id, image, title }: CardTrending) {
    return (
        <View className='w-full h-[100] flex-row flex-1 rounded-md overflow-hidden bg-background-100' >
            <Image source={image} className='h-full w-20' />
            <View>
                <Text className='text-textPrimary-100 ml-3 mt-2 text-base font-semibold'>{title}</Text>
                <Text className='text-textPrimary-100 ml-3 mt-2 text-base'>15h às 18h</Text>
            </View>
        </View>
    )
}