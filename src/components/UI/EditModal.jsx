import { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { useUsers } from '../../context/MainContext';
// import { v4 as uuidv4 } from 'uuid';
const EditModal = ({ user, show, closeModal }) => {
    const { editUser } = useUsers();
    const id = user.id;

    const [updated, setUpdated] = useState({
        id: user.id,
        name: user.name,
        email: user.email,
        website: user.website,
        phone: user.phone
    });

    const handleChange = (e) => {
        setUpdated({ ...updated, [e.target.name]: e.target.value });
    };

    return (
        <div
            className="modal show"
            style={{ display: 'block', position: 'initial' }}
        >
            <Modal show={show} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Update User</Modal.Title>
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
                                value={updated.name}
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
                                value={updated.email}
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
                                value={updated.website}
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
                                value={updated.phone}
                                type="tel"
                                placeholder="Phone *"
                            />
                        </Form.Group>

                        <Form.Group className="mb-3 d-grid gap-2">
                            <Button
                                onClick={() => {
                                    editUser(id, updated);
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

export default EditModal;
