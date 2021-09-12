import { Box, makeStyles } from "@material-ui/core";
import { Articles } from "./Components/Articles";
import { Header } from "./Components/Header";
import { InfoHeader } from "./Components/InfoHeader";

const useStyle = makeStyles( theme => ({
  container: {
    marginTop: 110,
    width: '59%',
    margin: '0 auto',
    [theme.breakpoints.down('md')]: {
      width: '75%'
    },
    [theme.breakpoints.down('sm')]: {
      width: '85%'
    }
  },
}));

function App() {
  const style = useStyle();
  return (
    <Box>
      <Header />
      <Box className={style.container}>
        <InfoHeader />
        <Articles/>
      </Box>
    </Box>
  );
}

export default App;
