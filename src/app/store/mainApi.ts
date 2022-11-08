import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CarType, SaleCard, WidgetsRes } from "./types/mainApi-types";

export const mainApi = createApi({
  reducerPath: "mainApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://mocki.io/v1/`,
  }),
  tagTypes: ["Main", "Cars", "Sales"],
  endpoints: ({ query }) => ({
    widgets: query<WidgetsRes[], null>({
      query: () => ({
        url: "3dfda360-e7e3-4670-b0eb-28e9e057551b",
      }),
      providesTags: ["Main"],
    }),
    cars: query<CarType[], null>({
      query: () => ({
        url: "d7727c4d-d4a7-4a0d-8653-54271cc3a927",
      }),
      providesTags: ["Cars"],
    }),
    saleCards: query<SaleCard[], null>({
      query: () => ({
        url: "4998e573-e7ac-480d-8ede-bed56046044f",
      }),
      providesTags: ["Sales"],
    }),
  }),
});

export const { useWidgetsQuery, useCarsQuery, useSaleCardsQuery } = mainApi;
