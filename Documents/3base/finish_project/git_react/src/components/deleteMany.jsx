import React from 'react';

export default function DeleteMany(props) {

    const { listCheckBox } = props

    async function deleteMany() {

        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
        };

        console.log(listCheckBox);
        const response = await fetch(`http://localhost:5000/coupon/deleteMany/${listCheckBox.join()}`, requestOptions);
        const data = await response.json();
        console.log(data);
    }

    return (
        <>
            <button onClick={deleteMany}>delete checked</button>
        </>
    );
}
