import React from 'react';
import { Button } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { Link, useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const course = useLoaderData()

    const successToast = () => {
        toast.success(`Congratulations. You are enrol successfully on ${course?.name} courses`)
    }

    const cancelToast = () => {
        toast('Your cancel is confirm!')
    }
    return (
        <div style={{ width: "100%", height: "50vh", marginBottom: '290px' }} className="d-flex  justify-content-center align-items-center ">
            <div style={{ height: "150x ", width: "700px" }} className="bg-light rounded-3 shadow  p-2">
                <h3 className='text-center text-info'>Check Out</h3>
                <div className='border rounded-2 d-flex justify-content-between align-items-center p-2 '>
                    <div>
                        <h6>{course?.name}</h6>
                        <h6>Price: ${course?.fee}</h6>
                    </div>
                    <div>
                        <p>Course Id</p>
                        <small>{course?._id > 20 ? course?._id.slice(0, 20) : course?._id}</small>
                    </div>
                    <Button onClick={successToast} style={{ height: "38px", width: "100px", marginRight: "10px" }} variant='outline-info'>Confirm</Button>
                    <Button onClick={cancelToast} style={{ height: "38px", width: "100px", marginRight: "10px" }} variant='outline-warning'><Link className='text-decoration-none' to="/courses">Cancel</Link></Button>
                </div>
            </div>
        </div>
    );
};

export default Checkout;