// import { useState } from "react";
import "./Filter.scss";

export default function Filter({ filters = [], setFilters, categoryCount }) {
  // const [count, setCount] = useState([]);

    // const categoryCount = prod

  const handleChange = (e) => {
    const value = e.target.value;

    setFilters((prev = []) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  return (
    <div className="filter">
      <button className="filter__restart" onClick={() => setFilters([])}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
          <path d="M64 128C51.1 128 39.4 135.8 34.4 147.8C29.4 159.8 32.2 173.5 41.4 182.6L224 365.3L224 480C224 488.5 227.4 496.6 233.4 502.6L297.4 566.6C299.9 569.1 302.7 571.1 305.7 572.6C284.5 541.7 272.1 504.3 272.1 464C272.1 364.6 347.6 282.9 444.4 273L534.8 182.6C544 173.4 546.7 159.7 541.7 147.7C536.7 135.7 524.9 128 512 128L64 128zM464 608C543.5 608 608 543.5 608 464C608 384.5 543.5 320 464 320C384.5 320 320 384.5 320 464C320 543.5 384.5 608 464 608zM523.3 427.3L486.6 464L523.3 500.7C529.5 506.9 529.5 517.1 523.3 523.3C517.1 529.5 506.9 529.5 500.7 523.3L464 486.6L427.3 523.3C421.1 529.5 410.9 529.5 404.7 523.3C398.5 517.1 398.5 506.9 404.7 500.7L441.4 464L404.7 427.3C398.5 421.1 398.5 410.9 404.7 404.7C410.9 398.5 421.1 398.5 427.3 404.7L464 441.4L500.7 404.7C506.9 398.5 517.1 398.5 523.3 404.7C529.5 410.9 529.5 421.1 523.3 427.3z" />
        </svg>
        Resetați filtrele
      </button>
      <div className="filter__box">
        <p className="filter__title">Lampi</p>
        <div className="filter__options">
          <div className="custom-checkbox">
            <input
              className="custom-checkbox__field"
              type="checkbox"
              id="pendant"
              value="pendant"
              checked={filters.includes("pendant")}
              onChange={handleChange}
            />
            <label className="custom-checkbox__label" htmlFor="pendant">
              <span className="custom-checkbox__label-text">
                Lumini suspendate
              </span>
              <span className="custom-checkbox__label-count">{categoryCount["pendant"] || 0}</span>
            </label>
          </div>
          <div className="custom-checkbox">
            <input
              className="custom-checkbox__field"
              type="checkbox"
              id="ceiling"
              value="ceiling"
              checked={filters.includes("ceiling")}
              onChange={handleChange}
            />
            <label className="custom-checkbox__label" htmlFor="ceiling">
              <span className="custom-checkbox__label-text">Plafoniere</span>
              <span className="custom-checkbox__label-count">{categoryCount["ceiling"] || 0} </span>
            </label>
          </div>
          <div className="custom-checkbox">
            <input
              className="custom-checkbox__field"
              type="checkbox"
              id="overhead"
              value="overhead"
              checked={filters.includes("overhead")}
              onChange={handleChange}
            />
            <label className="custom-checkbox__label" htmlFor="overhead">
              <span className="custom-checkbox__label-text">
                Corpuri de iluminat montate pe suprafață
              </span>
              <span className="custom-checkbox__label-count">{categoryCount["overhead"] || 0}</span>
            </label>
          </div>
          <div className="custom-checkbox">
            <input
              className="custom-checkbox__field"
              type="checkbox"
              id="point"
              value="point"
              checked={filters.includes("point")}
              onChange={handleChange}
            />
            <label className="custom-checkbox__label" htmlFor="point">
              <span className="custom-checkbox__label-text">Spoturi</span>
              <span className="custom-checkbox__label-count">{categoryCount["point"] || 0}</span>
            </label>
          </div>
          <div className="custom-checkbox">
            <input
              className="custom-checkbox__field"
              type="checkbox"
              id="nightlights"
              value="nightlights"
              checked={filters.includes("nightlights")}
              onChange={handleChange}
            />
            <label className="custom-checkbox__label" htmlFor="nightlights">
              <span className="custom-checkbox__label-text">
                Lumini de noapte
              </span>
              <span className="custom-checkbox__label-count">{categoryCount["nightlights"] || 0}</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
