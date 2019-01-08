import React from "react";

class Page extends React.Component {
  render() {
    return (
      <div>
        <nav>
          <a href="_">Menu</a>
        </nav>
        {this.props.children}
      </div>
    );
  }
}

export default Page;
