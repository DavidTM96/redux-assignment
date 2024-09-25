export type UserType = {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
};

type StateType = UserType;

const initialState: StateType = {
  id: "1",
  firstName: "Cillian",
  lastName: "Murphy",
  age: 34,
};
