import { createAsyncThunk } from "@reduxjs/toolkit";

export function createThunksForExport({
  async = [],
  sync = [],
}: {
  async?: any;
  sync?: any;
}) {
  const asyncThunks: any = {};
  Object.keys(async).forEach((thunkName: any) => {
    asyncThunks[thunkName] = createAsyncThunk(
      "thunk/" + thunkName,
      async[thunkName]
    );
  });
  return {
    ...asyncThunks,
    ...sync,
  };
}
