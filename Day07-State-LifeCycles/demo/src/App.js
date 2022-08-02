import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'black'
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ color: 'pink' });
    }, 5000);
  }

  render() {
    return (
      <div>
        <div
          style={{
            backgroundColor: this.state.color,
            paddingTop: 20,
            width: 400,
            height: 80,
            margin: 'auto'
          }}
        />
      </div>
    );
  }
}

export default App;



// import React, { Component } from 'react';
// import Hello from "./components/Hello";

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       display: true
//     };
//   }

//   delete = () => {
//     this.setState({ display: false });
//   };

//   render() {
//     let comp;
//     if (this.state.display) {
//       comp = <Hello />;
//     }
//     return (
//       <div style={{ textAlign: 'center' }}>
//         {comp}
//         <button onClick={this.delete}>
//           Delete the component
//         </button>
//       </div>
//     );
//   }
// }

// export default App;


// import React, { Component } from 'react';
// import Home from "./components/Home";

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isLoggedIn: false
//     };
//   }

//   handleLogIn = () => {
//     this.setState({ isLoggedIn: true })
//   }

//   handleLogOut = () => {
//     this.setState({ isLoggedIn: false })
//   }

//   render() {
//     const { isLoggedIn } = this.state
//     if (isLoggedIn) return (<Home onLogOut={this.handleLogOut} />)
//     return (
//       <div style={{ textAlign: 'center' }}>
//         <div>
//           <h1>Please Log in</h1>
//           <button onClick={this.handleLogIn}>Log in</button>
//         </div>
//       </div>
//     )
//   }
// }

// export default App;