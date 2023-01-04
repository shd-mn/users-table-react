import { useState } from 'react';
import { useUsers } from '../../context/MainContext';
import { Button } from 'react-bootstrap';
import EditModal from '../UI/EditModal';
import TooltipComp from '../UI/TooltipComp';

const User = ({ user, id }) => {
    const { deleteUsers } = useUsers();

    const [show, setShow] = useState(false);

    const showModal = () => {
        setShow(true);
    };
    const closeModal = () => {
        setShow(false);
    };

    return (
        <>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.website}</td>
            <td>{user.phone}</td>
            <td>
                <TooltipComp text="update user" placement="top">
                    <Button
                        onClick={showModal}
                        id={user.id}
                        size="sm"
                        variant="secondary"
                    >
                        Edit
                    </Button>
                </TooltipComp>

                <TooltipComp text="delete user" placement="top">
                    <Button
                        onClick={() => {
                            deleteUsers(user.id);
                        }}
                        size="sm"
                        variant="danger"
                    >
                        Del
                    </Button>
                </TooltipComp>
                <EditModal user={user} show={show} closeModal={closeModal} />
            </td>
        </>
    );
};

export default User;
