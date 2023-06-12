import { View, Text, Image } from 'react-native'

interface CardTrending {
    id: string;
    title: string;
    time: string;
    description?: string;
    aoVivo?: boolean;
    image:{ uri: string }
}

export function GuideItem({ id, title, aoVivo, time, description, image }: CardTrending) {
    return (
        <View className='w-full h-[96] flex-row flex-1 mb-3  rounded-md overflow-hidden bg-background-100 ' >
            <Image source={image} className='h-full w-[90px]'/>
            <View className='p-2'>
                <View className='flex-row items-center space-x-2'>
                    <Text className='text-textPrimary-100 text-xs'>{time}</Text>
                    {aoVivo && (
                        <View className='bg-textSecondary-100 px-2 rounded-sm'>
                            <Text className='text-textPrimary-100 text-xs'>
                                Ao vivo
                            </Text>
                        </View>
                    )}
                </View>
                <Text className='text-textPrimary-100 mt-1 text-base font-semibold'>{title.length > 26 ? title.slice(0, 26) + '...' : title}</Text>
                <Text className='text-textPrimary-100 text-xs'>{description}</Text>
            </View>
        </View>
    )
}