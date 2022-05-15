import axios from "axios";
import { useState,Fragment,useEffect } from "react";

export default function NewsList() {
  const [page, setPage] = useState(1);
  const [response, setResponse] = useState(null);

  const getNews = async () => {

    const options = {
        method: "GET",
        url: "https://investing-cryptocurrency-markets.p.rapidapi.com/coins/get-news",
        params: {
          pair_ID: "1057391",
          page:page,
          time_utc_offset: "28800",
          lang_ID: "1",
        },
        headers: {
          "x-rapidapi-host": "investing-cryptocurrency-markets.p.rapidapi.com",
          "x-rapidapi-key":'f7046cc8d9msh08258ef88b517adp1d69fcjsn86daddda2b68',
        },
      };
    
      axios
        .request(options)
        .then(function (response) {
            const { data } = response.data;
            console.log(data[0])
            setResponse(data[0].screen_data.news);
        })
        .catch(function (error) {
          console.error(error);
        });

  };
  useEffect(() => {
    getNews();
  }, []);
  return (
    <Fragment>
    <div className="flex flex-col relative bg-background font-raleway items-center min-h-screen">
      
      <h2 className="text-active text-white text-center text-2xl mt-6">
         Latest Crypto News
      </h2>
      <div className="mt-12 sm:mx-auto justify-center sm:w-full sm:flex">
        <div className="mt-4 sm:mt-0 sm:ml-3">
          {!response && (
            <button
              className="block w-full rounded-md px-5 py-3 bg-active text-base font-bold text-background focus:outline-none focus:ring-2 focus:ring-primary sm:px-10"
              onClick={() => getNews()}
            >
              Get Latest News
            </button>
          )}
        </div>
      </div>
      <div className="row">
        {response &&
          response.map((news) => {
            return (
              <div className="col-4" key={news.news_ID}>
                <div className="card p-2 mb-3">
  <img className="card-img-top" src={news.related_image_big} alt={news.HEADLINE}/>
  <div class="card-body p-2">
    <h5 className="card-title mt-2 ">
    <a
                  className=""
                  key={news.news_ID}
                  href={news.news_link ? news.news_link : news.third_party_url}
                >
      {news.HEADLINE}
      </a>
    </h5>
    <p class="card-text">{news.news_provider_name}</p>
  </div>
</div>
                
              </div>
            );
          })}
      </div>

      {response && (
        <div className="row mb-5 mt-5">
          <div className="col text-center">
          <button
            className="btn btn-outline-info"
            onClick={() => {
              setPage(page + 1);
              getNews();
            }}
          >
            Load next page &rarr;
          </button>
            </div>
         
        </div>
      )}
    </div>
    <style jsx>
      {
        `
        .card
        {
          background-color:#102e36ab;
          border: 1px solid rgb(255 255 255);
          color:#fff;

        }
        
        .card a
        {
          text-decoration:none;
          color:#fff;
          font-size:14px

        }
        .card a:hover
        {
          color:#17a2b8;
        }
        `
      }
    </style>
    </Fragment>
  );
}
