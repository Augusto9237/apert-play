import { View, Text, Image } from 'react-native'
import { Feather } from '@expo/vector-icons';

interface CardTrending {
    id: string;
    hours: string;
    homeTeam: string;
    visitingTeam: string;
    image1: any;
    image2: any;
}

export function CardGame({ id, image1, image2, hours, homeTeam, visitingTeam }: CardTrending) {
    return (
        <View className='bg-background-100 h-[110px] min-w-[260px] items-center rounded-md'>
            <Text className='text-textPrimary-100'>Brasileirão serie A</Text>
            <View className='flex-row justify-between p-4 space-x-2'>
                <View className='flex-row space-x-1 items-center'>
                    <Text className='text-textPrimary-100 text-base font-medium'>
                        {homeTeam}
                    </Text>
                    <Image source={image1} className='w-[24px] h-[24px]' />
                </View>

                <Feather name="x" size={18} color="white" style={{ marginTop: 5 }} />

                <View className='flex-row space-x-1 items-center'>
                    <Image source={image2} className='w-[24px] h-[24px]' />
                    <Text className='text-textPrimary-100 text-base font-medium'>
                        {visitingTeam}
                    </Text>
                </View>
            </View>
            <View className='bg-textSecondary-100 px-2'>
                <Text className='text-textPrimary-100'>
                    {hours}
                </Text>
            </View>
        </View>
    )
}