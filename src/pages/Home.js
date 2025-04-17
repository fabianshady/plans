import { AddPlan } from '../components/AddPlan';
import { PlansList } from '../components/PlansList';

export const Home = () => {
  return (
    <div className="container py-4">
      <h1 className="text-center mb-4">Planes</h1>
      <AddPlan />
      <PlansList />
    </div>
  );
};