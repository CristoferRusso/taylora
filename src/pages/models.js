import Appbar from "../components/Appbar";
import Footer from "../components/Footer";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import i3Bianca from '../images/i3-bianca.jpg'
import i8Nera from '../images/i8-nera.jpg'

const Models = () => {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));
    return (
        <>
            <Appbar />
            <div>
                <Grid container spacing={{ xs: 2 }} columns={{ xs: 2, sm: 8, md: 18 }}>
                    <Grid item xs={6}>
                        <div className='presentation'>
                            <img src={i3Bianca} style={{maxWidth:'400px'}}></img>
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <div className='presentation'>
                        <img src={i8Nera} style={{maxWidth:'400px'}}></img>
                        </div>                
                   </Grid>
                </Grid>
            </div>
            <Footer />
        </>

    )
}

export default Models;