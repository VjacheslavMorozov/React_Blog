import React, {Component} from 'react';
import idGenerator from 'react-id-generator';

class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: "",
            newPostText: ""
        };
        this.myTitleRef = React.createRef();
        this.myTextArticleRef = React.createRef();
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

    clearingStateAfterSave() {
        this.setState({
            title: "",
            newPostText: ""
        });

        this.myTextArticleRef.current.value = "";
        this.myTitleRef.current.value = "";
    }

    addArticle = (e) => {
        const newDate = new Date;
        const {title, newPostText} = this.state;
        if(title.length && newPostText.length) {
            this.props.addArticle({
                id: idGenerator(),
                title: title,
                date: newDate,
                text: newPostText,
                comments: []
            });
            this.clearingStateAfterSave();
        }
    };
    render() {
        return (
            <div>
                <form onSubmit={this.submitForm}>
                    <input placeholder="enter new title" name="title" type="text" ref={this.myTitleRef } onChange={this.onChangeInput}/>
                    <input placeholder="enter new article text" name="newPostText" type="text" ref={this.myTextArticleRef}  onChange={this.onChangeInput}/>
                    <button onClick={this.addArticle}>Save new article</button>
                </form>

            </div>
        );
    }
}


export default Form;
class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }
    render() {
        return <div ref={this.myRef} />;
    }
}