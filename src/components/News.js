import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  articles = [
    {
    }
]
    constructor(){
        super();
        console.log("Hello  I am a constructor from news component");
        this.state={
          articles: [],
          loading: false
        }
    }

    async componentDidMount(){
      let url = "https://newsapi.org/v2/everything?q=tesla&from=2024-07-22&sortBy=publishedAt&apiKey=017829ec29a5432b9b4d240b77dd512b"
      let data = await fetch(url);
      let parsedData = await data.json()
      console.log(parsedData);
      this.setState({articles: parsedData.articles})
    }


  render() {
    return (
      <div className='container my-3'>
        <h2>MonkeNews - Top Headlines</h2>
        
        <div className="row">
        {this.state.articles.map((element)=>{
           return   <div className="col-md-4 my-3" key={element.url} >
                        <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url}/>
                    </div>
        })}

        </div>    
      </div>
    )
  }
}

export default News
