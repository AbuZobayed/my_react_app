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
                      <img src={photoURL || "/src/assets/img/user.jpg"} />
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
            
          </tbody>
        
        </table>
      </div>

    </div>
  );
};

export default Dashboard;
