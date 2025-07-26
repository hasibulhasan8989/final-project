import React, { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle";
import useAuth from "../../../Hooks/useAuth";
import useAxios from "../../../Hooks/useAxios";

const PaymentHistory = () => {
  const { user } = useAuth();
  const [payments, setPayments] = useState([]);
  console.log(payments);

  const axiosSecure = useAxios();
  useEffect(() => {
    axiosSecure.get(`/payment/${user.email}`).then((res) => {
      console.log(res.data);
      setPayments(res.data);
    });
  }, [axiosSecure, user]);
  return (
    <div>
      <SectionTitle
        time={"----Happy Club----"}
        title={"PAYMENT HISTORY"}
      ></SectionTitle>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>TransactionId</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {payments.map((item, idx) => {
            return <tr key={item._id}>
                <th>{idx + 1}</th>
                <td>{item.transactionId}</td>
                <td>{item.price}</td>
                <td>{item?.status}</td>
              </tr>;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
