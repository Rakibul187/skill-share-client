import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CoursesSideNav = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('https://skill-share-server.vercel.app/courses-categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div>
            <h3 className='text-secondary'>Our Provided Courses List</h3>
            {
                categories.map(category =>
                    // console.log(category)
                    <p key={category.id}>
                        <Link to={`${category.id}`}>{category?.name}</Link>
                    </p>
                )
            }
        </div>
    );
};

export default CoursesSideNav;