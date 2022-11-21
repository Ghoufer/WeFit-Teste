import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    root: {
        width: '100%',

        '& th': {
            textAlign: 'left',
            textTransform: 'uppercase',
            color: '#999999',
            paddingBottom: 20
        },

        '& td': {
            paddingTop: 20,
            paddingBottom: 20
        }
    },

    itemInfo: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },

    titlePrice: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginLeft: 80,
        color: '#2F2E41',
        fontWeight: 700
    },

    titleTxt: {
        fontSize: 18
    },

    priceTxt: {
        fontSize: 20
    },

    numItems: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 20
    },

    quantity: {
        border: '1px solid #D9D9D9',
        minWidth: 100,
        padding: 5,
        borderRadius: 6,
        textAlign: 'center'
    }
})

export default useStyles;