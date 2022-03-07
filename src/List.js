import React from 'react';

function List({ people }){
    return(
        <>
            {people.map((person) => {
                const { id, name, age, image } = person;
                return (
                    <article key={id} className="article_person">
                        <img src={image} alt={name} className="person_img" />
                        <div>
                            <h4 className='person_name'>{name}</h4>
                            <p className='person_age'>{age} years</p>
                        </div>
                    </article>
                )
            })}
        </>
    )
}

export default List;