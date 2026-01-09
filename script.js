const allPagesCheckbox = document.getElementById("all-pages");
const pageCheckboxes = document.querySelectorAll(".page");

// Toggle all pages
allPagesCheckbox.addEventListener("change", () => {
  pageCheckboxes.forEach(cb => {
    cb.checked = allPagesCheckbox.checked;
  });
});

// Sync master checkbox
pageCheckboxes.forEach(cb => {
  cb.addEventListener("change", () => {
    const allChecked = [...pageCheckboxes].every(c => c.checked);
    allPagesCheckbox.checked = allChecked;
  });
});

function handleDone() {
  const selected = [...pageCheckboxes]
    .map((cb, i) => cb.checked ? `Page ${i + 1}` : null)
    .filter(Boolean);

  alert(
    selected.length
      ? `Selected: ${selected.join(", ")}`
      : "No pages selected"
  );
}
