import React from 'react'

function Person({person}) {
    return (
        <div>
            <h2>I am {person.name}. I am {person.age} years old.my skills are {person.skill}</h2>)

        </div>
    )
}

export default Person
