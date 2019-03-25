import React, { Component } from "react";
import './indexstyles.css';
class Counter extends Component {
  // state = {
  //   value: this.props.counter.value,
  //   tags: ["tag1", "tag2", "tag3"]
  // };

  //   constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }

  // handleIncrement = () => {
  //   //    stand alone function and without create and object.
  //   this.setState({ value: this.state.value + 1 });
  // };

  componentDidUpdate(prevProps, prevState) {
    // console.log('prevState:', prevState);
    // console.log('prevProps:', prevProps);
  };

  componentWillUnmount() {
    //console.log('Counter Unmounted');
  };

  render() {
    return (
      <div>
        <table>
          <thead></thead>
          <tbody>
            <tr>
              <td>
                <span>{this.props.counter.item}</span>
              </td>
              <td>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
              </td>
              <td>
                <button
                  // onClick={this.handleIncrement}
                  onClick={() => this.props.onIncrement(this.props.counter)}
                  className="btn btn-secondary btn-sm m-2 btn-plus-minus">
                  <i className="fa fa-plus"></i>
                </button>
              </td>
              <td>
                <button
                  onClick={() => this.props.onDecrement(this.props.counter)}
                  className="btn btn-secondary btn-sm m-2 btn-plus-minus">
                  <i className="fa fa-minus"></i>
                </button>
              </td>
              <td>
                <button
                  onClick={() => this.props.onEdit(this.props.counter.id)}
                  className="btn btn-success btn-sm m-2 btn-edit">
                  <i className="fa fa-pencil"></i>
                </button>
              </td>
              <td>
                <button
                  onClick={() => this.props.onDelete(this.props.counter.id)}
                  className="btn btn-danger btn-sm m-2 btn-delete">
                  <i className="fa fa-trash"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }

  renderTags() {
    if (this.state.tags.length === 0) {
      return <p>There is no tags!</p>;
    } else {
      return (
        <ul>
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      );
    }
  }
}

export default Counter;
