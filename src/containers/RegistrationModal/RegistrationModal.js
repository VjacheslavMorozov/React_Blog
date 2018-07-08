import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { SignUp } from "../../reducers/user";
import { SIGN_UP } from "../../actions/user";

class RegistrationModal extends Component {
    handleSubmit = () => {
        return this.props.SignUp();
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
                    name="name"
                    placeholder="name"
                    component="input" />
                <Field
                    type="text"
                    name="password"
                    placeholder="password"
                    component="input" />
                <Field
                    type="text"
                    name="password_confirm"
                    placeholder="confirm your password"
                    component="input" />

                <button type="submit" disabled={isFetching}>
                    Sign up
                </button>
            </form>
        );
    }
}

export default connect(null, {
    SignUp
})(
    reduxForm({
        form: SIGN_UP
    })(RegistrationModal)
);
