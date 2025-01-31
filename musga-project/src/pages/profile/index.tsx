import { useEffect, useState } from "react";
import { GoPencil } from "react-icons/go";
import { MdImage, MdKeyboardArrowDown } from "react-icons/md";
import { RiUserLine } from "react-icons/ri";
import { Link, useParams } from "react-router-dom";
import { useUserContext } from "../../UserContext";

function Profile() {
  // Modal
  // Modall

  // Name and image
  const { userId } = useParams<string>();
  const { users, setUserName, setProfileImage } = useUserContext();
  const user = users.find((user) => user.id === userId);
  const [localName, setLocalName] = useState(user?.name || "");
  const [selectedImage, setSelectedImage] = useState<
    string | ArrayBuffer | null
  >(user?.profileImage || "");

  useEffect(() => {
    if (user) {
      setLocalName(user.name);
      setSelectedImage(user.profileImage); // Atualiza a imagem selecionada se o usuário for encontrado
    }
  }, [userId, user]);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageUrl = reader.result as string;
        setSelectedImage(imageUrl);
        if (userId) {
          setProfileImage(userId, imageUrl);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const nomeInicial = (userId: string | undefined) => {
    switch (userId) {
      case "1":
        return "Usuário 1";
      case "2":
        return "Usuário 2";
      case "3":
        return "Usuário 3";
      default:
        return "Usuário";
    }
  };
  // Name and image

  // Save
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocalName(event.target.value);
  };

  const handleSave = () => {
    if (userId) {
      setUserName(userId, localName);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSave();
    }
  };

  const handleBlur = () => {
    handleSave();
  };
  // Save

  return (
    <div>

      {/* Content */}
      <div className="pr-12 pl-12 p-4 pt-5">
        {/* Profile */}
        <div className="bg-none flex flex-col items-center justify-center">
          <div className="relative">
            <img
              src={selectedImage as string}
              alt="profile"
              className="w-40 cursor-pointer border-white border-solid border-[1px] rounded-full"
              onClick={() => document.getElementById("fileInput")?.click()}
            />
            <input
              type="file"
              id="fileInput"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleImageChange}
            />
          </div>
          <div className="border-b-2 flex w-full justify-between relative">
            <input
              type="text"
              value={localName}
              placeholder={nomeInicial(userId)}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              onBlur={handleBlur}
              className="w-64 text-white text-2xl mt-3 font-semibold bg-transparent mb-2 placeholder:text-white"
            />
            <GoPencil className="text-2xl mt-5" />
          </div>
        </div>

        {/* Change Profile */}
        <Link
          to="/"
          className="border-4 w-full h-14 mt-8 p-1 pr-3 pl-3 flex items-center text-center gap-5 justify-center"
        >
          <RiUserLine className="text-white text-4xl" />
          <p className="font-semibold text-2xl">Mudar de Conta</p>
        </Link>

        {/* Change Background */}
        <button className="border-b-2 flex w-full justify-between mt-8">
          <p className="font-semibold text-2xl mb-2">Editar Background</p>
          <MdImage className="text-4xl mb-1" />
        </button>

        {/* Favorite Gender */}
        <div className="mt-6 bg-transparent border-b-2 w-full">
          <p className="text-2xl font-bold mb-3">Gênero favorito:</p>
          <button className="flex justify-between w-full">
            <p className="text-lg font-semibold mb-2">Selecione um gênero</p>
            <MdKeyboardArrowDown className="text-4xl" />
          </button>
        </div>

        {/* Favorite Artist or Band */}
        <div className="mt-5 mb-[15px] bg-transparent border-b-2 w-full">
          <p className="text-2xl font-bold mb-3">Artista ou banda favorito:</p>
          <button className="flex justify-between w-full">
            <p className="text-lg font-semibold">
              Selecione um artista ou banda
            </p>
            <MdKeyboardArrowDown className="text-4xl" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
