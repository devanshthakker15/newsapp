import React, { Component } from 'react'

export class NewsItem extends Component {


  render() {
    let {title,description, imageUrl, newsUrl} = this.props;
    return (
      <div className='my-3'>
         <div className="card" style={{width: "18rem"}}>
            <img src={!imageUrl?"https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2024/05/apple-let-loose-event-1715068806.jpg":imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}</p>
                <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read more</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
