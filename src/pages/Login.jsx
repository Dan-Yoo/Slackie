import React, { Component } from 'react';
import { Card, CardContent, TextField, Button, Grid } from '@material-ui/core';
// import { createUser } from '../firebase/auth';
import { signin } from '../firebase/auth';

class Login extends Component {
  state = {
    email: '',
    password: ''
  }
  // https://joshpitzalis.svbtle.com/auth
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();

    signin(this.state.email, this.state.password);

    this.setState({
      email: '',
      password: ''
    });
  }

  render() {
    return (
      <Grid container
        direction="row"
        justify="center">
        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent>
              <form onSubmit={this.handleSubmit} noValidate autoComplete="off">
                <Grid 
                  container
                  direction="column"
                >
                  <TextField
                    name="email"
                    label="Email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    margin="normal"
                    variant="filled"
                    />
                  <TextField 
                    name="password"
                    label="Password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    type="password"
                    margin="normal"
                    variant="filled"
                    />
                  <Button type="submit" variant="contained" color="primary">Login</Button>
                </Grid>
              </form>

              <div>Use either admin@admin.com : password or user@user.com : password to test login</div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    )
  }
}
  
export default Login;