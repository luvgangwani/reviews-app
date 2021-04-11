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
        padding: 10,
        borderWidth: 1,
        borderColor: '#184e77',
        borderRadius: 5,
    },
    errorText: {
        margin: 10,
        color: '#e63946',
        fontWeight: 'bold',
        alignSelf: 'center',
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