import React from 'react';
import DeleteRow from './deleteRow';
import './csses.css'

export default function DisplayRow(props) {

    const { couponKeys, coupon, setCouponEdit, setListCheckBox, listCheckBox } = props;

    function onCeck(event) {

        if (event.target.checked) {
            const id = coupon._id;
            listCheckBox.push(id);
            setListCheckBox(listCheckBox);
        }
        else {
            setListCheckBox(() => listCheckBox.filter(c => c._id !== coupon._id));
        }
    }

    return (
        
        <tr key={coupon._id}>
            <input type="checkbox" onClick={onCeck}></input>
            {couponKeys.map(i => i === 'startDate' || i === 'endDate' ?
                <td>{new Date(coupon[i]).toLocaleDateString()}</td>
                : i !== '_id' && i !== '__v' ?
                    <td>{coupon[i]}</td>
                    : "")}
            <button className="button muted-button" onClick={() => { setCouponEdit(coupon) }}>Edit</button>
            <DeleteRow listCoupons={props.listCoupons} coupon={coupon} setListCoupons={props.setListCoupons} />
        </tr>

    );
}
