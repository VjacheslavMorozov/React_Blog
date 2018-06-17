import React, {Component} from 'react';
import ArticleContext from "../../ArticleContext";


class RemovingArticleComponent extends Component {
    constructor(props){
        super(props);
        this.onClick = this.onClick.bind();
    }
    render() {
        const {id, isShowButton} = this.props;


        return (
            isShowButton &&
            <ArticleContext.Consumer>
                {context => (

                    <button  onClick={context.updateArticleList()}>remove</button>
                )}
            </ArticleContext.Consumer>
        );
    }
}


export default RemovingArticleComponent;
