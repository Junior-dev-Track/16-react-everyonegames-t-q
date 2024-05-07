
const Aside = () => {
  return (
    <aside>
      <div className="icon">
        <img src="src/assets/images/logo-game.png" alt="" />
      </div>
      <div className="genres">
        <ul>
          <li>
            <div className="checkbox-div">
              <input type="checkbox" id="action" name="action" />
              <label htmlFor="action">Action</label>
            </div>
          </li>
          <li>
            <div className="checkbox-div">
              <input type="checkbox" id="adventure" name="adventure" />
              <label htmlFor="adventure">Adventure</label>
            </div>
          </li>
          <li>
            <div className="checkbox-div">
              <input type="checkbox" id="rpg" name="rpg" />
              <label htmlFor="rpg">RPG</label>
            </div>
          </li>
          <li>
            <div className="checkbox-div">
              <input type="checkbox" id="simulation" name="simulation" />
              <label htmlFor="simulation">Simulation</label>
            </div>
          </li>
          <li>
            <div className="checkbox-div">
              <input type="checkbox" id="strategy" name="strategy" />
              <label htmlFor="strategy">Strategy</label>
            </div>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Aside;
