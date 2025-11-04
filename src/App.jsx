import Card from './components/Card.jsx';
import CardCalendario from './components/CardCalendario.jsx';

export default function App() {
  return (
    <div className="container mt-5 text-center">
      <Card />
      <div className="container-2 mt-1 text-center">
        <CardCalendario />
      </div>
    </div>
  );
}