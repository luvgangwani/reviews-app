import { StyleSheet } from 'react-native';

const globalStyles = StyleSheet.create({
    container: {
        padding: 24,
    },
    titleText: {
        fontFamily: 'raleway-semibold',
        fontSize: 18,
    },
    paragraph: {
        marginVertical: 8,
        lineHeight: 20,
    },
    input: {
        margin: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: '#184e77',
        borderRadius: 5,
    }
});

export const images = {
    rating: {
        '1': require('../assets/rating-1.png'),
        '2': require('../assets/rating-2.png'),
        '3': require('../assets/rating-3.png'),
        '4': require('../assets/rating-4.png'),
        '5': require('../assets/rating-5.png'),
    }
}

export default globalStyles;