import React from 'react'

// function Greet()
// {
//     return <h1>Hello Aishu</h1>
// }
const Greet = props => {
    const {name, fullname} = props


return( 
<div>
<h1>Hello {name} o.r {fullname}</h1>
</div>
)
}
export default Greet