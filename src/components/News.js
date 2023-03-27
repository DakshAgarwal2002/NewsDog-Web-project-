import React, { Component ,useEffect,useState} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

const News=(props)=>{
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)
  const updateNews=async ()=>{
    props.setProgress(0);
    let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=55a7329df9b84721ab27ccc5aa4273b5&page=${props.page}&pageSize=${props.pageSize}`
    setLoading(true)
    // this.setState({loading:true})
    let data=await fetch(url)
    props.setProgress(30);
    let parsedata=await data.json()
    props.setProgress(70);
    setArticles(parsedata.articles);
    setTotalResults(parsedata.totalResults);
    setLoading(false)
    props.setProgress(100);
  }
  useEffect(() => {
    updateNews()
  }, []) 

  const HandleNextClick= async()=>{
    setPage(page+1);
    updateNews();
    
  }
  const HandlePrevClick=async ()=>{
    setPage(page-1);
    updateNews();
  }

    return (
      <div className='container' style={{margin:"5rem"}}>
        <h1 className=' text-center'>News Dog - Top HeadLines</h1>
        {loading && <Spinner/>}
        <div className='row'>
        {!loading && articles.map((element)=>{
          return <div className='col-md-4 my-3 d-flex justify-content-center' key={element.url}>
          <NewsItem  title={element.title!==null? element.title.slice(0,45):null} description={element.description!==null? element.description.slice(0,88):null} url={element.urlToImage} newsUrl={element.url}/>
          </div>
        })}
        </div>
        <div className='container d-flex justify-content-between'>
        <button type="button" disabled={page<=1} className="btn btn-dark" onClick={HandlePrevClick}>&larr; Previous</button>
        <button type="button" disabled={page+1 > Math.ceil(totalResults/props.pageSize)} className="btn btn-dark" onClick={HandleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
}

News.defaultProps={
  country:'in',
  pageSize:8,
  categories:"general"
}
News.propTypes={
  country: PropTypes.string,
  pageSize:PropTypes.number,
  categories:PropTypes.string  
}

export default News