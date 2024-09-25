import { useAppDispatch, useAppSelector } from "../app/hooks";
import { UserType, incrementAge } from "../features/userSlice";

export function User() {
  const user: UserType = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const handleIncrementAge = () => {
    dispatch(incrementAge());
  };

  return (
    <div>
      <h1>
        {user.firstName} {user.lastName}
      </h1>
      <h2>Age: {user.age}</h2>
      <button onClick={handleIncrementAge}>Increment Age</button>
    </div>
  );
}
