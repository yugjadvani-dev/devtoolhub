"use client";
import Overview from "@/components/(overview)/Overview";
import Sidebar from "@/components/Sidebar";
import React from "react";

const Home: React.FC = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pb-6">
      <div className="container">
        <div className="grid grid-cols-5 gap-4">
          <div className="col-span-1">
            <Sidebar />
          </div>
          <div className="col-span-4 w-full p-8">
            <Overview/>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
