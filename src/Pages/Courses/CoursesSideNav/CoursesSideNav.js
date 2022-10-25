import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CoursesSideNav = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/news-categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div>
            <h1>This is Side navigation- {categories.length}</h1>
            {
                categories.map(category => <p key={category.id}>
                    <Link to={`/coursesSideNav/${category.id}`}>{category.name}</Link>
                </p>)
            }
        </div>
    );
};

export default CoursesSideNav;