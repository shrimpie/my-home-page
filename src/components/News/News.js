
import React, { Component } from 'react';
import NewSingle from './NewSingle';
import './News.scss';

class News extends Component {

	constructor(props) {
		super(props);
		this.state = {
			news: [],
		}
	}

	componentDidMount() {
		const url = `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=62156024aef34a77b63cfcee48fd9a17`;
		fetch(url)
			.then(response => response.json())
			.then(data => this.setState({ news: data.articles }))
			.catch(error => { console.log(error) })
	}

	renderItems() {
		return this.state.news.map((item) => (
			<NewSingle key={item.url} item={item} />
		))
	}

	render() {
		return (

			<div>
				<h4 className="header">
					This is an example to retrieve some news using newsapi.
				</h4>
				<div className="row">
					{this.renderItems()}
				</div>
			</div>
			
		)
	}
}

export default News;

