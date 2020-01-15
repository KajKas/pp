import React from 'react';
import './ArticleBig.scss';

function ArticleBig({articles}) {
    const {urlToImage, author, title} = articles;

    return (
        <div>
            <a href="#">
                {
                    articles ? <div>
                        <img src={urlToImage} alt="zdjecie"/>
                        <h3>{author}</h3>
                        <h2>{title}</h2>
                    </div> : 'loading...'
                }

            </a>
        </div>
    );
}

export default ArticleBig;
