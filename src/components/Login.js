import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './Login.css';
import {Link, withRouter} from 'react-router-dom';
import SidebarPage from './SidebarPage';


export class Login extends React.Component{

    constructor(props) {
        super(props);  
        this.state = {email: "", passwd: ""};
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePassChange = this.handlePassChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        if (localStorage.getItem('users') == null) {
            localStorage.setItem('users', '[{"username": "Johann Paez", "email": "johann.paez@mail.escuelaing.edu.co", "passwd": "Prueba123@"}, {"username": "Sebastian Campos", "email": "najoh2907@hotmail.com", "passwd": "asd"}]');
        }
    }

    render(){
        if (localStorage.getItem('isLoggedIn'))  {
            return (
              <SidebarPage />
            );
        }

        return (
            <React.Fragment>
                <CssBaseline />
                <main className="layout">
                    <Paper className="paper">
                        
                        <Typography variant="h2">Task Planner</Typography>
                        <div className="form" onSubmit={this.handleSubmit}>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="email">Username</InputLabel>
                                <Input id="email" name="email" autoComplete="email" autoFocus onChange={this.handleEmailChange} />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input
                                    name="password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    onChange={this.handlePassChange}
                                />
                            </FormControl>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className="submit"
                                onClick = {this.handleSubmit}
                            >
                                LOGIN
                            </Button>
                            <br></br>
                            <br></br>
                            <Link to ="/register"> Sign Up</Link>
                        </div>
                    </Paper>
                </main>
            </React.Fragment>
        );
    }

    handleEmailChange(e) {
        this.setState({
            email: e.target.value
        });
    }

    handlePassChange(e) {
        this.setState({
            passwd: e.target.value
        });
    }

    handleSubmit() {     
        const users = JSON.parse(localStorage.getItem("users"));        
        var flag = false;
        
        for (var i = 0; i < users.length; i++) {            
            if (this.state.email === users[i].email && this.state.passwd === users[i].passwd) {   
                flag = true;
                localStorage.setItem("username", users[i].username);
                localStorage.setItem("email", users[i].email);                
                localStorage.setItem('isLoggedIn', true);
                this.props.history.push("/home");
                return;
            }
        }
        if (!flag) {
            alert("Usuario o contraseña incorrectos, intente nuevamente!")
        }
    }


}

export default withRouter(Login);