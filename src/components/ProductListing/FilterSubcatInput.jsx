import React from "react";

const FilterSubcatInput = ({
  filterState,
  filterDispatch,
  subcategory,
  items,
}) => {
  return (
    <div className="input-checkbox">
      <input
        type="checkbox"
        name={subcategory.subcategorySlug}
        id={subcategory.subcategorySlug}
        checked={filterState.subcatFilter[subcategory.subcategorySlug]}
        onChange={(e) => {
          filterDispatch({
            type: "SUBCAT_FILTER",
            payload: {
              [subcategory.subcategorySlug]: e.target.checked ? true : false,
            },
          });
        }}
      />
      <label htmlFor={subcategory.subcategorySlug}>
        {subcategory.name} (
        {
          items.filter(
            (item) => item.subcategorySlug === subcategory.subcategorySlug
          ).length
        }
        )
      </label>
    </div>
  );
};
export default FilterSubcatInput;
