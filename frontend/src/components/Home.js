import React from 'react';

class ArticleRow extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.article.author}</td>
        <td><a href={this.props.article.url} target="_blank">{this.props.article.description}</a></td>
        <td>{this.props.article.categories.join(', ')}</td>
        <td>{this.props.article.tags.join(', ')}</td>
        <td>{`${this.props.article.rating}/10`}</td>
      </tr>
    );
  }
}

class ArticlesTable extends React.Component {
  render() {
    let rows = [];
    for (let article of this.props.articles) {
      for (let [k, v] of Object.entries(article)) {
        if (k === "url") continue;
        if (Object.prototype.toString.call(v) === '[object Array]'){
          v = v.join(", ");
        }
        if (~v.indexOf(this.props.searchValue)) {
          rows.push(<ArticleRow article={article}/>);
          break;
        }
      }
    }
    return (
      <table className="main__tableData">
        <thead>
          <tr>
            <th>Шарер</th>
            <th>Название и ссылка</th>
            <th>Категории</th>
            <th>Ключевые слова</th>
            <th>Рейтинг</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    );
  }
}

export default class extends React.Component {

  constructor(options){
    super(options);
    this.state = {
      "articles": [],
      "searchValue": ""
    };
  }

  handleChange(event) {
    this.setState({"searchValue": event.target.value});
  }

  async componentWillMount() {
    let articles = await this.props.controller.getArticles();
    this.setState({"articles": articles});
    this.props.controller.getArticles();
  }

  componentDidUpdate() {
    let tds = document
      .getElementsByClassName("main__tableData")[0]
      .getElementsByTagName("tbody")[0]
      .getElementsByTagName("td");
    let {searchValue} = this.state;
    for (let text_container of tds){
      if (text_container.childNodes[0] && text_container.childNodes[0].tagName === "A") {
        continue;
      }
      text_container.innerHTML = text_container.innerHTML.replace(/<\/?mark>/g, '');

      if (searchValue &&~text_container.innerHTML.indexOf(searchValue)) {
        text_container.innerHTML = text_container.innerHTML.replace(new RegExp(searchValue, 'g'), `<mark>${searchValue}</mark>`);
      }

    }
  }

  render() {
    return (
      <div className="main">
        <a href="#add">Добавить статью</a>
        <div className="main__search-div">
          <input autoFocus type="text" placeholder="Поиск статьи" onChange={this.handleChange.bind(this)}/>
          {/*<button type="button" onClick={this.makeSearch}/>*/}
        </div>
        <ArticlesTable articles={this.state.articles} searchValue={this.state.searchValue}/>
      </div>
    );
  }
}