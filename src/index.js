import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker'

const App = () => {
  return (
    <div className="ui container comments">
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={faker.image.avatar()}></img>
        </a>
        <div className="content">
          <a href="/" className="author">
            Liam
          </a>
          <div className="metadata">
            <span className="date">Today at 4:20pm</span>
          </div>
          <div className="text">Nice</div>
        </div>
      </div>

      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={faker.image.avatar()}></img>
        </a>
        <div className="content">
          <a href="/" className="author">
            Fred
          </a>
          <div className="metadata">
            <span className="date">Today at 4:69pm</span>
          </div>
          <div className="text">YEET</div>
        </div>
      </div>

      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={faker.image.avatar()}></img>
        </a>
        <div className="content">
          <a href="/" className="author">
            Poppy
          </a>
          <div className="metadata">
            <span className="date">Today at 3:11pm</span>
          </div>
          <div className="text">Woof.</div>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
