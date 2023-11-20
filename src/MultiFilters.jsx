import React, { useEffect, useState } from "react";
import { gigs } from "./data";
import "./pages/gigs/Gigs.scss";
import GigCard from "./components/gigCard/GigCard";
import "./multifilters.scss";


export default function MultiFilters() {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredGigs, setFilteredGigs] = useState(gigs);

  let filters = ["Design", "Sistemas", "Jogos", "Audiovisual"];

  const handleFilterButtonClick = (selectedCategory) => {
    if (selectedFilters.includes(selectedCategory)) {
      let filters = selectedFilters.filter((el) => el !== selectedCategory);
      setSelectedFilters(filters);
    } else {
      setSelectedFilters([...selectedFilters, selectedCategory]);
    }
  };

  useEffect(() => {
    filterGigs();
  }, [selectedFilters]);

  const filterGigs = () => {
    if (selectedFilters.length > 0) {
      let tempGigs = selectedFilters.map((selectedCategory) => {
        let temp = gigs.filter((gig) => gig.category === selectedCategory);
        return temp;
      });
      setFilteredGigs(tempGigs.flat());
    } else {
      setFilteredGigs([...gigs]);
    }
  };

  return (
    <div>
      <div className="filter-buttons-container">
        {filters.map((category, idx) => (
          <button
            onClick={() => handleFilterButtonClick(category)}
            className={`filter-button ${
              selectedFilters?.includes(category) ? "active" : ""
            }`}
            key={`filters-${idx}`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="cards">
        {filteredGigs.map((gig) => (
          <GigCard key={gig.id} item={gig} />
        ))}
      </div>
    </div>
  );
}
