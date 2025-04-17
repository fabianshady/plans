import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '../firebase';
import { PlanCard } from './PlanCard';
import { useEffect, useState } from 'react';
import { MemoryCard } from './MemoryCard';

export const PlansList = () => {
  const [plans, setPlans] = useState([]);
  const today = new Date();

  useEffect(() => {
    const q = query(collection(db, "plans"), orderBy("date", "asc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setPlans(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });
    return unsubscribe;
  }, []);

  const pastPlans = plans.filter(plan => new Date(plan.date) < today);
  const futurePlans = plans.filter(plan => new Date(plan.date) >= today);

  return (
    <div>
      <h3 className="mt-4">📅 Próximos Planes</h3>
      <div className="row">
        {futurePlans.map(plan => (
          <PlanCard key={plan.id} plan={plan} />
        ))}
      </div>

      <h3 className="mt-5">🎞️ Memorias</h3>
      <div className="row">
        {pastPlans.map(plan => (
          <MemoryCard key={plan.id} plan={plan} />
        ))}
      </div>
    </div>
  );
};

