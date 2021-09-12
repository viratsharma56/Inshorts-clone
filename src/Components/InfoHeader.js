import { Box, Typography, makeStyles } from "@material-ui/core";
import React from "react";

const appleStore = 'https://assets.inshorts.com/website_assets/images/appstore.png';
const googleStore = 'https://assets.inshorts.com/website_assets/images/playstore.png';

const useStyle = makeStyles( theme => ({
    container: {
        backgroundColor: '#f44336',
        color: '#ffffff',
        height: 48,
        display: 'flex',
        alignItems: 'center',
        [theme.breakpoints.down('md')]: {
          display: 'none'
        }
    },
    infoText: {
        fontSize: 14,
        marginLeft: 50
    },
    store: {
        height: 34,
        marginRight: 17
    }
}))

export const InfoHeader = () => {
    const style = useStyle();
  return (
    <div>
      <Box className={style.container}>
        <Typography className = {style.infoText}>
          For the best experience use <b>inshorts</b> app on your smartphone
        </Typography>
        <Box style={{marginLeft: 184, marginTop: 6}}>
            <img src={appleStore} alt="iStore" className={style.store}/>
            <img src={googleStore} alt="Play Store" className={style.store} />
        </Box>
      </Box>
    </div>
  );
};
