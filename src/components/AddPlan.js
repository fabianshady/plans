import { useState } from 'react';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';
import { FaPlus } from 'react-icons/fa';

export const AddPlan = () => {
  const [title, setTitle] = useState('');
  const [type, setType] = useState('salida_pareja');
  const [date, setDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, "plans"), {
      title,
      type,
      date,
      createdAt: serverTimestamp()
    });
    setTitle('');
    setDate('');
  };

  return (
    <div className="card mb-4 shadow-sm">
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Título del plan"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="row">
            <div className="col-md-6 mb-3">
              <select
                className="form-select"
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option value="salida_pareja">Salida en pareja</option>
                <option value="salida_amigos">Salida con amigos</option>
                <option value="viaje">Viaje</option>
                <option value="partido">Partido</option>
                <option value="concierto">Concierto</option>
              </select>
            </div>
            <div className="col-md-6 mb-3">
              <input
                type="date"
                className="form-control"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            <FaPlus className="me-2" /> Añadir Plan
          </button>
        </form>
      </div>
    </div>
  );
};