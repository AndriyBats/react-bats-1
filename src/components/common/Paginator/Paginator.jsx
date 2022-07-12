import React from 'react';
import style from './Paginator.module.css';

let Paginator = ({currentPage, totalUsersCount, pageSize, onPageChanged}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div className={style.center}>
            <span>
                {pages.map(page => {
                    return <span
                        key={page}
                        className={`${currentPage === page && style.selectedPage} ${style.pages}`}
                        onClick={(e) => {onPageChanged(page) }}
                    >
                        {` ${page} `}
                    </span>
                })}
            </span>
        </div>
    )
}

export default Paginator;
