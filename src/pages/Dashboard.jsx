import useAuth from "../hooks/useAuth";

const Dashboard = () => {
  const { user } = useAuth();

  console.log(user);
  console.log(user.photoUrl);
  console.log(user.metadata?.creationTime);

  const userName = user?.displayName;
  const photoURL = user?.photoURL;
  const email = user?.email;
  const creationTime = user?.metadata?.creationTime;

  return (
    <div className="container  mx-auto">
      <h1 className="ms-64 mb-8 text-5xl font-bold text-violet-600">
        {" "}
        Dashboard
      </h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              
              <th className="text-violet-600 font-bold text-lg">User</th>
              <th className="text-violet-600 font-bold text-lg">
                {" "}
                Email Address
              </th>
              <th className="text-violet-600 font-bold text-lg">
                User CreationTime
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={photoURL} />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{userName}</div>
                    
                  </div>
                </div>
              </td>
              <td>
                {email}
                <br />
                
              </td>
              <td>{creationTime}</td>
              <th>
                
              </th>
            </tr>
            {/* row 2 */}
            {/* <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="/src/assets/img/user-1.jpg"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Brice Swyre</div>
                    <div className="text-sm opacity-50">China</div>
                  </div>
                </div>
              </td>
              <td>
                Carroll Group
                <br />
                <span className="badge badge-ghost badge-sm">
                  Tax Accountant
                </span>
              </td>
              <td>Loafer</td>
              <th>
                <button className="btn btn-ghost bg-violet-500 text-white btn-xs">details</button>
              </th>
            </tr> */}
            {/* row 3 */}
            {/* <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="/src/assets/img/user-2.jpg"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Marjy Ferencz</div>
                    <div className="text-sm opacity-50">Russia</div>
                  </div>
                </div>
              </td>
              <td>
                Rowe-Schoen
                <br />
                <span className="badge badge-ghost badge-sm">
                  Office Assistant I
                </span>
              </td>
              <td>Sandals</td>
              <th>
                <button className="btn btn-ghost bg-violet-500 text-white btn-xs">details</button>
              </th>
            </tr> */}
          </tbody>
          {/* foot */}
        </table>
      </div>

      {/* anther section  */}

      {/* <div className="ms-72 mt-10">
      <div className="stats w-auto  shadow">
        <div className="stat ">
          <div className="stat-title">Total Sales</div>
          <div className="stat-value text-primary">$25,664</div>
          <div className="stat-desc text-pink-500">
            21% more than last month
          </div>
        </div>

        <div className="stat ">
          <div className="stat-title">Site Visit</div>
          <div className="stat-value text-secondary">20.6k</div>
          <div className="stat-desc ">21% more than last month</div>
        </div>

        <div className="stat ">
          <div className="stat-figure text-secondary">
            <div className="avatar online">
              <div className="w-16 rounded-full">
                <img src="/src/assets/img/user.jpg" />
              </div>
            </div>
          </div>
          <div className="stat-value">25M</div>
          <div className="stat-title">Searchs</div>
          <div className="stat-desc text-secondary">30 days remaining</div>
        </div>
      </div>
      </div> */}
    </div>
  );
};

export default Dashboard;
