"use client";

import JobList from "@/components/JobList";
import { store } from "@/store";
import { Provider } from "react-redux";

export default function Home() {
  return (
    <Provider store={store}>
      <JobList />
    </Provider>
  );
}
