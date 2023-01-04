import { useUsers } from '../../context/MainContext';

import { v4 as uuidv4 } from 'uuid';
import { Table, Alert, Button } from 'react-bootstrap';
import User from './User';
import TooltipComp from '../UI/TooltipComp';

const UserList = () => {
    const { showAlert, currentUsers, sort, setSort, dispatch } = useUsers();
    const handleSort = () => {
        dispatch({ type: 'sort_user', sort });
        setSort(!sort);
    };

    return (
        <div>
            <Alert className="alert" show={showAlert} variant="success">
                New User Added!
            </Alert>
            <Table responsive striped bordered hover>
                <thead variant="primary">
                    <tr>
                        <th>
                            Name
                            <TooltipComp text="sort list" placement="right">
                                <Button
                                    variant="outline-dark"
                                    size="sm"
                                    className="ms-5"
                                    onClick={handleSort}
                                >
                                    {sort ? '🔽' : '🔼'}
                                </Button>
                            </TooltipComp>
                        </th>
                        <th>Email</th>
                        <th>Website</th>
                        <th>Phone</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {currentUsers.map((user, id) => (
                        <tr key={uuidv4()}>
                            <User user={user} />
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default UserList;
