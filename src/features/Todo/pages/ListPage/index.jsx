import React from 'react';
import PropTypes from 'prop-types';
import TodoForm from '../../components/TodoForm';

ListPage.propTypes = {
    
};

const handleTodoFormSubmit = (values) => {
    console.log('Form submit: ', values);
};

function ListPage(props) {
    return (
        <div>
            <h3>What to do</h3>
            <TodoForm onSubmit={} />
        </div>
    );
}

export default ListPage;