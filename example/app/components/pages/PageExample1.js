import React from 'react';
import Document from 'components/common/Document';
import LazySizes from 'react-lazysizes';

class PageExample1 extends React.Component {
  state = {
    categories: ['abstract', 'animals', 'business', 'cats', 'city', 'food', 'nightlife', 'fashion', 'people', 'nature', 'sports', 'transport']
  };

  render() {
    return (
      <Document title='Example1 | React lazysizes' className='page-ex-1'>
        <div>
          {this.state.categories.map(category => {
            return (
              <div key={category} className='panel panel-default'>
                <div className='panel-heading'>{category}</div>
                <div className='panel-body'>
                  <LazySizes dataSrcSet={`http://lorempixel.com/100/100/${category}/1 1x, http://lorempixel.com/200/200/${category}/1 2x`}
                    className='thumbnail-item' width='100' height='100'/>
                  <LazySizes dataSrcSet={`http://lorempixel.com/100/100/${category}/2 1x, http://lorempixel.com/200/200/${category}/2 2x`}
                    className='thumbnail-item' width='100' height='100'/>
                  <LazySizes dataSrcSet={`http://lorempixel.com/100/100/${category}/3 1x, http://lorempixel.com/200/200/${category}/3 2x`}
                    className='thumbnail-item' width='100' height='100'/>
                  <LazySizes dataSrcSet={`http://lorempixel.com/100/100/${category}/4 1x, http://lorempixel.com/200/200/${category}/4 2x`}
                    className='thumbnail-item' width='100' height='100'/>
                  <LazySizes dataSrcSet={`http://lorempixel.com/100/100/${category}/5 1x, http://lorempixel.com/200/200/${category}/5 2x`}
                    className='thumbnail-item' width='100' height='100'/>
                  <LazySizes dataSrcSet={`http://lorempixel.com/100/100/${category}/6 1x, http://lorempixel.com/200/200/${category}/6 2x`}
                    className='thumbnail-item' width='100' height='100'/>
                  <LazySizes dataSrcSet={`http://lorempixel.com/100/100/${category}/7 1x, http://lorempixel.com/200/200/${category}/7 2x`}
                    className='thumbnail-item' width='100' height='100'/>
                  <LazySizes dataSrcSet={`http://lorempixel.com/100/100/${category}/8 1x, http://lorempixel.com/200/200/${category}/8 2x`}
                    className='thumbnail-item' width='100' height='100'/>
                  <LazySizes dataSrcSet={`http://lorempixel.com/100/100/${category}/9 1x, http://lorempixel.com/200/200/${category}/9 2x`}
                    className='thumbnail-item' width='100' height='100'/>
                  <LazySizes dataSrcSet={`http://lorempixel.com/100/100/${category}/10 1x, http://lorempixel.com/200/200/${category}/10 2x`}
                    className='thumbnail-item' width='100' height='100'/>
                </div>
              </div>
            );
          })}
        </div>
      </Document>
    );
  }
}

export default PageExample1;

