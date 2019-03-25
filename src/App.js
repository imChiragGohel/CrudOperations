import React, { Component } from 'react';
import NavBar from './components/navbar';
import Counters from './components/counters';
import './App.css';

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4, item: 'Vadapav' },
      { id: 2, value: 0, item: 'Dabeli' },
      { id: 3, value: 0, item: 'Samosa' },
      { id: 4, value: 0, item: 'Pakoda' }
    ],
    itemName: '',
    isEditId: 0
  };

  constructor() {
    super();
    //console.log('App Constructor');
    //console.log('storage',localStorage.getItem('mycounters'));
    //localStorage.removeItem('mycounters');
  };

  componentDidMount() {
    //console.log('App Mounted');
    let state = localStorage.getItem('mycounters');
    if (state) {
      let items = JSON.parse(state);
      this.setState({ counters: items.counters });
    }
  };

  handelAdd = (itemname, isEditId) => {
    const counters = [...this.state.counters];
    if (itemname.trim() != "") {
      if (counters.length < 7) {
        var existsele = counters.find(n => n.item === itemname || n.id === isEditId);
        if (existsele) {
          var name = counters.find(n => n.item === itemname);
          if (name) {
            alert('Oops! Itemname already exist.');
          } else {
            this.itemEdit(counters, existsele, itemname);
            this.stateUpdate(counters);
          }
        } else {
          this.itemAdd(counters, itemname);
          this.stateUpdate(counters);
        }
      } else {
        alert('Oops! Maximum 7 counter add');
      }
    } else {
      alert('Oops! Please enter item name');
    }
  };

  hendalCancel = (e) => {
    const counters = [...this.state.counters];
    this.stateUpdate(counters);
  };

  itemAdd(counters, itemname) {
    var id = counters.map(m => { return m.id });
    var maxid = Math.max.apply(Math, id);
    counters.push({
      id: maxid != '-Infinity' ? maxid + 1 : 1, value: 0, item: itemname
    });
  }

  itemEdit(counters, existsele, itemname) {
    existsele.item = itemname;
    let index = counters.indexOf(existsele);
    counters[index] = existsele;
  }

  handelEdit = (e) => {
    var existsitem = this.state.counters.find(n => n.id === e);
    if (existsitem) {
      this.setState({ itemName: existsitem.item, isEditId: e });
    }
  };

  onchangeItem = (event) => {
    this.setState({ itemName: event.target.value });
  };

  handelDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    if (counters[index].value > 0) {
      counters[index].value--;
      this.stateUpdate(counters);
    }
  };

  handelIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.stateUpdate(counters);
  };

  hamdelDelete = (counterId) => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.stateUpdate(counters);
  };

  hendleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0
      return c;
    });
    this.stateUpdate(counters);
  };

  stateUpdate(counters) {
    localStorage.removeItem('mycounters');
    this.setState({ itemName: '', isEditId: 0, counters });
    setTimeout(() => {
      localStorage.setItem('mycounters', JSON.stringify(this.state));
    }, 100);
  };


  render() {
    //console.log('App Render');
    return (
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length} />
        <main className="container">
          <Counters
            isEditId={this.state.isEditId}
            itemName={this.state.itemName}
            counters={this.state.counters}
            onReset={this.hendleReset}
            onCancel={this.hendalCancel}
            onItemChange={this.onchangeItem}
            onAdd={this.handelAdd}
            onEdit={this.handelEdit}
            onIncrement={this.handelIncrement}
            onDecrement={this.handelDecrement}
            onDelete={this.hamdelDelete} />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
