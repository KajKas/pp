import React from 'react';
import {Row, Col} from "react-bootstrap";
import './ArticleSmall.scss';
import placeholder from '../../img/placeholder.jpg'

function ArticleSmall({articles}) {
    return (
        <Row>
            {
                articles.map(article => (
                    <Col xs={6} lg={4} key={article.title} className="article">
                        <a href="#">
                            {
                                articles ? <div>
                                    <img className="article__photo--small" src={article.urlToImage || placeholder}
                                         alt="zdjecie"/>
                                    <h5 className="article__category">{article.source.name}</h5>
                                    <h4 className="article__title">{article.title}</h4>
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
