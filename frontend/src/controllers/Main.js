import ArticlesCollection from '../collections/Articles.js';

export default class {

  constructor() {
    this.articlesCollection = new ArticlesCollection();
  }

  async getArticles() {
    return await this.articlesCollection.fetch();
  }

  async addArticle(article) {
    return await this.articlesCollection.create(article);
  }
}