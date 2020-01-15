import React from 'react';
import {Container, Row, Col} from "react-bootstrap";
import './ArticleBig.scss';

function ArticleBig({articles}) {

    return (
        <Row>
            {
                articles.map(article => (
                    <Col lg={6} key={article.title}>
                        <a href="#">
                            {
                                articles ? <div>
                                    <img className="article-photo_big" src={article.urlToImage} alt="zdjecie"/>
                                    <h4>{article.author}</h4>
                                    <h3>{article.title}</h3>
                                </div> : 'loading...'
                            }
                        </a>
                    </Col>
                ))
            }
        </Row>
    );
}

export default ArticleBig;
