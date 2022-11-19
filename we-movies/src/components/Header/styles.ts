import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        color: '#FFF',
        width: '70%',
        alignSelf: 'center',
        justifyContent: 'space-between',
        padding: 10,
        fontSize: 20,
        alignItems: 'center'
    },

    content: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        textAlign: 'right',
        alignItems: 'center',
        backgroundColor: 'transparent'
    },

    text: {
        fontSize: 14,
        fontWeight: 600
    },

    subText: {
        fontSize: 12,
        color: '#999999',
        fontWeight: 600,
        marginTop: -5
    }
})

export default useStyles;