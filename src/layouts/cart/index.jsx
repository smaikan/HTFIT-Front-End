import React, { useEffect } from "react";
import Items from "./Items";
import Buy from "./Buy";

const Cart = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex  justify-center mt-8">
      <div className="w-[90%] ">
        <div className="  mb-16 text-2xl font-semibold text-gray-500">
          SEPETİM
        </div>
        <div className="w-full flex justify-between">
          <Items />
          <Buy/>
        </div>
        
        
      </div>
    </div>
  );
};

export default Cart;
