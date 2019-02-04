import React from 'react';


const Tags = ({ data }) => {

    if (!data || !Array.isArray(data)) {
        return null;
    }

    return (
        <div className='tags-block'>
            Tags:
            {data.map((tag, i) =>
                <span key={i}>{tag}</span>
            )}
        </div>
    )
}

export default Tags;