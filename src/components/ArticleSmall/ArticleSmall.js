import React from 'react';
import {Row, Col} from "react-bootstrap";
import './ArticleSmall.scss';

function ArticleSmall({articles}) {
    return (
        <Row>
            {
                articles.map(article => (
                    <Col lg={4} key={article.title}>
                        <a href="#">
                            {
                                articles ? <div>
                                    <img className="article-photo_small" src={article.urlToImage} alt="zdjecie"/>
                                    <h5>{article.author}</h5>
                                    <h4>{article.title}</h4>
                                </div> : 'loading...'
                            }
                        </a>
                    </Col>
                ))
            }
        </Row>
    );
}

export default ArticleSmall;
