const Header = ({ setQ }) => {
  // Add debounce to the search input to limit the number of calls
  const handleSearch = (e) => {
    setQ(e.target.value);
  };

  return (
    <div className="flex h-[60px] bg-[#F34D61] w-full items-center justify-around ">
      <img src="src/components/Title.png" alt="Title" className="h-8" />
      <div className="flex gap-2 items-center bg-white rounded-md p-2 h-[36px]">
        <img
          src="src/components/search.png"
          alt="Title"
          className="h-[20px] w-[20px]"
        />
        <input
          type="text"
          placeholder="Search by name"
          className=" outline-none border-0 p-2"
          onChange={handleSearch}
        />
      </div>
    </div>
  );
};

export default Header;
