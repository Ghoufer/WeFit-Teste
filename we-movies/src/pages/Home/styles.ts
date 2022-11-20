import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    root: {
        display: 'inline-flex',
        width: '50%',
        gap: 16,
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginTop: 24,
        color: '#FFF'
    },

    loading: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '70%',
        height: '90vh'
    }
})

export default useStyles;