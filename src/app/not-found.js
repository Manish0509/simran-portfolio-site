"use client";
import Button from "./components/Common/Button";

export default function NotFound() {
  return (
    <div>
      <div className="flex align-middle justify-center md:pt-20 pt-18">
        <div className="flex-container">
          <div className="text-center">
            <h1 className="text-center lg:text-[250px] font-bold md:text-[150px] text-[80px] bg-clip-text text-transparent big-text-gradient">
              Oops!
            </h1>
            <h3 className="text-3xl pb-2 text-center font-medium">
              404 - PAGE NOT FOUND
            </h3>
            <p>
              The page you are looking for doesn&apos;t
              <br /> exist or has been moved
            </p>
            <div className="w-fit mx-auto md:pb-[4rem] py-5">
              <Button
                redirect="/"
                variant="light"
                labelClass="font-medium"
                label="Go To Homepage"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
