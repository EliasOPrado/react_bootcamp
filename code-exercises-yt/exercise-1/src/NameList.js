import React from 'react'

function NameList() {
    const names = ['bruce', 'james', 'peter', 'patrick']
    const persons = [
        {
            id:1,
            name: 'john',
            age: 30,
            skill: 'react'
        },
        {
            id:1,
            name: 'peter',
            age: 27,
            skill: 'django'
        },
        {
            id:1,
            name: 'patric',
            age: 31,
            skill: 'angular'
        },

    ]
    /*
    The index key should only be used when 
    */
    const personList = persons.map(person => 
        <h2 key={person.id}>My name is {person.name}. I have {person.age} years old. And my skill is {person.skill}</h2>
        )
    const nameList = names.map((name, index)=> 
    <h2 key={index}>{name}</h2>    
    )
    return (
        <div>
            {nameList}
            {personList}
        </div>
    )
}

export default NameList
