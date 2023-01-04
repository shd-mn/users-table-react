import { useUsers } from '../../context/MainContext';
import { Pagination } from 'react-bootstrap';

function PaginationComp() {
    const {
        users,
        totalPages,
        currentPage,
        setCurrentPage,
        indexOfLastUser
    } = useUsers();
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
        pages.push(
            <Pagination.Item
                onClick={() => {
                    setCurrentPage(i);
                }}
                key={i}
                active={currentPage === i}
            >
                {i}
            </Pagination.Item>
        );
    }

    return (
        <div className="d-flex px-2 align-items-center">
            <p className="pagination-info me-auto">
                Showing {indexOfLastUser} out of {users.length}
            </p>
            <Pagination>
                <Pagination.Prev
                    disabled={currentPage === 1}
                    onClick={() => {
                        setCurrentPage(currentPage - 1);
                    }}
                />
                {pages}

                <Pagination.Next
                    disabled={currentPage === totalPages}
                    onClick={() => {
                        setCurrentPage(currentPage + 1);
                    }}
                />
            </Pagination>
        </div>
    );
}

export default PaginationComp;
