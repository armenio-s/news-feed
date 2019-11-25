/*import React from 'react'

const Pagination = ({ latestNewsSliced, latestNews }) => {
    console.log("prop completa"); console.log(latestNews);
    console.log("prop sliced"); console.log(latestNewsSliced);
    const pageNumbers = [];
    console.log("array vacio"); console.log(pageNumbers);

    for(let i = 1; i <= Math.ceil(latestNews / latestNewsSliced); i++) {
        pageNumbers.push(i);
    }
    console.log("numero de paginas"); console.log(pageNumbers)

    return (
        <div>
          {pageNumbers.map(number => (
              <li key={number}>
                  <a href="#">
                      {number}
                  </a>
              </li>
          ))}  
        </div>
    )
}

export default Pagination;*/

import React from 'react';

const Pagination = ({ latestNews, latestNewsSliced, paginate }) => {
  const pageNumbers = [];
// Me muestra el array vacio porque la prop no tiene datos. revisar.
  for (let i = 1; i <= (latestNewsSliced); i++) {
    pageNumbers.push(i);
  }

  console.log(pageNumbers);
  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <a onClick={() => paginate(number)} href='!#' className='page-link'>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;