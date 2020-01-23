import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/dashboard.css';
import { MDBInput } from "mdbreact";
import { MDBListGroup, MDBListGroupItem, MDBContainer, MDBAnimation } from "mdbreact";
import { BrowserRouter as Router,  } from 'react-router-dom';

class Dashboard extends Component {

    constructor(props){
        super(props);
        this.state ={
            todo : '',
            error :''
        }
    }



    onChangeTodo = (e) =>{
        this.setState({
            todo : e.target.value
        })
    }

    onSubmitAdd = () => {
       
        if(this.state.todo ===''){
            this.setState({
                error: 'Write something'
            })
        }
        else{
            const number = Math.floor(Math.random() * 20);

            if(localStorage.getItem(number)){
              localStorage.setItem(number+1 , this.state.todo )
            }
            else{
              localStorage.setItem(number, this.state.todo )
            }
      
            this.setState({
                todo : '',
                error : ''
            })
        }
     
       
    }

    onSubmitDelete = () =>{
        localStorage.clear();
        this.setState({
            todo: ''
        })
    }

    getList = () => {
        const list = [];
        for (let i =0 ; i< Object.keys(localStorage).length ; i++){
            const key = localStorage.key(i);            
            const item = localStorage.getItem(key);
            list.push({key : item });
        }
        return list
    }

    deleteItem = (key) =>{ 
       
        for (let i =0 ; i< Object.keys(localStorage).length ; i++){
            const keyI = localStorage.key(i);
            const item = localStorage.getItem(keyI);

            if(key === item)
           localStorage.removeItem(keyI);
        }
      
        this.setState({
            todo : ''
        })
    }

    render() { 

      let todoList = this.getList().map(todo =>
        
        <div>
        <MDBAnimation type="bounceInLeft">
        <MDBListGroupItem><button className="btn btn-light" id="listgroupbtn" onClick={()=>{ this.deleteItem(todo.key)}}>X</button>{todo.key}</MDBListGroupItem>
        </MDBAnimation>
        </div>
        
        )

        return ( 
            <Router>
            <div>
                <div className="container mt-5 mx-auto ">
                    <h1>TO-DO LIST</h1>
                    <p>Developed by:<i> Alvin Neri</i></p>
                    <p className="alert-warning">{this.state.error}</p>
                    <MDBInput label="Add todo" id="input" name="todo" value={this.state.todo} onChange={this.onChangeTodo} />
                    <button className="btn btn-light btncustom" onClick={this.onSubmitAdd}>ADD</button>
                    <button className="btn btn-light btncustom" onClick={this.onSubmitDelete}>DELETE ALL</button>
                </div>
                <div className="container mt-2 mx-auto " id="list">
                    <MDBContainer  className="mt-5 mb-5">
                    <MDBListGroup>
                    {todoList}
                    </MDBListGroup>
                    </MDBContainer>
                   
                </div>
            </div>
            </Router>
         );
    }
}
 
export default Dashboard;