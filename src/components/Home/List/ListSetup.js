import React, {useState, useEffect} from 'react';
import {Container, Table, Form, FormGroup, Button, Label, Input} from 'reactstrap';
import APIURL from '../../../helpers/environment'
import {addButton} from '../../../Styles.js'

const ListCreate =(props) => {
    const [item, setItem] = useState('');
    const [quantity, setQuantity] = useState('');
    const [category, setCategory] = useState('');
    console.log(props.token.token)

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`${APIURL}/list/create`, {
            method: "POST",
            body: JSON.stringify({list: {item:item, quantity:quantity, category:category}}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${props.token.token}`
            })
        }) .then((res) => res.json())
        .then((listData) => {
            setItem('');
            setQuantity('');
            setCategory('');
            props.fetchLists();
            console.log(listData)
        })
    }

    return(
        <Container>
            <h2>Add New Item</h2>
            <Table borderless size="sm" >
                <thead>
                    <tr>
                    <th>Item</th>
                    <th>Quantity</th>
                    <th>Category</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>
                            <Form>
                                <FormGroup>
                                    <Label htmlFor='item'></Label>
                                    <Input name='Item' value={item} onChange={(e) =>setItem(e.target.value)}/>
                                </FormGroup>
                            </Form>
                        </th>
                        <th>
                            <Form>
                                <FormGroup>
                                    <Label htmlFor='quantity'></Label>
                                    <Input name='Quantity' value={quantity} onChange={(e) =>setQuantity(e.target.value)}/>
                                </FormGroup>
                            </Form>
                        </th>
                        <th>
                            <Form>
                                <FormGroup>
                                    <Label htmlFor='category'></Label>
                                    <Input type='select' placeholder="Select a Category" name='Category' value={category} onChange={(e) =>setCategory(e.target.value)}>
                                        <option>Select One</option>
                                        <option value="Produce">Produce</option>
                                        <option value="Dairy">Dairy</option>
                                        <option value="Meat & Seafood">Meat & Seafood</option>
                                        <option value="Frozen">Frozen</option>
                                        <option value="Pantry">Pantry</option>
                                        <option value="Household Goods">Household Goods</option>
                                    </Input>
                                </FormGroup>
                            </Form>
                        </th>
                        <th>
                        <Button style={addButton} type="submit" onClick={handleSubmit}>Add</Button>
                        </th>
                      </tr>  
                </tbody>
            </Table>
        </Container>
    )
}

export default ListCreate;