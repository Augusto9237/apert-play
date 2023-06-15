import { FlatList, Image, Text, View, ScrollView } from "react-native";
import { GuideItem } from "../components/GuidItem";
import { ChannelsItem } from "../components/ChannelsItem";
import { Header } from "../components/Header";
import { useEffect, useState } from "react";
import { fetchProvidersTv } from "../api/moviedb";
import { ResultChannels, ResultItem } from "../@types/ChanneslType";


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
    {
        id: '6',
        title: 'Item 3',
        image: { uri: 'data:image/png;base64,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' },
    },
];

export function GuidePlay() {
    const [schedule, setSchedule] = useState<ProgramSchedule[]>([]);
    const [providerTv, setProviderTv] = useState<ResultItem[]>([]);

    useEffect(() => {
        getProvidersTv()
    }, [])

    async function getProvidersTv() {
        const data = await fetchProvidersTv();
        if (data && data.results) {
            setProviderTv(data.results);
        }
    }

    return (
        <View className="flex-1 px-4 bg-background-500">
            <Header />
            <View className="flex-1 space-y-6 pb-36">
                <View className="overflow-hidden">
                    <Text className="text-textPrimary-100 text-lg font-semibold mb-2">
                        Selecione um canal ou streaming
                    </Text>
                    <FlatList
                        data={providerTv}
                        horizontal
                        keyExtractor={(item) => String(item.provider_id)}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{ gap: 12 }}
                        renderItem={({ item: channel }) => (
                            <ChannelsItem
                                setSchedule={setSchedule}
                                id={channel.provider_id}
                                image={channel.logo_path}
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