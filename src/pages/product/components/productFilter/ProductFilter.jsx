import { useState } from "react";
import "./productFilter.scss";
import filter from "../../../../assets/filter.svg";

const ProductFilter = ({
  categories,
  selectedCategory,
  setSelectedCategory,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="ProductFilter">
      <button onClick={() => setOpen(!open)}>
        <img src={filter} alt="" />
      </button>

      {open && (
        <div className="filterDropdown">
          
          <div
            className={`filterItem ${
              selectedCategory === "all" ? "active" : ""
            }`}
            onClick={() => {
              setSelectedCategory("all");
              setOpen(false);
            }}
          >
            All Products
          </div>

          {categories.map((cat) => (
            <div
              key={cat.id}
              className={`filterItem ${
                selectedCategory === cat.id ? "active" : ""
              }`}
              onClick={() => {
                setSelectedCategory(cat.id);
                setOpen(false);
              }}
            >
              {cat.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductFilter;