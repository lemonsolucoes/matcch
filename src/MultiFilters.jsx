import React, { useEffect, useState } from "react";
import { gigs } from "./data";
import "./pages/gigs/Gigs.scss";
import GigCard from "./components/gigCard/GigCard";
import "./multifilters.scss";

export default function MultiFilters() {
  const [selectedCategoryFilters, setSelectedCategoryFilters] = useState([]);
  const [selectedAreaFilters, setSelectedAreaFilters] = useState([]);
  const [selectedModalidadeFilters, setSelectedModalidadeFilters] = useState([]);
  const [filteredGigs, setFilteredGigs] = useState(gigs);

  let categoryFilters = ["Design", "Sistemas", "Jogos", "Audiovisual"];
  let areaFilters = ["Realidade Virtual", "Educação", "Animação", "UX", "Som", "Cinema", "Ilustração", "Design Gráfico"]; // Substitua com suas áreas reais
  let modalidadeFilters = ["Monografia", "Artigo", "Relatório Técnico"];

  const handleFilterButtonClick = (filter, filterType) => {
    if (filterType === "category") {
      const selectedFilters = selectedCategoryFilters.includes(filter)
        ? selectedCategoryFilters.filter((el) => el !== filter)
        : [...selectedCategoryFilters, filter];

      setSelectedCategoryFilters(selectedFilters);
    } else if (filterType === "area") {
      const selectedFilters = selectedAreaFilters.includes(filter)
        ? selectedAreaFilters.filter((el) => el !== filter)
        : [...selectedAreaFilters, filter];

      setSelectedAreaFilters(selectedFilters);
    } else if (filterType === "modalidade") {
      const selectedFilters = selectedModalidadeFilters.includes(filter)
        ? selectedModalidadeFilters.filter((el) => el !== filter)
        : [...selectedModalidadeFilters, filter];

      setSelectedModalidadeFilters(selectedFilters);
    }
  };

  useEffect(() => {
    filterGigs();
  }, [selectedCategoryFilters, selectedAreaFilters,selectedModalidadeFilters]);

  const filterGigs = () => {
    let tempGigs = gigs;

    if (selectedCategoryFilters.length > 0) {
      tempGigs = tempGigs.filter((gig) =>
        selectedCategoryFilters.includes(gig.category)
      );
    }

    if (selectedAreaFilters.length > 0) {
      tempGigs = tempGigs.filter((gig) =>
        selectedAreaFilters.includes(gig.area)
      );
    }

    if (selectedModalidadeFilters.length > 0) {
      tempGigs = tempGigs.filter((gig) =>
        selectedModalidadeFilters.includes(gig.modalidade)
      );
    }

    setFilteredGigs(tempGigs);
  };

  return (
    <div>
      <div className="filter-buttons-container">
      <div className="filter-group">
      <p>Modalidade: </p>
        <div className="modalidade">
        {modalidadeFilters.map((modalidade, idx) => (
          <button
            onClick={() => handleFilterButtonClick(modalidade, "modalidade")}
            className={`filter-button ${
              selectedModalidadeFilters?.includes(modalidade) ? "active" : ""
            }`}
            key={`modalidade-filters-${idx}`}
          >
            {modalidade}
          </button>
        ))}
        </div>
      </div>

      <div className="filter-group">
      <p>Trilhas: </p>
      <div className="trilhas">
        {categoryFilters.map((category, idx) => (
          <button
            onClick={() => handleFilterButtonClick(category, "category")}
            className={`filter-button ${
              selectedCategoryFilters?.includes(category) ? "active" : ""
            }`}
            key={`category-filters-${idx}`}
          >
            {category}
          </button>
        ))}
        </div>
</div>

<div className="filter-group">
<p>Áreas de interesse: </p>
        <div className="areas">
        {areaFilters.map((area, idx) => (
          <button
            onClick={() => handleFilterButtonClick(area, "area")}
            className={`filter-button ${
              selectedAreaFilters?.includes(area) ? "active" : ""
            }`}
            key={`area-filters-${idx}`}
          >
            {area}
          </button>
        ))}
        </div>
 </div>

      </div>

      <div className="cards">
        {filteredGigs.map((gig) => 
            <GigCard key={gig.id} item={gig}/>
          )}
      </div>
    </div>
  );
}