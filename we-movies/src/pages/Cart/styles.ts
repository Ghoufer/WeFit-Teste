import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        marginTop: 24,
        backgroundColor: '#FFF',
        padding: 50,
        width: '70%',

        '& > img': {
            maxWidth: '70%',
            minHeight: '45%'
        }
    },

    nothingHere: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100%',
        gap: 100
    },

    btn: {
        width: 180,
        height: 40,
        backgroundColor: '#009EDD'
    },

    nothingHereText: {
        fontSize: 20,
        fontWeight: 700
    },

    table: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100%'
    },

    footer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%'
    }
})

export default useStyles;