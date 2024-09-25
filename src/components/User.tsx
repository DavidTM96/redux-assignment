import { useAppSelector } from "../app/hooks";
import { UserType } from "../features/userSlice";

export function User() {
  const User: UserType = useAppSelector((state) => state.user);

  return (
    <div>
      <h1>
        {User.firstName} {User.lastName}
      </h1>
      <h2>Age: {User.age}</h2>
    </div>
  );
}
