import { Button } from "@nextui-org/react";

export default function Page() {
  return (
    <div>
      {/*Buttom to go to /promos*/}
      <Button
        onClick={() => {
          window.location.href = "/promos";
        }}
      >
        Promos
      </Button>

      {/*Buttom to go to /store*/}
      <Button
        onClick={() => {
          window.location.href = "/store";
        }}
      >
        Store
      </Button>

      {/*Buttom to go to /contact*/}
      <Button
        onClick={() => {
          window.location.href = "/contact";
        }}
      >
        Contact
      </Button>

      {/*Buttom to go to /user/profile*/}
      <Button
        onClick={() => {
          window.location.href = "/user/profile";
        }}
      >
        Profile
      </Button>

      {/*Buttom to go to /user/orders*/}
      <Button
        onClick={() => {
          window.location.href = "/user/order";
        }}
      >
        User orders
      </Button>

      {/*Buttom to go to /admin/dashboard*/}
      <Button
        onClick={() => {
          window.location.href = "/admin/dashboard";
        }}
      >
        Admin Dashboard
      </Button>
    </div>
  );
}
