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

    addArticle = (e) => {
        this.props.addArticle( {
            id: 3,
            title: "American Short Fiction",
            date: 15225840,
            text: "About Blog American Short Fiction selects and publishes short stories, short shorts, novellas, and novel excerpts by" +
            " established and super new writers. It is our goal to discover and publish the best fiction we possibly can—stories that dive " +
            "into the wreck, that stretch the reader between recognition and surprise, that conjure a particular world with delicate expertise—stories " +
            "that take a different way home.",
            comments: [
                {
                    commentText: "it's very interesting story",
                    commentId: 3
                },
                {
                    commentText: "I hate all stories",
                    commentId: 4
                }
            ]
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.submitForm}>
                    <input placeholder="enter new title" name="title" type="text"  onChange={this.onChangeInput}/>
                    <input placeholder="enter new article text" name="newPostText" type="text" onChange={this.onChangeInput}/>
                    <button onClick={this.addArticle}>Save new article</button>
                </form>

            </div>
        );
    }
}


export default Form;
