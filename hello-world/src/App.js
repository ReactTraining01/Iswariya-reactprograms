import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import './appStyles.css'
import Form from './components/Form';
// import styles from './appStyles.modules.css'
// import Inline from './components/Inline.js'
// import Stylesheet from './components/Stylesheet'
// import NameList from './components/NameList';
//  import UserGreeting from './components/UserGreeting'
// import { ParentComponent } from './components/ParentComponent';
// import EventBind from './components/EventBind';
// import FunctionClick from './components/FunctionClick';
// import ClassClick from './components/ClassClick'
// import Greet from './components/Greet'
// import Welcome from './components/Welcome'
// import Message from './components/Message'
// import Counter from  './components/Counter'
// import Hello from './components/Hello'

class App extends Component {
  render() {
  return (
    <div className="App">
      <Form/>
      {/* <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1> */}
     {/* <Inline/>  */}
      {/* <Stylesheet primary= {true}/> */}
      {/* <NameList/> */}
      {/* <UserGreeting/>  */}
      {/* <ParentComponent/> */}
      {/* <EventBind/> */}
      {/* <FunctionClick/>
      <ClassClick/> */}
      {/* <Counter/> */}
       {/* <Message/> */}
        {/* <Greet name ="aaa" fullname="apple">
         <p>This is children props</p>
       </Greet>
       <Greet name ="bbb" fullname="boll">
         <button>Login</button>
       </Greet>
       <Greet name ="ccc" fullname="cat"/>
       <Greet name ="ddd" fullname="dog"/>

       <Welcome name ="aaa" fullname="apple"/>
      <Welcome name ="bbb" fullname="boll"/>
      <Welcome name ="ccc" fullname="cat"/>
      <Welcome name ="ddd" fullname="dog"/>  */}

      {/* <Hello/>  */}
    </div>
  );
}
}

export default App;

