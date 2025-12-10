const PokemonList = ({ listData = [], onLoadMore }) => {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-4">
        {listData &&
          listData.data &&
          listData.data.map((pokemon) => {
            console.log({ pokemon });

            return (
              <div className="flex flex-col items-center p-4 rounded-sm border-2 border-black relative">
                <p className="absolute top-5 right-4">#{pokemon.id}</p>
                <img
                  src={pokemon.image.hires}
                  className="h-[200px] w-[200px]"
                />
                <p className="my-2 font-semibold">{pokemon.name.english}</p>
                <div>
                  {pokemon.type.map((type) => {
                    return (
                      <span className="m-2 bg-amber-200 px-4 py-1 rounded-full">
                        {type}
                      </span>
                    );
                  })}
                </div>
              </div>
            );
          })}
      </div>
      <div className="flex items-center justify-center">
        <button
          onClick={() => onLoadMore(listData.next)}
          className="bg-[#F34D61] px-4 py-1 rounded-full text-white mb-5 cursor-pointer"
        >
          Load More
        </button>
      </div>
    </>
  );
};

export default PokemonList;
