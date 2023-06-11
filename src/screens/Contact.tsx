import { Image, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Header } from "../components/Header";
export function Contact() {
    return (
        <View className="relative flex-1 px-4 bg-background-500">
            <Header />
            <View >
                <Text className="text-textPrimary-100 text-lg font-semibold pb-2">
                    Planos
                </Text>

                <View className="bg-textSecondary-100 w-full items-center p-2 rounded-md">
                    <Text className="text-textPrimary-100 text-base font-semibold">
                        Filmes, séries, esportes e muito mais.
                    </Text>
                    <View className="flex-row items-center">
                        <Text className="text-textPrimary-100 text-2xl font-semibold">
                            R$ 30,00
                        </Text>
                        <Text className="text-textPrimary-100 text-sm ml-2">
                            / mês
                        </Text>
                    </View>
                </View>

                <View className="bg-background-100 border-2 border-solid border-textSecondary-100 my-2 w-full items-center p-2 rounded-md">
                    <Text className="text-textPrimary-100 text-base font-semibold">
                        Filmes, séries, esportes e muito mais.
                    </Text>
                    <View className="flex-row items-center">
                        <Text className="text-textPrimary-100 text-2xl font-semibold">
                            R$ 120,00
                        </Text>
                        <Text className="text-textPrimary-100 text-sm ml-2">
                            / 6 meses
                        </Text>
                    </View>
                </View>

                <View className="bg-background-100 border-2 border-solid border-textSecondary-100 w-full items-center p-2 rounded-md">
                    <Text className="text-textPrimary-100 text-base font-semibold">
                        Filmes, séries, esportes e muito mais.
                    </Text>
                    <View className="flex-row items-center">
                        <Text className="text-textPrimary-100 text-2xl font-semibold">
                            R$ 220,00
                        </Text>
                        <Text className="text-textPrimary-100 text-sm ml-2">
                            / 12 meses
                        </Text>
                    </View>
                </View>
            </View>

            <TouchableOpacity className="flex-row bg-green-600 p-2 w-full items-center rounded-lg justify-center my-8">
                <FontAwesome5 name="whatsapp" size={24} color="white" />
                <Text className="text-textPrimary-100 font-semibold ml-2">
                    Entrar em contato
                </Text>
            </TouchableOpacity>

            <View className="absolute bg-background-100 w-full items-center py-2 bottom-0 left-4 right-4">
                <Text className="text-textPrimary-100 text-base mb-2">
                    Siga nossas redes sociais
                </Text>
                <View className="flex-row space-x-4">
                    <TouchableOpacity>
                        <AntDesign name="instagram" size={24} color="white" />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <AntDesign name='facebook-square' size={24} color="white" />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <AntDesign name="youtube" size={25} color="white" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>

    )
}