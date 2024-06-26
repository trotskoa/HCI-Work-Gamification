import { StyleSheet } from 'react-native';
import colors from '../config/colors';



export default StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        resizeMode: 'cover',
    },
    imageContainer: {
        marginTop: 60,
        paddingHorizontal: 10,
        flexDirection: 'column',
        alignItems: 'center',
    },
    bookmarkContainer: {
        paddingTop: 35,
        paddingHorizontal: 10,
        alignItems: 'right',
        position: "absolute",
        right: 20,
    },
    ctaContainer: {
        marginTop: 25,
        alignItems: 'center',
        position: 'relative',
    },
    titleContainer: {
        paddingHorizontal: 10,
        flexDirection: 'column',
        alignItems: 'left',
        paddingRight: 20,
    },
    tagContainer: {
        marginLeft: 13,
        flexDirection: 'row',
        alignItems: 'left',
        justifyContent: 'left',
        paddingVertical: 10,
    },
    tags: {
        margin: 5,
        paddingHorizontal: 18,
        paddingVertical: 5,
        borderRadius: 15,
        elevation: 5,
        shadowRadius: 12,
        backgroundColor: '#f8f7d8',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "center",
        elevation: 5, //for Android
        shadowColor: colors.primary,
        shadowOffset: { width: 1, height: 3 },
        shadowOpacity: 0.25,
        shadowRadius: 4, //for iOS
    },
    tagsText: {
        color: colors.secondary,
        fontSize: 14,
        fontFamily: 'OpenSans-Semibold'
    },
    tags2: {
        margin: 5,
        paddingHorizontal: 18,
        paddingVertical: 5,
        borderRadius: 15,
        elevation: 5,
        backgroundColor: colors.accent_green,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "center",
        elevation: 5, //for Android
        shadowColor: colors.primary,
        shadowOffset: { width: 1, height: 3 },
        shadowOpacity: 0.25,
        shadowRadius: 4, //for iOS
    },
    tagsText2: {
        color: colors.titles,
        fontSize: 14,
        fontFamily: 'OpenSans-Semibold'
    },
    tagsText3: {
        color: "red",
        fontSize: 14,
        fontFamily: 'OpenSans-Semibold'
    },
    titleText: {
        color: colors.titles,
        fontSize: 32,
        marginLeft: 8,
        fontFamily: 'Montserrat-Semibold'
    },
    subTitleText: {
        color: colors.text,
        fontSize: 18,
        marginLeft: 8,
        marginTop: 8,
        marginBottom: 20,
        fontFamily: 'OpenSans-Light'
    },
    descriptionText: {
        color: colors.text,
        fontSize: 16,
        marginLeft: 8,
        marginTop: 25,
        marginBottom: 25,
        fontFamily: 'OpenSans-Regular'
    },
    descriptionTitle: {
        color: colors.text,
        fontSize: 18,
        marginLeft: 8,
        marginTop: 20,
        fontFamily: 'OpenSans-Semibold'
    },
    ctaText: {
        color: colors.white,
        fontSize: 16,
        textAlign: 'center',
        position: 'absolute',
        top: '36%',
        fontFamily: 'Montserrat-Semibold'
    },
    progressLine: {
        opacity: 0.3,
        height: 3,
        borderTopWidth: 3,
        borderColor: '#27476E',
        borderStyle: "solid",
        width: 372,
        marginLeft: 8,
    },
    progressLineFull: {
        height: 3,
        borderTopWidth: 3,
        borderColor: '#27476E',
        borderStyle: "solid",
        width: 250,
        marginLeft: 8,
        position: "absolute",
    },
    percentagContainer: {
        position: "absolute",
        right: 20,
        top: 40,
    },
    dropText: {
        color: colors.text,
        fontSize: 18,
        marginLeft: 8,
        marginTop: -40,
        fontFamily: 'OpenSans-Light',
        textDecorationLine: 'underline',
        paddingBottom: 100,
        alignSelf: "center",
    },
});
