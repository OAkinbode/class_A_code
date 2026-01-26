type UserDetails = {
  firstname: string;
  lastname: string;
  age: number;
  hobby?: string;
  address?: Address;
};

interface Address {
  street: string;
  city: string;
}

export const userDetails: UserDetails = {
  firstname: "Olusola",
  lastname: "Akinbode",
  age: 15,
  hobby: "golfing",
  address: {
    street: "123 sweeping street",
    city: "Calgary",
  },
};

export const userDetails2: UserDetails = {
  firstname: "john",
  lastname: "Doe",
  age: 13,
};
