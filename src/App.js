import React, { Component } from 'react';
import './styles/foundation.min.css';
import './styles/custom.css';
import Employee from './components/Employee/Employee';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MobileHeader from './components/MobileHeader/MobileHeader';
class App extends Component {
constructor(){
super();
this.state={
appName: "Performance Managment Process",
home: false
}
}
render() {
return (
<div className="off-canvas-wrapper">
<div className="off-canvas-wrapper-inner" data-off-canvas-wrapper>
<div className="off-canvas-content" data-off-canvas-content>
<MobileHeader name={this.state.appName}/>
<Header name={this.state.appName}/>
<Employee name={this.state.appName}/>
<hr/>
<Footer/>
</div>
</div>
</div>
);
}
}
export default App;