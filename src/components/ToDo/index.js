import React,{Component} from 'react';
import {connect} from 'react-redux';

import Item from './Item.js';
import {addItem} from '../../redux/action/index.js';

const mapStateToProps=(state)=>{
    return{
        auth:state.userReducer.auth,
        list:state.listReducer.list,
    }
}

class ToDo extends Component{
    constructor(props){
        super(props);
        this.populateItem = this.populateItem.bind(this);
        this.Add = this.Add.bind(this);
        // this.saveData = this.saveData.bind(this);
        // this.loadData = this.loadData.bind(this);
        
    }
    populateItem(item,i){
        return (<Item key={i} Index={i} dispatch={this.props.dispatch}>{item}</Item>);
    }
    Add(e){
        e.preventDefault();
        var item = this.refs.addText.value;
        this.props.dispatch(addItem(item));
    }
    // loadData(){
    //     var prevData={};
    //     fs.readFile('./userData.json','utf-8',function(err,data){
    //         prevData=JSON.parse(data);
    //     });
    // }
    // saveData(){
    //     var newData = {};
    //     newData[this.props.match.params.name] = {...this.props.list}
    //     fs.writeFileSync('./userData.json',JSON.stringify(newData));
    // }
    render(){
        if(this.props.auth){
            return(
                <div>
                    <div className="container">
                <h1>To Do Application</h1>
                {/* <div className="pull-right">
                    <button className="btn btn-success" onClick={this.saveData}> SAVE </button>
                    <button className="btn btn-default" onClick={this.loadData}> LOAD </button>
                </div> */}
                <table className ="table table-striped table-hover ">
                    <thead>
                        <tr>
                            <th className="col-lg-3" >
                                <form className="input-group" onSubmit={this.Add} >
                                    <input ref="addText" type="text" className = "col-lg-4 form-control input-lg"/>
                                    <span className="input-group-btn"><input type="submit" value={`Add Value Item # ${this.props.list.length+1}`} className="btn btn-default" /></span>
                                </form>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                         {this.props.list.map(this.populateItem)}
                    </tbody>
                </table>
                </div>
                </div>
            );
        }
        else{
            return(
              <div className="container">
                <h2>Error : Go Back and Authenticate First</h2>
              </div>
            );
          }
    }
}
export default connect(mapStateToProps)(ToDo);