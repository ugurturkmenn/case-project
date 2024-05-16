import { createRoot } from "react-dom/client";
import { Layout } from "@/layouts";
import {
  BasketContextStoreProvider,
  MatchCalendarStoreProvider,
  FavoriteStoreProvider,
} from "@/providers";
import { RouterProvider } from "react-router-dom";
import { router } from "@/routes";

const container = document.getElementById("root") as HTMLElement;

if (!container) throw new Error("Failed to find the root element");

const root = createRoot(container);

root.render(
  <MatchCalendarStoreProvider>
    <FavoriteStoreProvider>
      <BasketContextStoreProvider>
        <Layout>
          <RouterProvider router={router} />
        </Layout>
      </BasketContextStoreProvider>
    </FavoriteStoreProvider>
  </MatchCalendarStoreProvider>
);
