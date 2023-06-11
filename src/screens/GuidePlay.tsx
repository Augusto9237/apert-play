import { FlatList, Image, Text, View, ScrollView } from "react-native";
import { GuideItem } from "../components/GuidItem";
import { ChannelsItem } from "../components/ChannelsItem";
import { Header } from "../components/Header";
import { useState } from "react";


export interface ProgramSchedule {
    id: string;
    horario: string;
    programa: string;
    descricao?: string;
    classificacaoEtaria?: string;
    aoVivo?: boolean;
    image?: { uri: string },
};

export interface Channel {
    id: string;
    title: string;
    image: { uri: string };
    schedule: ProgramSchedule[];
};

const programSchedule = [
    {
        id: '1hushauhsuah',
        horario: "14:20 - 15:39",
        programa: "The Voice Kids",
        classificacaoEtaria: "livre",
        image: { uri: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTNTqUp7igTFBzZBufa_tpPx26Jfc83EHAvn6Hi9VMrX6dUCsgn' },
    },
    {
        id: '2hushauhsuah',
        horario: "15:40 - 18:04",
        programa: "Futebol",
        descricao: "Etapa de El Salvador",
        image: { uri: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTNTqUp7igTFBzZBufa_tpPx26Jfc83EHAvn6Hi9VMrX6dUCsgn' },
    },
    {
        id: '3hushauhsuah',
        horario: "14:58 - 15:28",
        programa: "Tô De Graça",
        classificacaoEtaria: "12A",
        image: { uri: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTNTqUp7igTFBzZBufa_tpPx26Jfc83EHAvn6Hi9VMrX6dUCsgn' },
    },
    {
        id: '4hushauhsuah',
        horario: "15:28 - 15:59",
        programa: "Tô De Graça",
        classificacaoEtaria: "12A",
        image: { uri: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTNTqUp7igTFBzZBufa_tpPx26Jfc83EHAvn6Hi9VMrX6dUCsgn' },
    },
    {
        id: '5hushauhsuah',
        horario: "15:59 - 16:29",
        programa: "Tô De Graça",
        classificacaoEtaria: "12A",
        image: { uri: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTNTqUp7igTFBzZBufa_tpPx26Jfc83EHAvn6Hi9VMrX6dUCsgn' },
    },
    {
        id: '6hushauhsuah',
        horario: "16:29 - 16:59",
        programa: "Tô De Graça",
        classificacaoEtaria: "12A",
        image: { uri: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTNTqUp7igTFBzZBufa_tpPx26Jfc83EHAvn6Hi9VMrX6dUCsgn' },
    },
    {
        id: '7hushauhsuah',
        horario: "16:59 - 17:29",
        programa: "Tô De Graça",
        classificacaoEtaria: "12A",
        image: { uri: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTNTqUp7igTFBzZBufa_tpPx26Jfc83EHAvn6Hi9VMrX6dUCsgn' },
    },
    {
        id: '8hushauhsuah',
        horario: "17:29 - 18:14",
        programa: "Vai Que Cola",
        descricao: "Canta Forte Canta Alto",
        image: { uri: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTNTqUp7igTFBzZBufa_tpPx26Jfc83EHAvn6Hi9VMrX6dUCsgn' },
    },
    {
        id: '9hushauhsuah',
        horario: "15:00 - 16:59",
        programa: "Jornal GloboNews - Edição das 15h",
        aoVivo: true,
        image: { uri: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTNTqUp7igTFBzZBufa_tpPx26Jfc83EHAvn6Hi9VMrX6dUCsgn' },
    },
    {
        id: '1hushauhsuah0',
        horario: "17:00 - 17:59",
        programa: "Globo Repórter",
        image: { uri: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTNTqUp7igTFBzZBufa_tpPx26Jfc83EHAvn6Hi9VMrX6dUCsgn' },
    },
    {
        id: '1hushauhsuah1',
        horario: "14:56 - 16:01",
        programa: "Pré-Jogo - Campeonato Brasileiro De Futebol - São Paulo X Palmeiras - 10ª Rodada - 11062023",
        aoVivo: true,
        image: { uri: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTNTqUp7igTFBzZBufa_tpPx26Jfc83EHAvn6Hi9VMrX6dUCsgn' },
    },
    {
        id: '1hushauhsuah2',
        horario: "16:01 - 17:00",
        programa: "Campeonato Brasileiro De Futebol",
        descricao: "Bahia x Cruzeiro",
        image: { uri: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTNTqUp7igTFBzZBufa_tpPx26Jfc83EHAvn6Hi9VMrX6dUCsgn' },
    },
    {
        id: 'hushauhsuah13',
        horario: "17:00 - 17:36",
        programa: "Giro Da Rodada",
        descricao: "Série B",
        image: { uri: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTNTqUp7igTFBzZBufa_tpPx26Jfc83EHAvn6Hi9VMrX6dUCsgn' },
    },
    {
        id: '1hushauhsuah4',
        horario: "17:36 - 20:17",
        programa: "Copa Do Mundo Da FIFA De Futebol Sub-20",
        descricao: "Uruguai X Itália - Final",
        aoVivo: true,
        image: { uri: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTNTqUp7igTFBzZBufa_tpPx26Jfc83EHAvn6Hi9VMrX6dUCsgn' },
    },
    {
        id: '1hushauhsuah5',
        horario: "15:10 - 17:14",
        programa: "Liga Das Nações De Vôlei Masculino",
        descricao: "Eua X Brasil",
        aoVivo: true,
        image: { uri: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTNTqUp7igTFBzZBufa_tpPx26Jfc83EHAvn6Hi9VMrX6dUCsgn' },
    },
    {
        id: '1hushauhsuah6',
        horario: "17:14 - 19:43",
        programa: "Campeonato Brasileiro De Futebol - Série B",
        descricao: "Juventude x Tombense",
        aoVivo: true,
        image: { uri: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTNTqUp7igTFBzZBufa_tpPx26Jfc83EHAvn6Hi9VMrX6dUCsgn' },
    }
];


const dataChannels = [
    {
        id: '1',
        title: 'Item 1',
        image: { uri: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Netflix-new-icon.png' },
    },
    {
        id: '2',
        title: 'Item 2',
        image: { uri: 'https://macmagazine.com.br/wp-content/uploads/2021/10/18-globoplay.jpg' },
        programSchedule: programSchedule,
    },
    {
        id: '3',
        title: 'Item 3',
        image: { uri: 'https://play-lh.googleusercontent.com/1iyX7VdQ7MlM7iotI9XDtTwgiVmqFGzqwz10L67XVoyiTmJVoHX87QtqvcXgUnb0AC8=w240-h480-rw' },
    },
    {
        id: '4',
        title: 'Item 3',
        image: { uri: 'https://play-lh.googleusercontent.com/Uyk7DkQElC-0OfJCOHZLIgnQ0ulHoEC06d9ENRklNh-0t6nrFc6mqmpRMajoVU3Yt9w' },
    },
    {
        id: '5',
        title: 'Item 3',
        image: { uri: 'https://play-lh.googleusercontent.com/aZLb5JKvnzXBAcaU2M9fsgp0vfYBfsXQu_yHaehDzqMDqxCXixVPOdY3y1kWVfJfSBew' },
    },
];

export function GuidePlay() {
    const [schedule, setSchedule] = useState<ProgramSchedule[]>([]);
    
    return (
        <View className="flex-1 px-4 bg-background-500">
            <Header />
            <View className="flex-1 space-y-6 pb-36">
                <View className="overflow-hidden">
                    <Text className="text-textPrimary-100 text-lg font-semibold mb-2">
                        Selecione um canal ou streaming
                    </Text>
                    <FlatList
                        data={dataChannels}
                        horizontal
                        keyExtractor={(item) => item.id}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{ gap: 12 }}
                        renderItem={({ item: channel }) => (
                            <ChannelsItem
                                setSchedule={setSchedule}
                                id={channel.id}
                                title={channel.title}
                                image={channel.image}
                                schedule={channel.programSchedule}
                            />
                        )}
                    />

                </View>
                {schedule?.length > 0 ?
                    <View >
                        <Text className="text-textPrimary-100 text-lg font-semibold my-2">
                            Programação
                        </Text>
                        <ScrollView className="flex-col space-y-2 pb-8">
                            {schedule.map((grade) => (
                                <GuideItem key={grade.id}
                                    id={grade.id}
                                    title={grade.programa}
                                    aoVivo={grade.aoVivo}
                                    time={grade.horario}
                                    description={grade.descricao}
                                    image={grade.image}
                                />
                            ))}
                        </ScrollView>
                    </View>
                :
                <View className="flex-1 flex justify-center items-center">
                    <Text className="text-textPrimary-100 text-lg font-semibold">
                        Nenhuma programação encontrada
                    </Text>
                </View>
            }
            </View>
        </View>
    )
}