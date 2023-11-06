import { Heading, Center,} from "native-base";
import { Header } from "../components";

const Home = () => {
  return (
    <>
      <Header title={"Mentalife"} />
      <Center flex={1}>
        <Heading>Ini Home Bosku</Heading>
      </Center>
    </>
  );
};

export default Home;