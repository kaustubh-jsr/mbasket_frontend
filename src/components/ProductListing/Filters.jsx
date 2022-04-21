import React from "react";
import FilterSubcatInput from "./FilterSubcatInput";

function Filters({ subcats, filterState, filterDispatch }) {
  return (
    <aside className="sidenav sidenav-filter-section">
      <section className="sidenav-section">
        <div className="sidenav-section__header filter-header">
          Filters
          <button
            className="btn btn-outline-secondary"
            onClick={() => filterDispatch({ type: "CLEAR_ALL" })}
          >
            Clear all
          </button>
        </div>

        <fieldset className="filter-type">
          <legend className="h5">Subcategories</legend>
          {subcats.map((subcategory) => (
            <FilterSubcatInput
              filterState={filterState}
              filterDispatch={filterDispatch}
              subcategory={subcategory}
            />
          ))}
        </fieldset>
        <fieldset className="filter-type">
          <legend className="h5">Availablity</legend>
          <div className="input-checkbox">
            <input
              type="checkbox"
              name="outOfStock"
              id="outOfStock"
              checked={filterState.includeOutOfStock ? true : false}
              onChange={() => filterDispatch({ type: "TOGGLE_AVAIL_FILTER" })}
            />
            <label htmlFor="outOfStock">Include Out of Stock</label>
          </div>
        </fieldset>
        <fieldset className="filter-type">
          <legend className="h5">Discount</legend>
          <div className="input-checkbox">
            <input
              type="radio"
              name="discount"
              id="discFiftyPlus"
              checked={
                filterState.discFilter &&
                filterState.discFilter === "discFiftyPlus"
              }
              onChange={() =>
                filterDispatch({
                  type: "DISCOUNT_FILTER",
                  payload: "discFiftyPlus",
                })
              }
            />
            <label htmlFor="discFiftyPlus">50% or more</label>
          </div>
          <div className="input-checkbox">
            <input
              type="radio"
              name="discount"
              id="discFortyPlus"
              checked={
                filterState.discFilter &&
                filterState.discFilter === "discFortyPlus"
              }
              onChange={() =>
                filterDispatch({
                  type: "DISCOUNT_FILTER",
                  payload: "discFortyPlus",
                })
              }
            />
            <label htmlFor="discFortyPlus">40% or more</label>
          </div>
          <div className="input-checkbox">
            <input
              type="radio"
              name="discount"
              id="discThirtyPlus"
              checked={
                filterState.discFilter &&
                filterState.discFilter === "discThirtyPlus"
              }
              onChange={() =>
                filterDispatch({
                  type: "DISCOUNT_FILTER",
                  payload: "discThirtyPlus",
                })
              }
            />
            <label htmlFor="discThirtyPlus">30% or more</label>
          </div>
          <div className="input-checkbox">
            <input
              type="radio"
              name="discount"
              id="discTwentyPlus"
              checked={
                filterState.discFilter &&
                filterState.discFilter === "discTwentyPlus"
              }
              onChange={() =>
                filterDispatch({
                  type: "DISCOUNT_FILTER",
                  payload: "discTwentyPlus",
                })
              }
            />
            <label htmlFor="discTwentyPlus">20% or more</label>
          </div>
          <div className="input-checkbox">
            <input
              type="radio"
              name="discount"
              id="discTenPlus"
              checked={
                filterState.discFilter &&
                filterState.discFilter === "discTenPlus"
              }
              onChange={() =>
                filterDispatch({
                  type: "DISCOUNT_FILTER",
                  payload: "discTenPlus",
                })
              }
            />
            <label htmlFor="discTenPlus">10% or more</label>
          </div>
          <div className="input-checkbox">
            <input
              type="radio"
              name="discount"
              id="discTenMinus"
              checked={
                filterState.discFilter &&
                filterState.discFilter === "discTenMinus"
              }
              onChange={() =>
                filterDispatch({
                  type: "DISCOUNT_FILTER",
                  payload: "discTenMinus",
                })
              }
            />
            <label htmlFor="discTenMinus">10% and below</label>
          </div>
        </fieldset>
        <fieldset className="filter-type">
          <legend className="h5">Sort by</legend>
          <div className="input-checkbox">
            <input
              type="radio"
              name="sort"
              id="priceLowToHigh"
              checked={
                filterState.sortBy && filterState.sortBy === "priceLowToHigh"
              }
              onChange={() =>
                filterDispatch({
                  type: "SORT_BY",
                  payload: "priceLowToHigh",
                })
              }
            />
            <label htmlFor="priceLowToHigh">Price : Low To High</label>
          </div>
          <div className="input-checkbox">
            <input
              type="radio"
              name="sort"
              id="priceHighToLow"
              checked={
                filterState.sortBy && filterState.sortBy === "priceHighToLow"
              }
              onChange={() =>
                filterDispatch({
                  type: "SORT_BY",
                  payload: "priceHighToLow",
                })
              }
            />
            <label htmlFor="priceHighToLow">Price : High To Low</label>
          </div>
          <div className="input-checkbox">
            <input
              type="radio"
              name="sort"
              id="discHighToLow"
              checked={
                filterState.sortBy && filterState.sortBy === "discHighToLow"
              }
              onChange={() =>
                filterDispatch({
                  type: "SORT_BY",
                  payload: "discHighToLow",
                })
              }
            />
            <label htmlFor="discHighToLow">Discount : High to low</label>
          </div>
        </fieldset>
      </section>
    </aside>
  );
}

export default Filters;
