import React from 'react';
import {Container} from 'reactstrap';

const FAQ = () => {
    return (
        <Container>
            <h1>Frequently Asked Questions</h1>
            <hr />
            <h4>Why is my list item not being added?</h4>
            <p>Please ensure you have a valid input. For example, the quantity input field only accepts numbers, and no other characters.</p>
            <h4>Why am I not getting back results from the recipe finder?</h4>
            <p>The combination of your input does not match anything in the database. If this is the case, please adjust your input to find matching recipes.</p>
            <h4>How can I search for more recipes?</h4>
            <p>At this time, users can see only a set number of recipes. We appreaciate your patience as we continue to work on expanding the features of our site.</p>
            <h4>Other questions, concerns, or recommendations?</h4>
            <p>Contact us at listashoppinglist@email.com and we will get back to you within 24 hours.</p>
        </Container>
    );

}

export default FAQ