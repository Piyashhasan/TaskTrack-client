import userIcon from "../../../assets/images/user.png";

const ProfileForm = (props) => {
  // eslint-disable-next-line react/prop-types
  const { setVisible } = props;

  return (
    <div className="px-5 py-5">
      <div className="w-[70px] h-[70px] flex items-center justify-center bg-[#222161] object-cover object-center rounded-full">
        <img
          className="w-[40px] h-[40px] object-cover object-center rounded-md"
          src={userIcon}
          alt=""
        />
      </div>
      <div className="my-2">
        <p className="text-black text-[18px] font-semibold">Piyash Hasan</p>
        <p className="text-[14px]">piyashhasan38@gmail.com</p>
      </div>
      <form className="pt-2 flex flex-col gap-4 border-t-2 border-t-[#323232]/10">
        <div className="pt-2 grid grid-cols-[150px_1fr] items-center">
          <label htmlFor="name" className="text-black text-sm font-medium">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="text-black py-[0.4rem] px-3 font-medium rounded-lg border-2 border-[#323232]/10"
          />
        </div>

        <div className="pt-4 grid grid-cols-[150px_1fr] items-center border-t-2 border-t-[#323232]/10">
          <label htmlFor="email" className="text-black text-sm font-medium">
            Email Address
          </label>
          <div className="relative w-full">
            <input
              type="text"
              id="email"
              name="email"
              className="w-full py-[0.4rem] pl-9 pr-2 font-medium rounded-lg border-2 border-[#323232]/10"
            />
            <span className="absolute text-black left-0 top-0 bottom-0 flex items-center px-3">
              piyashhasan38@gmail.com
            </span>
          </div>
        </div>

        <div className="pt-4 grid grid-cols-2 gap-4 border-t-2 border-t-[#323232]/10">
          <div className="flex flex-col gap-1">
            <label
              htmlFor="oldPassWord"
              className="text-black text-sm font-medium"
            >
              Old Password
            </label>
            <input
              type="password"
              id="oldPassword"
              className="text-black py-[0.4rem] px-3 font-medium rounded-lg border-2 border-[#323232]/10"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label
              htmlFor="newPassword"
              className="text-black text-sm font-medium"
            >
              New Password
            </label>
            <input
              type="password"
              id="newPassword"
              className="text-black py-[0.4rem] px-3 font-medium rounded-lg border-2 border-[#323232]/10"
            />
          </div>
        </div>
        <div className="flex justify-end">
          <button
            type="button"
            className="py-3 px-4 bg-blue-500 text-white text-sm font-medium rounded-md
                hover:bg-blue-400 transition-all duration-300"
          >
            Change Password
          </button>
        </div>

        <div className="flex justify-end gap-4 border-t-2 border-t-[#323232]/10">
          <button
            onClick={() => setVisible(false)}
            className="mt-3 py-2 px-4 bg-transparent text-black text-sm font-medium rounded-md border-2 border-[#323232]/10
                hover:bg-[#EB4E31] hover:border-transparent hover:text-white transition-all duration-300"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="mt-3 py-2 px-4 bg-[#40C057] text-white text-sm font-medium rounded-md transition-all duration-300"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileForm;
