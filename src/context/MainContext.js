import { createContext, useContext, useEffect, useState } from 'react';
import { db } from '../db';

const MainContext = createContext();
const MainProvider = ({ children }) => {
    const [users, setUsers] = useState([]);
    const [showAlert, setShowAlert] = useState(false);
    // const [sortedUser, setSortedUser] = useState(users);
    const [sort, setSort] = useState(false);

    const [newUser, setNewUser] = useState({
        name: '',
        email: '',
        website: '',
        phone: ''
    });

    useEffect(() => {
        setUsers(db);
    }, []);

    const deleteUsers = (id) => {
        setUsers(users.filter((user) => user.id !== id));
    };

    const addUser = (e) => {
        e.preventDefault();
        newUser.name && newUser.email && setUsers([...users, newUser]);
        newUser.name && newUser.email && handleShowAlert();
    };

    const editUser = (id, updatedUser) => {
        setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
    };

    const handleShowAlert = () => {
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false);
        }, 2000);
    };

    const handleSort = () => {
        setUsers(
            users.sort((a, b) =>
                sort
                    ? a.name.localeCompare(b.name)
                    : b.name.localeCompare(a.name)
            )
        );
        setSort(!sort);
    };

    // Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [usersPerPage] = useState(4);

    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);
    const totalPages = Math.ceil(users.length / usersPerPage);

    const data = {
        users,
        setUsers,
        newUser,
        setNewUser,
        addUser,
        editUser,
        deleteUsers,
        showAlert,
        handleShowAlert,
        currentUsers,
        totalPages,
        currentPage,
        setCurrentPage,
        indexOfLastUser,
        sort,
        handleSort
    };
    return <MainContext.Provider value={data}>{children}</MainContext.Provider>;
};

export const useUsers = () => useContext(MainContext);

export default MainProvider;
