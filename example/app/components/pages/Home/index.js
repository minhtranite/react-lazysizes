import React from 'react';
import Document from 'components/common/Document';
import LazySizes from 'react-lazysizes';

class HomePage extends React.Component {
  render() {
    return (
      <Document title="Home | React lazysizes" className="page-home">
        <div>
          <LazySizes width="1920"
            height="1024"
            dataSrc="http://lorempixel.com/1920/1024/sports/1"
            className="img-responsive"/>
          <hr/>
          <LazySizes width="940"
            height="500"
            dataSrc="http://lorempixel.com/940/500/sports/2"
            className="img-responsive"/>
          <hr/>
          <LazySizes width="640"
            height="480"
            dataSrc="http://lorempixel.com/640/480/sports/3"
            className="img-responsive"/>
          <hr/>
          <LazySizes width="600"
            height="600"
            dataSrc="http://lorempixel.com/600/600/sports/4"
            className="img-responsive"/>
          <hr/>
          <LazySizes width="600"
            height="600"
            src="http://lorempixel.com/600/600/sports/6"
            className="img-responsive"/>
          <hr/>
          <LazySizes dataSrc="//www.youtube.com/embed/ZfV-aYdU4uE"
            iframe={true}
            frameBorder={0}
            width="650"
            height="480"/>
        </div>
      </Document>
    );
  }
}

export default HomePage;
