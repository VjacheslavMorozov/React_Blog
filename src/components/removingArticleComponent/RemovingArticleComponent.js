import React, {Component} from 'react';
import ArticleContext from "../../ArticleContext";


class RemovingArticleComponent extends Component {
    constructor(props){
        super(props);
        // this.onClick = this.onClick.bind();
    }
    render() {
        const {id, isShowButton} = this.props;

        console.log(id)
        return (
            isShowButton &&
            <ArticleContext.Consumer>
                {context => console.log(context) || (
                    <button  onClick={context.updateArticleList.bind(null, id)}>remove</button>
                )}
            </ArticleContext.Consumer>
        );
    }
}


export default RemovingArticleComponent;
