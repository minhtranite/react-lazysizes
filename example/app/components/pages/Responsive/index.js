import React from 'react';
import Document from 'components/common/Document';
import LazySizes from 'react-lazysizes';

class ResponsivePage extends React.Component {
  render() {
    let srcSet1 = 'https://farm9.staticflickr.com/8200/8248153196_7a7664e147_m.jpg 240w, https://farm9.staticflickr.com/8200/8248153196_7a7664e147_n.jpg 320w, https://farm9.staticflickr.com/8200/8248153196_7a7664e147.jpg 500w, https://farm9.staticflickr.com/8200/8248153196_7a7664e147_c.jpg 800w, https://farm9.staticflickr.com/8200/8248153196_7a7664e147_b.jpg 1024w';
    let srcSet2 = {
      '240w': 'https://farm9.staticflickr.com/8200/8248153196_7a7664e147_m.jpg',
      '320w': 'https://farm9.staticflickr.com/8200/8248153196_7a7664e147_n.jpg',
      '500w': 'https://farm9.staticflickr.com/8200/8248153196_7a7664e147.jpg',
      '800w': 'https://farm9.staticflickr.com/8200/8248153196_7a7664e147_c.jpg',
      '1024w': 'https://farm9.staticflickr.com/8200/8248153196_7a7664e147_b.jpg'
    };
    let srcSet3 = [
      {
        src: 'https://farm9.staticflickr.com/8200/8248153196_7a7664e147_m.jpg',
        variant: '240w'
      },
      {
        src: 'https://farm9.staticflickr.com/8200/8248153196_7a7664e147_n.jpg',
        variant: '320w'
      },
      {
        src: 'https://farm9.staticflickr.com/8200/8248153196_7a7664e147.jpg',
        variant: '500w'
      },
      {
        src: 'https://farm9.staticflickr.com/8200/8248153196_7a7664e147_c.jpg',
        variant: '800w'
      },
      {
        src: 'https://farm9.staticflickr.com/8200/8248153196_7a7664e147_b.jpg',
        variant: '1024w'
      }
    ];
    return (
      <Document title="Responsive | React lazysizes"
        className="page-responsive">
        <div>
          <div className="alert alert-danger" role="alert">
            For responsive images support you must use either use a full
            polyfill like <a href="https://github.com/scottjehl/picturefill">picturefill</a>
          </div>
          <LazySizes width="940"
            height="500"
            dataSrcSet={srcSet1}
            className="img-responsive"/>
          <hr/>
          <LazySizes width="940"
            height="500"
            dataSrcSet={srcSet2}
            className="img-responsive"/>
          <hr/>
          <LazySizes width="940"
            height="500"
            dataSrcSet={srcSet3}
            className="img-responsive"/>
        </div>
      </Document>
    );
  }
}

export default ResponsivePage;
