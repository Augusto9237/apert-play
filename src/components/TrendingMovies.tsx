import { View, Text, Image, TouchableWithoutFeedback, Dimensions } from 'react-native';

import Carousel from 'react-native-snap-carousel';
import { BannerItem } from './BannerItem';

const { width, height } = Dimensions.get('window');

export function TrendingMovies({trending}) {
    return (
        <View className="w-full mb-2">
            <Text className="text-textPrimary-100 text-lg font-semibold mb-2">
                Lançamentos
            </Text>
            <Carousel
                data={trending}
                renderItem={({ item }) => <BannerItem movie={item} />}
                firstItem={1}
                inactiveSlideOpacity={0.6}
                sliderWidth={width}
                itemWidth={width * 0.62}
                slideStyle={{ display: 'flex', alignItems: 'baseline' }}
            />
        </View>
    )
}

