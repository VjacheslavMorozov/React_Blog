import React, {Component} from 'react';
import ArticleContext from "../../ArticleContext";


class RemovingArticleComponent extends Component {
    constructor(props){
        super(props);
        // this.onClick = this.onClick.bind();
    }
    render() {
        const {id} = this.props;
        return (
            <ArticleContext.Consumer>
                {context => (
                    <button  onClick={context.updateArticleList.bind(null, id)}>remove</button>
                )}
            </ArticleContext.Consumer>
        );
    }
}

export default RemovingArticleComponent;
