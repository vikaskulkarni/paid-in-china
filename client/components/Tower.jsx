import React, { Fragment, Component } from "react";
import "./tower.scss";

class Tower extends Component {
  render() {
    return (
      <Fragment>
        <div className="card">
          <div className="img-box">
            <img
              src={this.props.imageSrc}
              alt={`This ${this.props.title}`}
              title={this.props.title}
            />
            <h4>{`This ${this.props.title}`}</h4>
          </div>

          <div className="content">
            <p>
              {this.props.title}: {this.props.elNo}
            </p>
            <p>
              {this.props.title} Total: {this.props.elExp} Trillion
            </p>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Tower;
