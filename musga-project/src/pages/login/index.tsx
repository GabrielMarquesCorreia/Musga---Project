import { PlusOutlined } from "@ant-design/icons";

function Login() {
  return (
    <div className="bg-phone-1 bg-no-repeat h-screen fixed w-screen">
      <div className="bg-black h-screen bg-opacity-35 p-5">
        {/* Header - Inicio */}
        <div className="flex justify-center">
          <img src="../public/images/logo.png" alt="Logo" />
        </div>
        {/* Header - Fim */}

        {/* Content - Inicio */}
        <div className="flex flex-col pt-16">
          <div className="flex items-center">
            <p className="font-semibold text-2xl">
              Escolha quem irá utilizar o app:
            </p>
          </div>

          <div className="grid grid-cols-2 pt-10 gap-12">
            <div className="col-span-1 m-0">
              <a className="text-center" href="#">
                <img
                  src="../public/images/jake.jpg"
                  alt="Profile-1"
                  className="mb-5 border-white border-solid border-[1px] rounded-full"
                />
                <p className="font-semibold text-2xl">Profile 1</p>
              </a>
            </div>

            <div className="col-span-1 m-0">
              <a className="text-center" href="#">
                <img
                  src="../public/images/luffy.jpg"
                  alt="Profile-1"
                  className="mb-5 border-white border-solid border-[1px] rounded-full"
                />
                <p className="font-semibold text-2xl">Profile 2</p>
              </a>
            </div>

            <div className="col-span-1 m-0">
              <a className="text-center" href="#">
                <img
                  src="../public/images/astronauta.jpg"
                  alt="Profile-1"
                  className="mb-5 border-white border-solid border-[1px] rounded-full"
                />
                <p className="font-semibold text-2xl">Profile 3</p>
              </a>
            </div>

            <div className="col-span-1 m-0">
              <a className="text-center" href="#">
                <div className="mb-5 border-white border-solid border-[1px] rounded-full h-36 items-center justify-center flex bg-gray8">
                  <PlusOutlined className="text-5xl" />
                </div>
                <p className="font-semibold text-2xl">Add</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Content - Fim */}
    </div>
  );
}

export default Login;
