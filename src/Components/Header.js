import { AppBar, makeStyles, Toolbar } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles({
    header : {
        backgroundColor : '#fff',
        height : 70,
    }, 
    logo : {
        height : 55,
        margin: 'auto'
    },
    menu : {
        color: 'black'
    }
})

export const Header = () => {
    const style = useStyles();
    return (
        <div>
            <AppBar className={style.header}>
                <Toolbar>
                    <i className={`fas fa-bars ${style.menu}`}></i>
                    <img src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png" alt="Inshorts" className={style.logo}/>
                </Toolbar>
            </AppBar>
        </div>
    )
}
