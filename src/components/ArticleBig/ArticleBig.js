import React from 'react';
import {Row, Col} from "react-bootstrap";

import './ArticleBig.scss';

import placeholder from '../../img/placeholder.jpg'

function ArticleBig({articles}) {
    return (
        <Row>
            {
                articles.map(article => (
                    <Col xs={12} lg={6} key={article.title} className="article">
                        <a href="#">
                            {
                                articles ? <div>
                                    <img className="article__photo article__photo--large"
                                         src={article.urlToImage || placeholder}
                                         alt="zdjecie"/>
                                    <h4 className="article__category">{article.source.name}</h4>
                                    <h3 className="article__title">{article.title}</h3>
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
