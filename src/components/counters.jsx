import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    item: this.props.itemName
  }

  constructor(props) {
    super(props);
    //console.log('Counters Constructor');
  };

  onClickOfButton = (e, isEditId) => {
    //let item = this.state.item;
    let item = this.props.itemName;
    this.props.onAdd(item, isEditId);
    // this.setState({
    //   item: ''
    // });
  }

  // onchangeItem = (event) => {
  //   this.setState({ item: event.target.value });
  // };

  // componentDidUpdate() {
  //   this.setState({ item: this.props.itemName });
  // }

  render() {
    //console.log('Counters Render');
    //Distructuring Arguments
    const { onReset, counters, onDelete, onEdit, onIncrement, onDecrement } = this.props;

    return (
      <div>
        {/* {counters.length > 0 && <button className="btn btn-primary btn-sm m-2" onClick={onReset}>Reset</button>} */}
        <div className="row">
          <div className="col-1">
            <button className="btn btn-primary btn-sm m-2" disabled={counters.length <= 0 ? true : false} onClick={onReset}>Reset</button>
          </div>
          <div className="col-3">
            <input className="form-control mt-2" type="text" value={this.props.itemName} onChange={(e) => this.props.onItemChange(e)} />
          </div>
          <div className="col-3">
            <button className="btn btn-primary btn-sm m-2" onClick={(e) => this.onClickOfButton(e, this.props.isEditId)}>{this.props.isEditId === 0 ? 'Add' : 'Update'}</button>
            {this.props.isEditId !== 0 && <button className="btn btn-primary btn-sm m-2" onClick={(e) => this.props.onCancel(e)}>Cancel</button>}
          </div>
        </div>
        <table>
          <tbody>
            {counters.map(counter => (
              <tr key={counter.id}>
                <td>
                  <Counter
                    key={counter.id}
                    onDelete={onDelete}
                    onEdit={onEdit}
                    onIncrement={onIncrement}
                    onDecrement={onDecrement}
                    counter={counter} />
                </td>
              </tr>
            ))}
            {counters.length === 0 && <tr><td>No Recored Found.</td></tr>}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Counters;
