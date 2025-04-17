import { format, formatDistanceToNowStrict, parseISO } from 'date-fns';
import { es } from 'date-fns/locale';
import {
  FaHeart,
  FaUsers,
  FaUmbrellaBeach,
  FaFutbol,
  FaMusic
} from 'react-icons/fa';

const getCategoryIcon = (type) => {
  const icons = {
    salida_pareja: <FaHeart className="text-pink" />,
    salida_amigos: <FaUsers className="text-blue" />,
    viaje: <FaUmbrellaBeach className="text-green" />,
    partido: <FaFutbol className="text-orange" />,
    concierto: <FaMusic className="text-purple" />
  };
  return icons[type] || null;
};

export const MemoryCard = ({ plan }) => {
  return (
    <div className={`col-md-4 mb-4 card-plan ${plan.type}`}>
      <div className="card h-100 shadow-sm">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="card-title mb-0">
              {getCategoryIcon(plan.type)} {plan.title}
            </h5>
            <span className={`badge bg-${plan.type}`}>
              {plan.type.replace('_', ' ')}
            </span>
          </div>

          <p className="card-text">
            <small className="text-muted">
              {format(parseISO(plan.date), "PPP", { locale: es })}
            </small>
          </p>
          <p className="text-success text-center">
            ✅ Hace {formatDistanceToNowStrict(parseISO(plan.date), { unit: 'day', roundingMethod: 'floor', locale: es })}
          </p>
        </div>
      </div>
    </div>
  );
};