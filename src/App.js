import { Box, makeStyles } from "@material-ui/core";
import { Header } from "./Components/Header";
import { InfoHeader } from "./Components/InfoHeader";

const useStyle = makeStyles({
  container: {
    marginTop: 110,
  },
});

function App() {
  const style = useStyle();
  return (
    <Box>
      <Header />
      <Box className={style.container}>
        <InfoHeader />
      </Box>
    </Box>
  );
}

export default App;
