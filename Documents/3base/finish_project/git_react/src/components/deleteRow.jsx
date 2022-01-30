import React from 'react';
export default function DeleteRow(props) {

    const { coupon, listCoupons, setListCoupons } = props;

    async function deleteRow() {

        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
        };

        await fetch('http://localhost:5000/coupon/deleteOne/' + coupon._id, requestOptions);
        const newListCoupons = listCoupons.filter(coup => coup._id !== coupon._id);
        setListCoupons(newListCoupons);
    }
    return (
        <>
            <button className="button muted-button" onClick={deleteRow}>Delete</button>
        </>
    );
}

