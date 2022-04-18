import React from "react";
import FilterInput from "./FilterInput";

function Filters({ subcats, setSearchParams }) {
  return (
    <aside className="sidenav sidenav-filter-section">
      <section className="sidenav-section">
        <div className="sidenav-section__header filter-header">
          Filters
          <button className="btn btn-outline-secondary">Clear all</button>
        </div>
        <div className="filter-type">
          <h5>Subcategories</h5>
          {subcats.length ? (
            subcats.map((subcategory) => (
              <FilterInput
                setSearchParams={setSearchParams}
                subcategory={subcategory}
              />
            ))
          ) : (
            <h4>
              Products coming soon, meanwhile checkout the Fruits and Vegetables
              and Snacks categories.
            </h4>
          )}
        </div>
      </section>
    </aside>
  );
}

export default Filters;
