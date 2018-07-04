import React, {Component} from 'react';
import { uid } from 'uuid'

class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: "",
            newPostText: ""
        };
    }

    onChangeInput = e => {
        let name = e.currentTarget.name;
        let value = e.currentTarget.value;

        this.setState({
            [name]: value
        });
    };
    submitForm(event) {
        event.preventDefault();
        event.stopPropagation();
    }
    render() {
        return (
            <div>
                <form onSubmit={this.submitForm}>
                    <input placeholder="enter new title" name="title" type="text"  onChange={this.onChangeInput}/>
                    <input placeholder="enter new article text" name="newPostText" type="text" onChange={this.onChangeInput}/>
                    <button >Save new article</button>
                </form>

            </div>
        );
    }
}


export default Form;
