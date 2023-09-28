import React, { useEffect, useState } from 'react';

function FetchToDoApi() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/todos/`)
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error('Error fetching data: ', error));
    }, []);

    return (
        <div className="main" style={{ display: 'flex', flexWrap: 'wrap' }}>
            {data.map((d) => (
                <div
                    key={d.id}
                    className="cards"
                    style={{
                        border: '1px solid black',
                        width: '200px',
                        margin: '5px',
                        backgroundColor: d.completed ? 'green' : 'red',
                        padding: '10px',
                        borderRadius: '5px',
                        boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)',
                        textAlign: 'center',
                    }}
                >
                    <span style={{ fontWeight: 'bold', fontSize: '16px' }}>Task ID: {d.id}</span>
                    <h1 style={{ fontSize: '20px', margin: '10px 0' }}>{d.title}</h1>
                    <p style={{ fontStyle: 'italic', fontSize: '14px' }}>
                        Status: {d.completed ? 'Completed' : 'Not Completed'}
                    </p>
                </div>
            ))}
        </div>
    );
}

export default FetchToDoApi;
