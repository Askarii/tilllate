import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'

const useStyle = makeStyles(theme => ({
    grid: {
        width: '100%',
        margin: '0px',
    },
    item: {
        padding: theme.spacing(2),
        textAlign: 'center',

    },
    images: {
        height: '300px',
        widht:"100%",
        
    }
}))

const Gallery = props => {
    const { gallery } = props
    const classes = useStyle();

    //Mapping the state property and rendering it to the DOM using material UI
    const getImages = gallery.map(item => {
        return (<Grid item lg={4} md={6} xs={12} key={item.id} className={classes.item}>
            <img src={item.url} className={classes.images}/>
        </Grid>)
    })
    return(
        <Grid container spacing={3} className={classes.grid}>
            {getImages}
        </Grid>
    )
}
    
export default Gallery