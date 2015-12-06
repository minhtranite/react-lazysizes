import React from 'react';
import Document from 'components/common/Document';
import LazySizes from 'react-lazysizes';

class PageExample2 extends React.Component {
  render() {
    return (
      <Document title='Example2 | React lazysizes' className='page-ex-2'>
        <div>
          <div className='alert alert-danger' role='alert'>
            For responsive images support you must use either use a full
            polyfill like <a href='https://github.com/scottjehl/picturefill'>picturefill</a>
          </div>
          <LazySizes width='940'
            height='500'
            dataSrcSet='https://farm9.staticflickr.com/8200/8248153196_7a7664e147_m.jpg 240w, https://farm9.staticflickr.com/8200/8248153196_7a7664e147_n.jpg 320w, https://farm9.staticflickr.com/8200/8248153196_7a7664e147.jpg 500w, https://farm9.staticflickr.com/8200/8248153196_7a7664e147_c.jpg 800w, https://farm9.staticflickr.com/8200/8248153196_7a7664e147_b.jpg 1024w'
            className='img-responsive'/>
        </div>
      </Document>
    );
  }
}

export default PageExample2;

