import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { SignIn } from "../../reducers/user";
import { SIGN_IN } from "../../actions/user";

class LoginModal extends Component {
    handleSubmit = (event) => {
        return this.props.SignIn(JSON.stringify(event));
    };

    render() {
        const { isFetching, handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.handleSubmit)}>
                <Field
                    type="text"
                    name="email"
                    placeholder="email"
                    component="input" />

                <Field
                    type="text"
                    name="password"
                    placeholder="password"
                    component="input" />


                <button type="submit" disabled={isFetching}>
                    Sign in
                </button>
            </form>
        );
    }
}

export default connect(null, {
    SignIn
})(
    reduxForm({
        form: SIGN_IN
    })(LoginModal)
);
