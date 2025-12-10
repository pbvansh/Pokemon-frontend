import { useEffect, useState } from "react";
import Header from "./components/Heder";
import PokemonList from "./components/PokemonList";
import axios from "axios";

const API_URL = "http://localhost:5000/v3/pokemon";

const SORT_OPTIONS = [
  {
    label: "ID",
    value: "id",
  },
  {
    label: "Name",
    value: "name",
  },
  {
    label: "HP",
    value: "hp",
  },
  {
    label: "Attack",
    value: "attack",
  },
  {
    label: "Defense",
    value: "defense",
  },
  {
    label: "Special Attack",
    value: "spattack",
  },
  {
    label: "Special Defense",
    value: "spdefense",
  },
  {
    label: "Speed",
    value: "speed",
  },
  {
    label: "Total",
    value: "total",
  },
];

const SORT_BY_OPTIONS = [
  {
    label: "Ascending",
    value: "asc",
  },
  {
    label: "Descending",
    value: "desc",
  },
];

const TYPE = [
  "Bug",
  "Dark",
  "Dragon",
  "Electric",
  "Fairy",
  "Fighting",
  "Fire",
  "Flying",
  "Ghost",
  "Grass",
  "Ground",
  "Ice",
  "Normal",
  "Poison",
  "Psychic",
  "Rock",
  "Steel",
  "Water",
];

function App() {
  const [listData, setListData] = useState();
  // const [nextUrl, setNextUrl] = useState(null);
  const [q, setQ] = useState("");
  const [sort, setSort] = useState(SORT_OPTIONS[0].value);
  const [sortBy, setSortBy] = useState(SORT_BY_OPTIONS[0].value);
  const [typeFilter, setTypeFilter] = useState(TYPE[0]);

  const fetchData = async (nextUrl) => {
    let URL = API_URL;

    if (nextUrl) {
      URL = nextUrl;
    } else {
      if (q) {
        URL += `?q=${q}`;
      }
      URL += q ? `&sort=${sort}` : `?sort=${sort}`;
      URL += `&order=${sortBy}`;
      URL += `&type=${typeFilter}`;
    }

    const res = await axios.get(URL);
    setListData(res.data);
    // setNextUrl(res.data.next);
    console.log({ data: res.data });

    // return res.data;
  };

  const handleSortChange = (e) => {
    setSort(e.target.value);
  };

  useEffect(() => {
    fetchData();
  }, [q, sort, sortBy, typeFilter]);

  return (
    <>
      <Header setQ={setQ} />
      <div className="mx-12">
        <div className="flex justify-end">
          {/* Sort functionality */}
          <select onChange={handleSortChange} className="p-2 border-2 m-1">
            {SORT_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                Sort by {option.label}
              </option>
            ))}
          </select>
          {/* Sort By */}
          <select
            onChange={(e) => setSortBy(e.target.value)}
            className="p-2 border-2 m-1"
          >
            {SORT_BY_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                Sort by {option.label}
              </option>
            ))}
          </select>

          {/* Type Filter */}

          <select
            onChange={(e) => setTypeFilter(e.target.value)}
            className="p-2 border-2 m-1"
          >
            {TYPE.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <PokemonList listData={listData} onLoadMore={fetchData} />
      </div>
    </>
  );
}

export default App;
