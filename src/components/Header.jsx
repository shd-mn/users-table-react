import { useEffect, useState } from 'react';
import { useUsers } from '../context/MainContext';

import { Button } from 'react-bootstrap';
import AddModal from './UI/AddModal';

const Header = () => {
    const { users, setNewUser } = useUsers();
    useEffect(() => {
        closeModal();
    }, [users]);
    const [show, setShow] = useState(false);

    const showModal = () => {
        setShow(true);
    };
    const closeModal = () => {
        setShow(false);
        setNewUser({
            id: '',
            name: '',
            email: '',
            website: '',
            phone: ''
        });
    };

    return (
        <>
            <AddModal show={show} closeModal={closeModal} />
            <div className="bg-dark d-flex p-3">
                <h1 className="text-white me-auto">Manage Users</h1>
                <Button variant="success" size="sm" onClick={showModal}>
                    Add New User
                </Button>
            </div>
        </>
    );
};

export default Header;
