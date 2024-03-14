import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import RegisterImage from '../assets/Order food-bro.svg'
import { NavLink } from "react-router-dom";

export function Login() {
  return (
    <>
      <div className="bg-black ">
        <div className="absolute bg-gray-300 w-full top-52 h-40">

        </div>
        <div className="absolute bg-gray-600 w-full top-96 h-40">

        </div>
        <div className="relative container mx-auto grid grid-cols-1 lg:grid-cols-2 w-full h-screen px-8 gap-8">

          <div className="absolute left-4 top-2">
            <Typography
              as="a"
              href="/"
              className="mr-4 text-white cursor-pointer py-1.5 font-outfit font-bold text-4xl tracking-wider"
            >
              Billify
            </Typography>
          </div>
          <div className="flex items-center justify-center order-2">
            <Card color="white" shadow={false} className="p-4  shadow-md">
              <Typography variant="h4" color="blue-gray">
                Sign In
              </Typography>
              <Typography color="gray" className="mt-1 font-normal">
                Nice to meet you! Enter your details to Login.
              </Typography>
              <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                <div className="mb-1 flex flex-col gap-6">

                  <Typography variant="h6" color="blue-gray" className="-mb-3">
                    Your Email
                  </Typography>
                  <Input
                    size="lg"
                    placeholder="name@mail.com"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                  <Typography variant="h6" color="blue-gray" className="-mb-3">
                    Password
                  </Typography>
                  <Input
                    type="password"
                    size="lg"
                    placeholder="********"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                </div>

                <Button className="mt-6" fullWidth>
                  sign in
                </Button>
                <Typography color="gray" className="mt-4 text-center font-normal">
                  Don&apos;t have an account?{" "}
                  <NavLink to="/register" className="font-medium text-gray-900">
                    Sign Up
                  </NavLink>
                </Typography>
              </form>
            </Card>
          </div>
          <div className="hidden lg:flex items-center justify-center order-1">
            <img src={RegisterImage} alt="" className="w-[80%] h-auto transition-all delay-100
            duration-100 scale-x-[1] hover:-scale-x-[1]" />
          </div>
        </div>
      </div>
    </>
  );
}