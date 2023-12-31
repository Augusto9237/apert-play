import { View, Text, Image, TouchableOpacity } from 'react-native'
import { ProgramSchedule } from '../screens/GuidePlay';
import { useNavigation } from '@react-navigation/native';
import { image185 } from '../api/moviedb';

interface CardTrending {
    id: number;
    image: any;
    schedule?: ProgramSchedule[];
    setSchedule?: React.Dispatch<React.SetStateAction<ProgramSchedule[]>>
}

export function ChannelsItem({ id, image,  schedule, setSchedule }: CardTrending) {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={setSchedule? () => setSchedule(schedule): () => navigation.navigate('GuidePlay')} className='w-[60px] h-[60px] overflow-hidden rounded-full' >
            <Image source={{uri: image185(image)}} className='h-full' />
        </TouchableOpacity>
    )
}