import React from "react";

export default function CreateData(props) {

    const { listCoupons, setListCoupons } = props;

    async function createData() {

        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        };

        const response = await fetch('http://localhost:5000/coupon/insertData', requestOptions);
        const data = await response.json();
        const newList = listCoupons.concat(data);
        setListCoupons(newList);
    }


    return (
        
        <div class="col-10"  >
            <button onClick={createData}>create data</button>
        </div>
    );
}