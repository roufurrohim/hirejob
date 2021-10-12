import React from 'react'

export const Pagination = ({postsPerPage, totalPosts}) => {
    
    const pageNumbers = []

    for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <nav>
            <ul className='pagination'>
                {
                    pageNumbers.map(number => (
                        <li key={number} className='page-item'>
                            <p className='page-link paginat'>
                                {number}
                            </p>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}

export default Pagination