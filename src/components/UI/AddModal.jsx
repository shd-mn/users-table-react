import { Modal, Button, Form } from 'react-bootstrap';
import { useUsers } from '../../context/MainContext';
import { v4 as uuidv4 } from 'uuid';
const AddModal = ({ show, closeModal }) => {
    const { newUser, setNewUser, dispatch, handleShowAlert } = useUsers();

    const handleChange = (e) => {
        setNewUser({
            ...newUser,
            id: uuidv4(),
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newUser.name && newUser.email) {
            dispatch({ type: 'add_user', newUser });
            handleShowAlert();
            closeModal();
        }
    };

    return (
        <div
            className="modal show"
            style={{ display: 'block', position: 'initial' }}
        >
            <Modal show={show} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Add User</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                        >
                            <Form.Control
                                name="name"
                                onChange={(e) => handleChange(e)}
                                type="text"
                                placeholder="Name *"
                            />
                        </Form.Group>

                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                        >
                            <Form.Control
                                name="email"
                                onChange={(e) => handleChange(e)}
                                type="email"
                                placeholder="Email *"
                            />
                        </Form.Group>

                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Control
                                name="website"
                                onChange={(e) => handleChange(e)}
                                as="textarea"
                                rows={3}
                                placeholder="Website *"
                            />
                        </Form.Group>

                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                        >
                            <Form.Control
                                name="phone"
                                onChange={(e) => handleChange(e)}
                                type="tel"
                                placeholder="Phone *"
                            />
                        </Form.Group>

                        <Form.Group className="mb-3 d-grid gap-2">
                            <Button
                                onClick={(e) => {
                                    handleSubmit(e);
                                }}
                                type="submit"
                                variant="success"
                            >
                                Save changes
                            </Button>
                        </Form.Group>
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button onClick={closeModal} variant="danger">
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default AddModal;
