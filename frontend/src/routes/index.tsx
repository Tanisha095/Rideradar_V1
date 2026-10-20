import { createFileRoute } from "@tanstack/react-router";
import SupabaseTest from "@/components/SupabaseTest";

export const Route = createFileRoute("/")({
  component: SupabaseTest,
});