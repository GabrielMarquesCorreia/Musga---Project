import { PlusOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useUserContext } from "../../UserContext/index.tsx";
import { useEffect } from "react";

function Login() {
  const { users } = useUserContext();

  const handleProfileClick = (userId: string) => {
    localStorage.setItem("selectedUserId", userId);
  };

  // Function to get the user name based on userId from context
  const getUserName = (userId: string) => {
    const user = users.find((user) => user.id === userId);
    return user ? user.name : `Usuário ${userId}`;
  };

  // Function to get the user profile image based on userId from context
  const getProfileImage = (userId: string) => {
    const user = users.find((user) => user.id === userId);
    return user ? user.profileImage : "/images/default.jpg"; // Use profileImage from context
  };

  useEffect(() => {
    console.log("Users from context in Login: ", users);
  }, [users]);

  return (
    <div>
      <div className="bg-black h-screen bg-opacity-35 md:bg-opacity-55 p-5">
        {/* Header - Inicio */}
        <div className="flex justify-center">
          <img src="/images/logo.png" alt="Logo" className="md:w-80 xl:w-96" />
        </div>
        {/* Header - Fim */}

        {/* Content - Inicio */}
        <div className="flex flex-col pt-16 md:pt-24 xl:pt-12 justify-center items-center">
          <div className="flex justify-center">
            <p className="font-semibold text-2xl md:text-4xl xl:text-5xl">
              Escolha quem irá utilizar o app:
            </p>
          </div>

          <div className="grid grid-cols-2 pt-10 gap-12 md:gap-7 lg:gap-14 xl:gap-16 md:flex">
            {[1, 2, 3].map((id) => (
              <div key={id} className="col-span-1 m-0">
                <Link
                  className="text-center"
                  to={`../profile/${id}`}
                  onClick={() => handleProfileClick(id.toString())}
                >
                  <img
                    src={getProfileImage(id.toString())}
                    alt={`Profile-${id}`}
                    className="mb-5 border-white border-solid border-[1px] rounded-full md:w-40 md:h-40 xl:w-52 xl:h-52"
                  />
                  <p className="font-semibold text-2xl xl:text-4xl">
                    {getUserName(id.toString())}
                  </p>
                </Link>
              </div>
            ))}

            <div className="col-span-1 m-0">
              <Link className="text-center" to="../home">
                <div className="mb-7 border-white border-solid border-[1px] rounded-full h-36 md:h-40 items-center justify-center flex bg-gray8 md:w-40 xl:w-52 xl:h-52">
                  <PlusOutlined className="text-5xl" />
                </div>
                <p className="font-semibold text-2xl xl:text-4xl">Add</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Content - Fim */}
    </div>
  );
}

export default Login;
