import React, {useState, useEffect} from 'react';
import {Container} from "react-bootstrap";

import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

import ArticleBig from "./components/ArticleBig/ArticleBig";
import ArticleSmall from "./components/ArticleSmall/ArticleSmall";

function App() {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [articlesToDisplay, setArticlesToDisplay] = useState(5);

    const url = 'https://newsapi.org/v2/top-headlines?country=pl&apiKey=2f8f24b1943846078e4b9077a993d3d8';

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(url);
            setArticles(result.data.articles);
            setIsLoading(false)
        };
        fetchData();
    }, []);

    const showMore = () => {
        setArticlesToDisplay(articlesToDisplay + 3)
    };


    return (
        <Container className="App">
            <h1>Artykuły</h1>
            {
                isLoading ?
                    <p>Ładowanie treści...</p> :
                    <>
                        <ArticleBig articles={articles.slice(0, 2)}/>
                        <ArticleSmall articles={articles.slice(2, articlesToDisplay)}/>
                    </>
            }
            <button onClick={() => showMore()}>Zobacz więcej</button>
        </Container>
    );
}

export default App;
