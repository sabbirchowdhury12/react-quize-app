import React from 'react';

const Blog = () => {
    return (
        <div className='min-h-screen bg-violet-100 p-5 sm:p-10 md:p-20'>
            <h2 className='text-2xl font-bold'>What is the purpose of react router?</h2>
            <p className='py-4'><strong>Ans:</strong> ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.</p>
            <h2 className='text-2xl font-bold'>How does context api work</h2>
            <p className='py-4'><strong>Ans:</strong>  The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
            <h2 className='text-2xl font-bold'>What is useRef?</h2>
            <p className='py-4'><strong>Ans:</strong>  useRef is like a “box” that can hold a mutable value in its .current property.useRef() is useful for more than the ref attribute. It’s handy for keeping any mutable value around similar to how you’d use instance fields in classes.he useRef Hook allows you to persist values between renders.It can be used to access a DOM element directly.

            </p>
        </div>
    );
};

export default Blog;