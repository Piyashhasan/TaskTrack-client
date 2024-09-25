import { apiSlice } from "../features/apislice/apiSlice";

const tasksApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllTasks: builder.query({
      query: () => `/`,
      providesTags: ["Tasks"],
    }),

    getSingleTask: builder.query({
      query: (id) => `/${id}`,
    }),

    createTask: builder.mutation({
      query: (payload) => ({
        url: "/create",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["Tasks"],
    }),

    updateTask: builder.mutation({
      query: (payload) => ({
        url: `/update`,
        method: "PATCH",
        body: payload,
      }),
      invalidatesTags: ["Tasks"],
    }),

    deleteTask: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
        body: { id },
      }),
      invalidatesTags: ["Tasks"],
    }),
  }),

  overrideExisting: false,
});

export const {
  useGetAllTasksQuery,
  useGetSingleTaskQuery,
  useCreateTaskMutation,
  useUpdateTaskMutation,
  useDeleteTaskMutation,
} = tasksApi;
