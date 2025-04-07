import React from 'react'

const SearchFilter = ({
    search,
    setSearch,
    filter,
    setFilter,
    countries,
    setCountries,
}) => {
    const handleInputChange = (event) => {
        event.preventDefault();
        setSearch(event.target.value);
      };
    
      const handleSelectChange = (event) => {
        event.preventDefault();
        setFilter(event.target.value);
      };    

    const sortCountries = (value) => {
        const sortCountry = [...countries].sort((a, b) => {
          return value === "asc"
            ? a.name.common.localeCompare(b.name.common)
            : b.name.common.localeCompare(a.name.common);
        });
        setCountries(sortCountry);
      };

  return (
    <section className="section-searchFilter container">
        <div>
            <input 
                type="text"
                placeholder='Search'
                value={search}
                onChange={handleInputChange} 
            />
        </div>

        <div>
            <button onClick={() => sortCountries("asc")}>Asc</button>
        </div>
        
        <div>
            <button onClick={() => sortCountries("des")}>Des</button>
        </div>

        <div>
            <select className="select-section" value={filter} onChange={handleSelectChange}>
                <option value="all">All</option>
                <option value="africa">Africa</option>
                <option value="americas">Americas</option>
                <option value="asia">Asia</option>
                <option value="europe">Europe</option>
                <option value="oceania">Oceania</option>
            </select>
        </div>
    </section>
  );
};

export default SearchFilter
