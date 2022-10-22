import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";

export const PagesController: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<div>main</div>} />
      <Route path="/test" element={<div>test</div>} />
      <Route path="/test2" element={<div>test2</div>} />
    </Routes>
  );
};
