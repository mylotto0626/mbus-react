import React, { Component } from "react";


class imagefilter extends Component {
  render() {
    return (
      <div>
        <div id="filter-list">
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <a href="#" className="nav-link active">
                View all
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                ART FAIR
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                BIENNALE
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                EXHIBITION
              </a>
            </li>

            <li className="nav-item">
              <a href="#" className="nav-link active">
                METAVERSE
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link active">
                Online VR Exhibition
              </a>
            </li>

            <li className="nav-item">
              <a href="#" className="nav-link active">
                SHOW ROOM
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default imagefilter;
