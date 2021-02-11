import {map1, map2, map3} from './data.js';
import React, {Component} from 'react';
class App extends Component {

  constructor(){
    super();
    this.state = {val1: "Jim Economou", lvl2: map1["Jim Economou"], 
                  val2: "Daniel Clifford", lvl3: map2["Daniel Clifford"],
                  val3: "Alain Laporte", lvl4: map3["Alain Laporte"],};
    this.onChange1 = this.onChange1.bind(this);
    this.onChange2 = this.onChange2.bind(this);
    this.onChange3 = this.onChange3.bind(this);
  }

  onChange1(event){
    let name = event.target.value;
    console.log(name)
    let data = map1[name];
    this.setState({val1: name, lvl2: data});
    console.log(this.state.lvl2)
  }

  onChange2(event){
    let name = event.target.value;
    console.log(name)
    let data = map2[name];
    this.setState({val2: name, lvl3: data});
    console.log(this.state.lvl3)
  }

  onChange3(event){
    let name = event.target.value;
    console.log(name)
    let data = map3[name];
    this.setState({val3: name, lvl4: data});
    console.log(this.state.lvl4)
  }

  getData(){
    let data = this.state.lvl2;
    let arr = [];
    for (let i = 0; i < data.length; i++){
      let a = <option value={data[i]}>{data[i]}</option>
      arr.push(a)
    }
    return arr;
  }

  getData2(){
    let d = this.state.lvl3;
    let arr = [];
    for (let i = 0; i < d.length; i++){
      let a = <option value={d[i]}>{d[i]}</option>
      arr.push(a)
    }
    return arr; 
  }

  getData3(){
    let d = this.state.lvl4;
    let arr = [];
    for (let i = 0; i < d.length; i++){
      let a = <option value={d[i]}>{d[i]}</option>
      arr.push(a)
    }
    return arr; 
  }
  render(){
    return (
      <div>
      <label> Director: 
        <select value={this.state.val1} onChange={this.onChange1}>
          <option value="Jim Economou" >Jim Economou</option>
          <option value="Shahid Ibrahim">Shahid Ibrahim</option>
          <option value="Wendy Hui">Wendy Hui</option>
        </select>
      </label>
  
  
  
  <label> Sr. Director: 
    <select value={this.state.val2} onChange={this.onChange2}>
      {this.getData()}
    </select>
  </label>

  <label> lvl3: 
    <select value={this.state.val3} onChange={this.onChange3}>
      {this.getData2()}
    </select>
  </label>

  <label> lvl4: 
  <select>
      {this.getData3()}
    </select>
  </label>
  
      </div>
    
    );
  }
  
}

export default App;
