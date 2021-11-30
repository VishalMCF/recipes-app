import { useState } from 'react'

import './Create.css'

export default function Create() {
    const [title, setTitle] = useState();
    const [method, setMethod] = useState();
    const [cookingTime, setCookingTime] = useState();

    return (
        <div className="create">
            <h2> Create </h2>
        </div>
    )
}
