import Backbone from 'backbone';

export default class extends Backbone.Collection {
  constructor(options) {
    super(options);
    this.url = "articles";
    this.model = Backbone.Model;
  }
}