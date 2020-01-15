import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.scss';
import ArticleBig from "./components/ArticleBig/ArticleBig";
import ArticleSmall from "./components/ArticleSmall/ArticleSmall";

function App() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const url = 'https://newsapi.org/v2/top-headlines?country=pl&apiKey=2f8f24b1943846078e4b9077a993d3d8';

  useEffect(() => {
     const fetchData = async () => {
         const result = await axios(url);
         setArticles(result.data.articles);
         setIsLoading(false)
     };
     fetchData();
  }, []);

  const getArticles = () => {
    axios.get(url).then(res => {
        const articles = res.data;
        setArticles(articles)
    })
  };

  return (
    <div className="App">
        <h1>Artykuły</h1>
        {
            isLoading ? <p>loading...</p> : <ArticleBig articles={articles[0]}/>
        }
        <button onClick={() => getArticles()}>Zobacz więcej</button>
    </div>
  );
}

export default App;
