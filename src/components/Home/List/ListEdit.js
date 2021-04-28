import React, {useState} from 'react';
import { Button, Input, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import APIURL from '../../../helpers/environment'

const ListEdit = (props) => {
    const [editItem, setEditItem] = useState(props.listToUpdate.item);
    const [editQty, setEditQty] = useState(props.listToUpdate.quantity);
    const [editCat, setEditCat] = useState(props.listToUpdate.category);

    const listUpdate = (event, list) => {
        event.preventDefault();
        fetch(`${APIURL}/list/update/${props.listToUpdate.id}`, {
            method: 'PUT',
            body: JSON.stringify({list: {item:editItem, quantity:editQty, category:editCat}}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${props.token}`
            }) 
            }).then((res) => {
                props.fetchLists();
                props.updateOff();
        })
    }

    return(
        <Modal isOpen={true}>
            <ModalHeader>Edit List Entry</ModalHeader>
            <ModalBody>
                <Input type="text" placeholder= "Edit Item" value={editItem} onChange={(e) => setEditItem(e.target.value)}/>
                <Input type="text" placeholder= "Edit Quantity" value={editQty} onChange={(e) => setEditQty(e.target.value)}/>
                <Input type="select" placeholder="Edit Category" value={editCat} onChange={(e) => setEditCat(e.target.value)}>
                    <option value="Produce">Produce</option>
                    <option value="Dairy">Dairy</option>
                    <option value="Meat & Seafood">Meat & Seafood</option>
                    <option value="Frozen">Frozen</option>
                    <option value="Pantry">Pantry</option>
                    <option value="Household Goods">Household Goods</option>
                </Input>
            </ModalBody>
            <ModalFooter>
                <Button color="success" type="submit" onClick={listUpdate}>Finish Changes</Button>
                <Button color="danger" type="submate" onClick={props.updateOff}>Cancel</Button>
            </ModalFooter>

        </Modal>
    )
}

export default ListEdit