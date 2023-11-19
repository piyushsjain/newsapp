import React from "react";
import { Link } from "react-router-dom";

const NewsItem = (props) => {
    let { title, description, imageUrl, url, author, date, source } = props;
    return (
      <div className="mx-[15%] flex flex-wrap justify-center border-2 border-b-slate-500 mt-8">
        <div className="xl:w-60 xl:mr-[45px] ">
          <img
            src={imageUrl}
            alt="..."
            className="w-[240px] sm:w-[540px] h-auto mt-4"
          />
          <span className="inline-flex items-center rounded-md bg-red-600 px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-red-700/10 mt-2">{source}</span>
        </div>
        <div className="w-[240px] sm:w-[540px] xl:w-[65%] mb-4 p-2">
          <h5 className="font-semibold text-xl">{title}</h5>
          <p>{description}</p>
          <p className="mt-2 text-sm italic font-light">By {author} on {new Date(date).toLocaleString()}</p>
          <Link to={url} target="_blank" className="cursor-pointer">
            <button className="bg-indigo-800 text-white p-2 rounded-lg mt-2">
              Read more
            </button>
          </Link>
        </div>
      </div>
    );
  
}

export default NewsItem;