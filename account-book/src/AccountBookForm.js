import React, { Component } from "react";

const getCurrentTimetoString = () => {
    return new Date().toLocaleString();
};

class AccountBookForm extends Component {
    state = {
        type: "지출",
        price: "",
        usage: "",
        date: ""
    };

    changeInput = event => {
        this.setState({
            [event.target.name]: event.target.value,
            date: getCurrentTimetoString()
        });
    };

    submit = event => {
        event.preventDefault();
        this.props.onAdd(this.state);
        this.setState({
            type: "지출",
            price: "",
            usage: "",
            date: ""
        });
    };

    render(){
        return(
            <form>
                <select name="type" onChange={this.changeInput}>
                    <option defaultValue>지출</option>
                    <option>수입</option>
                    </select>
                    <input
                     placeholder="금액"
                     type="number"
                     name="price"
                     value={this.state.price}
                     onChange={this.changeInput}
                     />
                    <input
                      placeholder="사용목적"
                      name="usage"
                      value={this.state.usage}
                      onChange={this.changeInput}
                    />
                    <div>
                        <span>타입 : {this.state.type}</span>
                        <br/>
                        <span>
                            금액 : {this.state.price !== "" ?{this.state.price}원 : "0원"}
                        </span>
                        <br/>
                        <span>용도 : {this.state.price !== "" ? this.state.usage : "-"}</span>
                        <br/>
                        <span>날짜 : {this.state.date}</span>
                        <br/>
                    </div>
                </form>

        );
    }
}

export default AccountBookForm;