import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        backgroundColor: '#FFF',
        flexDirection: 'column',
        borderRadius: 4,
        minWidth: 300,
        minHeight: 310,
        maxWidth: 300,
        maxHeight: 310,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'space-around'
    },

    img: {
        minWidth: 150,
        minHeight: 200,
        maxWidth: 150,
        maxHeight: 200,
    },

    title: {
        fontSize: 12,
        fontWeight: 700,
        color: '#333333'
    },

    price: {
        fontSize: 16,
        fontWeight: 700,
        color: '#2F2E41'
    },

    btnText: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 12,
        paddingTop: 2
    }
})

export default useStyles;