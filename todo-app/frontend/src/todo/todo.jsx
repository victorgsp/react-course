import React, { Component } from 'react';
import axios from 'axios';

import PageHeader from '../template/pageHeader';
import TodoForm from './todoForm';
import TodoList from './todoList';

const URL = 'http://localhost:3004/api/todos';

export default class Todo extends Component{

    constructor(props) {
        super(props);
        this.state = { description: '', list: [] }
        
        this.handleAdd = this.handleAdd.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleRemove = this.handleRemove.bind(this);

        this.refresh();
    }

    async refresh(){
        let resp = await axios.get(`${URL}?sort=-createdAt`);
        this.setState({description: '', list: resp.data});
    }

    async handleAdd(){
        try {
            const description = this.state.description;
            await axios.post(URL, {description});    
            this.refresh();
        } catch (error) {
            console.error(error);
        }
    }

    handleChange(e){
        this.setState({...this.state, description: e.target.value})
    }

    async handleRemove(todo){
        await axios.delete(`${URL}/${todo._id}`);
        this.refresh();
    }

    render() {
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro'></PageHeader>
                <TodoForm handleAdd={this.handleAdd} description={this.state.description} handleChange={this.handleChange}/>
                <TodoList list={this.state.list} handleRemove={this.handleRemove}/>
            </div>
        );
    }
}