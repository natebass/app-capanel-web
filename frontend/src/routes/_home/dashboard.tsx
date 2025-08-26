import { createFileRoute } from "@tanstack/react-router";
import DemoDashboard from "../../components/Dashboard/DemoDashboard.tsx";

export const Route = createFileRoute("/_home/dashboard")({
	component: DashboardPage,
});

function DashboardPage() {
	return <DemoDashboard />;
}
