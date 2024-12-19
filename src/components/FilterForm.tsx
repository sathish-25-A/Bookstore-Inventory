import React, { useState } from "react";
import { Filters } from "../types/types";

function FilterForm(props: { filters: Filters; onChange: (filters: Filters) => void }) {
  const [localFilters, setLocalFilters] = useState<Filters>(props.filters);

  function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value } = event.target;
    setLocalFilters((prev) => ({ ...prev, [name]: value }));
  }

  function handleApplyFilters(event: React.FormEvent) {
    event.preventDefault();
    props.onChange(localFilters);

    // Reset the author field after applying the filter
    setLocalFilters((prev) => ({ ...prev, author: "" }));
  }

  return (
    <form className="filter-form" onSubmit={handleApplyFilters}>
      <select name="genre" value={localFilters.genre || ""} onChange={handleChange}>
        <option value="">All Genres</option>
        <option value="Fiction">Fiction</option>
        <option value="Non-Fiction">Non-Fiction</option>
        <option value="Sci-Fi">Sci-Fi</option>
        <option value="Fantasy">Fantasy</option>
      </select>
      <input
        type="text"
        name="author"
        placeholder="Search by Author"
        value={localFilters.author || ""}
        onChange={handleChange}
      />
      <button type="submit">Apply Filters</button>
    </form>
  );
}

export default FilterForm;
