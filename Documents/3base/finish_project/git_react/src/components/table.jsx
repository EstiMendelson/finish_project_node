import React from "react";
import { useState } from "react";
import DisplayRow from "./displayRow";
import EditRow from "./editRow";
import InfiniteScroll from 'react-infinite-scroll-component';
import './csses.css'


export default function Table(props) {

  const { listCoupons, setListCoupons } = props;
  const [couponKeys, setCouponKeys] = useState([]);
  const [couponEdit, setCouponEdit] = useState();
  const [scroll, setScroll] = useState(20);
  const [isMore, setIsMore] = useState(true);

  async function getAll() {

    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    };

    const response = await fetch('http://localhost:5000/coupon/getAll/' + (scroll - 20) + "/" + scroll, requestOptions);
    const data = await response.json();
    if (data.length === 0) {
      setIsMore(false);
      return;
    }
    const newList = listCoupons.concat(data);
    setListCoupons(newList);
    setCouponKeys(Object.keys(data[0]));
    setScroll(scroll + 20);

  }

  React.useEffect(getAll, [])


  return (<>

    <InfiniteScroll
      dataLength={scroll}
      next={getAll}
      hasMore={isMore}
      loader={<h4>Loading...</h4>}
      //inverse = { true }
      endMessage={
        <p style={{ textAlign: 'center' }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
    >
      <table class="table table-striped table-hover">
        <thead>

          {listCoupons ?
            <tr>
              <th></th>
              {couponKeys.map(item => item !== '_id' && item !== '__v' &&
                <th key={item}>{item}</th>
              )}
            </tr> : ""}
        </thead>
        <tbody>
          {listCoupons ?
            listCoupons.length > 0 ? (
              listCoupons.map((coupon) =>
                couponEdit ?
                  couponEdit._id === coupon._id ?
                    <EditRow listCoupons={props.listCoupons} coupon={coupon} setListCoupons={props.setListCoupons} setCouponEdit={setCouponEdit} couponEdit={couponEdit} />
                    : <DisplayRow key={coupon._id} couponKeys={couponKeys} coupon={coupon} listCoupons={listCoupons} setListCoupons={setListCoupons} setCouponEdit={setCouponEdit} setListCheckBox={props.setListCheckBox} listCheckBox={props.listCheckBox} />
                  : <DisplayRow key={coupon._id} couponKeys={couponKeys} coupon={coupon} listCoupons={listCoupons} setListCoupons={setListCoupons} setCouponEdit={setCouponEdit} setListCheckBox={props.setListCheckBox} listCheckBox={props.listCheckBox} />

              )
            ) : (
              <tr class="table-primary">
                <td class="table-primary" >No coupons</td>
              </tr>
            ) : ""}
        </tbody>

      </table>
    </InfiniteScroll>
  </>
  );
}