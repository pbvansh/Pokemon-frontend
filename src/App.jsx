import { useEffect, useState } from "react";
import Header from "./components/Heder";
import PokemonList from "./components/PokemonList";
import axios from "axios";

const API_URL = "http://localhost:5000/v3/pokemon";

function App() {
  const [listData, setListData] = useState();
  const [nextUrl, setNextUrl] = useState(null);
  const [q, setQ] = useState("");
  const fetchData = async () => {
    let URL = API_URL;

    if (q) {
      URL += `?q=${q}`;
    } else if (nextUrl) {
      URL = nextUrl;
    }

    const res = await axios.get(URL);
    setListData(res.data);
    setNextUrl(res.data.next);
    console.log({ data: res.data });

    // return res.data;
  };

  useEffect(() => {
    fetchData();
  }, [q]);

  return (
    <>
      <Header setQ={setQ} />
      <PokemonList listData={listData} onLoadMore={fetchData} />
    </>
  );
}

export default App;
