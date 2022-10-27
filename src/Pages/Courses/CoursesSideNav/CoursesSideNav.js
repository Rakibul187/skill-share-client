import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CoursesSideNav = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/courses-categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div>
            <h3>Our Provided Courses {categories?.length}</h3>
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