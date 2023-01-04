import { createContext, useContext, useReducer, useState } from 'react';
import { db } from '../db';

const MainContext = createContext();
const MainProvider = ({ children }) => {

    const [showAlert, setShowAlert] = useState(false);
    const [sort, setSort] = useState(false);
    const [newUser, setNewUser] = useState({
        name: '',
        email: '',
        website: '',
        phone: ''
    });

    const reducer = (users, action) => {
        switch (action.type) {
            case 'add_user':
                return [
                    ...users,
                    {
                        name: action.newUser.name,
                        email: action.newUser.email,
                        website: action.newUser.website,
                        phone: action.newUser.phone
                    }
                ];

            case 'delete_user':
                return users.filter((user) => user.id !== action.id);
            case 'update_user':
                return users.map((user) =>
                    user.id === action.id ? action.updated : user
                );
            case 'sort_user':
                return users.sort((a, b) =>
                    action.sort
                        ? a.name.localeCompare(b.name)
                        : b.name.localeCompare(a.name)
                );
            default:
                return users;
        }
    };

    const [users, dispatch] = useReducer(reducer, db);




    const handleShowAlert = () => {
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false);
        }, 2000);
    };

    const [currentPage, setCurrentPage] = useState(1);
    const [usersPerPage] = useState(4);

    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);
    const totalPages = Math.ceil(users.length / usersPerPage);

    const data = {
        users,
        dispatch,
        newUser,
        setNewUser,
        showAlert,
        handleShowAlert,
        currentUsers,
        totalPages,
        currentPage,
        setCurrentPage,
        indexOfLastUser,
        sort,
        setSort
    };
    return <MainContext.Provider value={data}>{children}</MainContext.Provider>;
};

export const useUsers = () => useContext(MainContext);

export default MainProvider;
