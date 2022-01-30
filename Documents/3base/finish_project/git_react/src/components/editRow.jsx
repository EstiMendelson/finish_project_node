import React from 'react';
import './csses.css'
export default function EditRow(props) {
    const { coupon, listCoupons, setListCoupons, couponEdit, setCouponEdit } = props;
    async function edit() {
        console.log(couponEdit)

        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(couponEdit),
        };
        await fetch(`http://localhost:5000/coupon/update/${couponEdit._id}`, requestOptions);
        setListCoupons(listCoupons, () => listCoupons.filter(c => c._id !== coupon._id));
    }

    function changeValue(e) {
        const { name, value } = e.target;
        setCouponEdit({ ...couponEdit, [name]: value });
    }
    
    return (

        <tr class="table table-striped">
            <td></td>
            <td style={{ width: 1 + 'em' }} ><input className="input" type="text" name="name" defaultValue={couponEdit.name} onChange={changeValue}></input></td>
            <td>
                <select defaultValue={couponEdit.type} className="input" name="type" onChange={changeValue}>
                    <option value="Basic" >Basic</option>
                    <option value="Seasonal">Seasonal</option>
                    <option value="Unlimited">Unlimited</option>
                </select>
            </td>
            <td><input type="date" className="input" defaultValue={new Date(couponEdit.startDate).toLocaleDateString()} name="startDate" onChange={changeValue}></input></td>
            <td><input type="date" className="input" defaultValue={new Date(couponEdit.endDate).toLocaleDateString()} name="endDate" onChange={changeValue}></input></td>
            <td><input type="number" className="input" defaultValue={couponEdit.discountAmount} name="discountAmount" onChange={changeValue}></input></td>
            <td><input type="text" className="input" defaultValue={couponEdit.userGroupName} name="userGroupName" onChange={changeValue}></input></td>
            <td><button onClick={edit}>send</button></td>
        </tr>
    );
}