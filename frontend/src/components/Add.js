import React from 'react';

export default class extends React.Component {

  constructor(options) {
    super(options);
    this.state = {"rate": "1"};
  }

  addArticle() {
    this.props.controller.addArticle(this.state);
  }


  inputChange(e) {
    this.setState({[e.target.getAttribute("data-field")]: e.target.value});
  }
  render() {
    return (
      <div className="add">
        <div className="add__form">
          <div className="add__field">
            <span className="add__field__label">Ваше имя</span>
            <input type="text" data-field="name" onChange={this.inputChange.bind(this)}/>
            <span className="add__field__helper"/>
          </div>
          <div className="add__field">
            <span className="add__field__label">Ссылка на статью</span>
            <input type="text" data-field="url" onChange={this.inputChange.bind(this)}/>
            <span className="add__field__helper"/>
          </div>
          <div className="add__field">
            <span className="add__field__label">Категории (через пробел)</span>
            <input type="text" data-field="categories" onChange={this.inputChange.bind(this)}/>
            <span className="add__field__helper"/>
          </div>
          <div className="add__field">
            <span className="add__field__label">Ключевые слова (через пробел)</span>
            <input type="text" data-field="keywords" onChange={this.inputChange.bind(this)}/>
            <span className="add__field__helper"/>
          </div>
          <div className="add__field">
            <span className="add__field__label">Оценка</span>
            <input type="range" data-field="rate" min="1" max="10" defaultValue="1" onChange={this.inputChange.bind(this)}/>
            <span className="add__field__helper">{this.state.rate}/10</span>
          </div>
        </div>
        <button type="button" className="add__btn" onClick={this.addArticle.bind(this)}>Добавить</button>
      </div>
    )
  }
}