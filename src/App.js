import React, { Fragment } from 'react';
import axios from 'axios';
import { BrowserRouter , Switch, Route } from 'react-router-dom';

import './App.css';
import Navbar from './components/layout/Navbar'
import Users from './components/users/Users'
import UserDetail from './components/users/UserDetail'
import Search from './components/users/Search'
import Alert from './components/layout/Alert'
import About from './components/pages/About'



class App extends React.Component {

  state = {
    users: [],
    userDetail : {},    // single user data
    repos: [],
    loading: false,
    alert: null  // or  alert: { message: "Please enter something", type: "light" }
  }

  // For Initial render github users (this is optional)
  async componentDidMount() {
    // console.log(process.env.REACT_APP_GITHUB_CLIENT_SECRET);   //testing .env.local has been connected or not
    this.setState( {loading: true} );

    const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    // console.log(res.data);
    this.setState( {users : res.data, loading: false} )
  }


  // Search github USERS
  searchUsers = async (text) => {
    console.log(text);

    this.setState( { loading: true } );

    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);


    console.log(res);
    console.log(res.data.items);

    this.setState( {users : res.data.items, loading: false} )
  }

  // Get a single github User
  getUser = async (username) => {
    this.setState( { loading: true } );

    const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    console.log('%c res userDetail', 'color:orange; font-weight:bold;');
    console.log(res);

    this.setState( { userDetail : res.data, loading: false} )
  }

  // get user REPOSITORIES
  getUserRepos = async (username) => {
    this.setState( { loading: true } );

    const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);


    this.setState( { repos : res.data, loading: false} )
  }




  // clear users from state and UI
  clearUsers = () => {
    this.setState( { users:[], loading:false  } )
  }

  // Alert when click "Search" button without keyword
  setAlert = (message, type) => {
    this.setState({
      alert: {
        message: message,
        type:type
      }
    })

    setTimeout( () => this.setState( {alert:null} ), 3000 )

  };



  render() {

    // const { users, loading } = this.state;  //optional

    return (
      <BrowserRouter>
        <div className="App">
          
          <Navbar icon='fab fa-github'   />

          <div className="container">

            <Alert alert={this.state.alert}  />

            <Switch>
              <Route 
                exact path='/' 
                render={ props => (
                  <Fragment>
                    <Search 
                      searchUsers= {this.searchUsers} 
                      clearUsers= {this.clearUsers} 
                      showClear= { this.state.users.length > 0 ? true : false } 
                      setAlert = {this.setAlert}
                    />

                    <Users loading={this.state.loading} users={this.state.users} />
                  </Fragment>
                )}/>

                <Route exact path='/about' component={About} />

                <Route exact path='/userdetail/:login' render={ props => (
                  <UserDetail 
                    {...props} 
                    getUser={this.getUser} 
                    getUserRepos={this.getUserRepos} 
                    userDetail={this.state.userDetail} 
                    repos={this.state.repos}
                    loading={this.state.loading}  
                  />
                )} />
            </Switch>

            
          </div>   

        </div>
      </BrowserRouter>
    );
  }

  
}

export default App;
