import React from "react";
import Main from "./MainPage/Main";
import Sidebar from "./Sidebar/Sidebar";

const FilterPage = () => {
  return (
    <section>
      <div className="container-fluid">
        <div className="row">
          <div className="col-3">
            <Sidebar/>
          </div>
          <div className="col-9">
            <Main/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FilterPage;
