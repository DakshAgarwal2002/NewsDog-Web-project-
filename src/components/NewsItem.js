import React, { Component } from "react";

const NewsItem=({title,description,url,newsUrl})=>{
    return (
      <div>
        <div className="card" style={{width: "18rem", height: "24rem"}}>
          <img style={{height: "10rem"}} src={url!==null?url:"https://d.newsweek.com/en/full/2202468/special-presidential-envoy-climate-john-kerry.jpg"} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {description}
            </p>
            <a target="_blank" rel="noreferrer" href={newsUrl} className="btn btn-sm btn-dark">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    );
}

export default NewsItem;
