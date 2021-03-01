import React, { Component } from "react";
import { code } from "../codes/InitCodes";
import axios from "axios";

export default class Ide extends Component {
  state = {
    lang: "c",
    code: code.c,
    result: "Submit code to see result",
  };

  onLangChangeHandler = (e) => {
    const lang = e.target.value;

    this.setState({
      lang,
      code: code[lang],
    });
  };

  onCodeChangeHandler = (e) => {
    this.setState({
      code: e.target.value,
    });
  };

  onInputChangeHandler = (e) => {
    this.setState({
      input: e.target.value,
    });
  };

  onSubmitHandler = async (e) => {
    e.preventDefault();
    const res = await axios.post(
      "http://localhost:5000/code/submit",
      this.state
    );

    const data = res.data;
    this.setState({
      result: data.err ? data.error : data.output,
    });
  };

  render() {
    console.log(this.state);
    return (
      <>
        <div className="container mt-4">
          <div className="row justify-content-md-center">
            <div className="col-lg-2">
              <p className="lead">Select Language</p>
            </div>
            <div className="col-md-auto">
              <select
                className="form-select"
                id="lang"
                onChange={(e) => this.onLangChangeHandler(e)}
              >
                <option value="c">C</option>
                <option value="cpp">C++</option>
                <option value="java">Java</option>
                <option value="python">Python</option>
              </select>
            </div>
          </div>
          <div className="row mt-2">
            <h3>
              <span className="badge bg-primary">Enter code here</span>
            </h3>
            <div className="col-12">
              <textarea
                className="p-2"
                id="code"
                value={this.state.code}
                onChange={this.onCodeChangeHandler}
                spellCheck="false"
              ></textarea>
            </div>
          </div>
          <div className="row mt-2">
            <h3>
              <span className="badge bg-primary">Provide Input</span>
            </h3>
            <div className="col-12">
              <textarea
                className="p-2"
                id="input"
                value={this.state.input}
                onChange={this.onInputChangeHandler}
                spellCheck="false"
              ></textarea>
            </div>
          </div>
          <div className="d-grid gap-2 col-4 mx-auto mt-2">
            <button
              className="btn btn-success"
              type="submit"
              onClick={this.onSubmitHandler}
            >
              Run Code
            </button>
          </div>
          <div className="row mt-2">
            <h3>
              <span className="badge bg-warning text-dark">Output</span>
            </h3>
            <div className="col-12">
              <textarea
                className="p-2"
                id="result"
                value={this.state.result}
                spellCheck="false"
                disabled={true}
              ></textarea>
            </div>
          </div>
        </div>
      </>
    );
  }
}
