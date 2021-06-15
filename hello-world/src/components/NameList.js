import React, {Component} from "react"
import Person from "./Person"
function NameList(){
const persons = [
    {
        id: 1 ,
        name: 'Aishu',
        age: '25',
        skill: 'React'
    },
    {
        id: 2,
        name: 'salim',
        age: '29',
        skill: 'java'

    }
]
const personList = persons.map(person => 
    <Person person = {person} />)
return <div>{personList}</div>
 
}

export default NameList


