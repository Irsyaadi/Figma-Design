import { useState } from "react";

export default function SelectPagesModal() {
  const pages = ["Page 1", "Page 2", "Page 3", "Page 4"];
  const [selected, setSelected] = useState([]);

  const allSelected = selected.length === pages.length;

  const toggleAll = () => {
    setSelected(allSelected ? [] : pages);
  };

  const togglePage = (page) => {
    setSelected(prev =>
      prev.includes(page)
        ? prev.filter(p => p !== page)
        : [...prev, page]
    );
  };

  return (
    <div className="modal">
      <div className="list">
        <label className="row">
          <span>All pages</span>
          <input type="checkbox" checked={allSelected} onChange={toggleAll} />
        </label>

        <hr />

        {pages.map(page => (
          <label className="row" key={page}>
            <span>{page}</span>
            <input
              type="checkbox"
              checked={selected.includes(page)}
              onChange={() => togglePage(page)}
            />
          </label>
        ))}
      </div>

      <button
        className="done-btn"
        onClick={() =>
          alert(
            selected.length
              ? `Selected: ${selected.join(", ")}`
              : "No pages selected"
          )
        }
      >
        Done
      </button>
    </div>
  );
}
