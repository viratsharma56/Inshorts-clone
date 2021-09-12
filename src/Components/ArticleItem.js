import { Card, CardContent, Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'

const useStyle = makeStyles(theme => ({
    component: {
        marginBottom: 20,
        boxShadow: '0 2px 5px 0 rgb(0 0 0 16%), 0 2px 10px 0 rgb(0 0 0 12%)',
        marginTop: 20
    },
    image: {
        height: 268,
        width: '88%',
        borderRadius: 3,
        objectFit: 'cover'
    },
    container: {
        padding: 8,
        paddingBottom: '4px !important'
    },
    rightContainer: {
        margin: '5px 0 0 -25px',
        display: 'flex',
        flexDirection: 'column',
        [theme.breakpoints.down('sm')]: {
            margin: '5px 0'
        }
    },
    title: {
        color: '#44444d',
        fontSize: 22,
        lineHeight: '27px'
    },
    author: {
        fontSize: '12px',
        color: "#808290",
        lineHeight: '22px' 
    },
    description: {
        lineHeight: '22px',
        color: '#44444d',
        marginTop: 5
    },
    publisher: {
        fontSize: 12,
        marginTop: 'auto',
        marginBottom: 10,
        '& > *':{
            textDecoration: 'none',
            color: '#000',
            fontWeight: 900
        }
    }
}))

export const ArticleItem = ({ article }) => {
    const style = useStyle();
    return (
        <Card className={style.component}>
            <CardContent className={style.container}>
                <Grid container>
                    <Grid item lg={5} md={5} sm={5} xs={12}>
                        <img src={article.url} alt={article.title} className={style.image} />
                    </Grid>
                    <Grid item lg={7} md={7} sm={7} xs={12} className={style.rightContainer}>
                        <Typography className={style.title}>{article.title}</Typography>
                        <Typography className={style.author}><b>Short </b>by {article.author}/{new Date(article.timestamp).toDateString()}</Typography>
                        <Typography className={style.description}>{article.description}</Typography>
                        <Typography className={style.publisher}>
                            Read more at <a href={article.link} target="_blank" rel="noreferrer">{article.publisher}</a>
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}
