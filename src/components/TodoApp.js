import React, {Component} from 'react';
import './App.css';
import {TodoList} from "./TodoList";
import 'react-datepicker/dist/react-datepicker.css';
import moment from "moment";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
  } from '@material-ui/pickers';

import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import FormDialog from './Dialogo';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';



export default class TodoApp extends Component {

    
    constructor(props) {
        super(props);
        const listaInicial = [
        {description:"Crear Vista Login", name: 'Carlos Sanchez', email: 'carlos@mail.com', status: 'Ready', dueDate: moment()},
        {description:"Crear Vista Registro", name: 'Julian Benitez', email: 'julian@mail.com', status: 'Ready', dueDate: moment()},
        {description:"Crear Sidebar", name: 'Edwin Campos', email: 'edwin@mail.com', status: 'In-Progress', dueDate: moment()}];    
        this.state = {items: listaInicial, description:"", name: '', email: '', status: '', dueDate: null, open: false};
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleStatusChange = this.handleStatusChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.setOpen = this.setOpen.bind(this);
        
    }

    handleDescriptionChange(e) {
        this.setState({
            description: e.target.value
        });
    }
    handleNameChange(e) {
        this.setState({
            name: e.target.value
        });
    }
    handleEmailChange(e) {
        this.setState({
            email: e.target.value
        });
    }

    handleStatusChange(e) {
        this.setState({
            status: e.target.value
        });
    }

    handleDateChange(date) {
        this.setState({
            dueDate: date
        });
    }

    handleSubmit(e) {

        e.preventDefault();


        const newItem = {
            description: this.state.description,
            name: this.state.name,
            email: this.state.email,
            status: this.state.status,
            dueDate: this.state.dueDate
        };


        this.setState(prevState => ({
            items: prevState.items.concat(newItem),
            description: '',
            name: '',
            email: '',
            status: '',
            dueDate: null
        }));
        this.setOpen(false);
    }

    setOpen(boolean) {
        this.setState({
            open: boolean
        });
    }



    
    render() {        
        return (
            <div className="App">
                <FormDialog 
                    open = {this.state.open} 
                    fun = {this.setOpen}
                    handleDescriptionChange = {this.handleDescriptionChange}
                    handleNameChange = {this.handleNameChange}
                    handleEmailChange = {this.handleEmailChange}
                    handleStatusChange = {this.handleStatusChange}
                    handleDateChange = {this.handleDateChange}
                    handleSubmit = {this.handleSubmit}
                    state = {this.state}
                />
                <br/>
                <div style = {{overflowY: 'scroll', height: '400px', width: '100%'}}>
                    <TodoList todoList={this.state.items}/>                            
                </div>
                <br></br>
                <Fab aria-label='Add' color= 'primary' style = {{right: '-40%'}} >
                    <AddIcon onClick = {this.setOpen}/>
                </Fab>
            </div>
        );
    }
}

