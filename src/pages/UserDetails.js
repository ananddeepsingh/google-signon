import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { fetchUserDataAction } from 'actions/userDetailsAction';
import PageTemplate from 'components/PageTemplate';

const UserDetails = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const logoutRedirection = () => navigate('/', { replace: true });

  const [userInfoDataset, setUserInfoDataset] = useState([])
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(3);

  let currentUserData = [];

  const { userData = {} } = useSelector((state) => state?.googleUserDetails);
  const { errorMessageTxt = "" } = useSelector((state) => state?.errorMessage);
  const {
    family_name,
    given_name,
  } = userData;


  // pagination
  if (userInfoDataset?.length > 0) {
    const indexOfLastPost = currentPageNumber * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    currentUserData = userInfoDataset.slice(indexOfFirstPost, indexOfLastPost);

    console.log(currentUserData, "currentUserData")
  }


  const fetchUserData = () => {
    const params = {
      per_page: 3,
      page: 1
    };

    return renderApiData(params)

  }

  const renderApiData = async (params) => {
    return await dispatch(fetchUserDataAction(params))
      .then(({ response }) => {
        setUserInfoDataset(response);
      })
  }

  useEffect(() => {

    if (Object.keys(userData)?.length === 0) {
      logoutRedirection("/")
    }
  }, [userData]);

  useEffect(() => {
    fetchUserData();
  }, []);

  useEffect(() => {
    setUserInfoDataset(userInfoDataset);
  }, [userInfoDataset])

  const renderRows = () => {
    const rows = []
    userInfoDataset?.data?.map(({ id, avatar, email, first_name, last_name }, index) => {
      return rows.push(<tr key={index}>
        <td>{id}</td>
        <td><img src={avatar} alt="photo" /></td>
        <td>{first_name}</td>
        <td>{last_name}</td>
        <td>{email}</td>
      </tr>)
    })

    return rows;
  }

  const handlePageClick = ({ selected }) => {
    const params = {
      per_page: 3,
      page: selected + 1
    };

    return renderApiData(params)
  }


  return <>
    <PageTemplate
      pageHeading='User Details'
    >
      {errorMessageTxt && <h1>{errorMessageTxt}</h1>}
      <div className="page-content">
        <div className="card">
          <div className="card__content">
            <div className="card__title"><strong>User Personal Details</strong></div>
            <p className="card__text"> First Name - {given_name}</p>
            <p className="card__text"> Last Name - {family_name}</p>
          </div>
        </div>
      </div>
      <hr />


      <ReactPaginate
        className="pagination"
        breakLabel="..."
        pageCount={userInfoDataset?.total_pages}
        onPageChange={handlePageClick}
        previousLabel="<"
        nextLabel=">"
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
      />

      <div id="userDetailsWrapper">
        <table className="user-details-table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Display Photo</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {renderRows()}
          </tbody>
        </table>
      </div>

    </PageTemplate>
  </>
}

export default UserDetails;
