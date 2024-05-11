import { StyleSheet } from 'react-native';
import colors from '../config/colors';

export default StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        resizeMode: 'cover',
    },
    profileImageContainer: {
        marginTop: 50,
        paddingHorizontal: 10,
        paddingVertical: 10,
        //backgroundColor: colors.primary,
        flexDirection: 'column',
        alignItems: 'center',
    },
    tagContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    tags: {
        margin: 5,
        paddingHorizontal: 18,
        paddingVertical: 7,
        borderRadius: 15,
        elevation: 5,
        shadowRadius: 12,
        overflow: "hidden",
        backgroundColor: '#f8f7d8',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "center",
    },
    titleContainer: {
        paddingHorizontal: 10,
        paddingVertical: 20,
        //backgroundColor: colors.primary,
        flexDirection: 'column',
        alignItems: 'center',
    },
    courseContainer: {
        marginTop: 10,
        paddingBottom: 13,
        paddingHorizontal: 10,
        paddingVertical: 20,
        margin: 18,
        backgroundColor: '#f8fce7',
        flexDirection: 'row',
        alignItems: 'left',
        borderRadius: 12,
        elevation: 5,
        shadowRadius: 12,
    },
    titleText: {
        color: colors.titles,
        fontSize: 32,
        marginLeft: 8,
        fontWeight: '900'
    },
    subTitleText: {
        color: colors.titles,
        fontSize: 16,
        marginLeft: 8,
        fontWeight: '500'
    }
});