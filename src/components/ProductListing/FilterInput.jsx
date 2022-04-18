import React from "react";

const FilterInput = ({ setSearchParams, subcategory }) => {
  return (
    <div className="input-checkbox">
      <input
        type="checkbox"
        name={subcategory.subcategorySlug}
        id={subcategory.subcategorySlug}
        onChange={(e) => {
          let filter = e.target.name;
          if (e.target.checked) {
            setSearchParams({ filter });
          } else {
            setSearchParams({});
          }
        }}
      />
      <label for={subcategory.subcategorySlug}>{subcategory.name}</label>
    </div>
  );
};
export default FilterInput;
