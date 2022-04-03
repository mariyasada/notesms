import React, { useState } from "react";
import "../FilterBox/FilterBar.css";
import { useNotes } from "../../Context/note-context";

// ///////// filter constant
const tagFilters = ["Home", "Class", "Work", "Exercise", "Teams"];
const PriorityFilters = ["Low", "Medium", "High"];

export const FilterBar = () => {
  const { state, dispatch } = useNotes();

  const TagClickHandler = (event) => {
    let tagChecked = event.target.checked;
    let tagName = event.target.value;
    if (tagChecked) {
      dispatch({ type: "SET_TAG", payload: tagName });
    } else dispatch({ type: "UNSET_TAG", payload: tagName });
  };

  const PriorityHandler = (event) => {
    let priorityChecked = event.target.checked;
    let priorityName = event.target.value;
    if (priorityChecked) {
      dispatch({ type: "SET_PRIORITY", payload: priorityName });
    } else dispatch({ type: "UNSET_PRIORITY", payload: priorityName });
  };

  return (
    <div className="filterbar-conatiner flex-center flex-direction-column">
      <div className="filter-and-clear-filter-container flex-center">
        <h2 className="text-size-md filter">Filter</h2>
        <h4
          className="clear-filters"
          onClick={() => dispatch({ type: "CLEAR_ALL_FILTERS" })}
        >
          Clear All
        </h4>
      </div>
      <ul className="filter-items-container flex-direction-column flex-center">
        <li className="filter-list-item flex-center">
          <label htmlFor="sort-by-date" className="sortbydate">
            <input
              type="radio"
              name="ragio-grp"
              value="sort-by-date"
              onChange={() => dispatch({ type: "SORT_BY_DATE" })}
              checked={state.sortByDate === "sort_By_Date"}
            />
            Sort By Date
          </label>
        </li>
        <p className="filter-priority flex-center">Priority:</p>
        {PriorityFilters.map((priority) => {
          return (
            <div className="priority-container flex-center" key={priority.id}>
              <li className="filter-list-item flex-center">
                <label htmlFor={priority}>
                  <input
                    type="checkbox"
                    name="ragio-grp"
                    value={priority}
                    onChange={(event) => PriorityHandler(event)}
                    checked={state.sortByPriority.includes(priority)}
                  />
                  {priority}
                </label>
              </li>
            </div>
          );
        })}
        <p className="filter-tags flex-center">Tags:</p>
        {tagFilters.map((tagname) => {
          return (
            <div
              className="tags-container flex-center flex-direction-column"
              key={tagname.id}
            >
              <li className="filter-list-item flex-center">
                <label htmlFor={tagname}>
                  <input
                    type="checkbox"
                    name="ragio-grp"
                    value={tagname}
                    id={tagname}
                    onChange={(event) => TagClickHandler(event)}
                    checked={state.sortByTag.includes(tagname)}
                  />
                  {tagname}
                </label>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
