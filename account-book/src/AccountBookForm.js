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

/*구글링을 해서 가계부 기능을 먼저 구현하려고 하고 있는데 뭔가...오류가 뜹니다
무슨 오류인지도 어디를 손대야 할지도 동기부여 부분을 어떻게 구현할지도 디자인은 어떻게 할지도 일단 대체 뭘 해야하는지도.. 잘 모르겠습니다ㅠㅠ..*/
