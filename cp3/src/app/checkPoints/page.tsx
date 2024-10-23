import Image from 'next/image';
import HeitorOrtega from '../../../images/heitor-images.jpeg';
import Pedro from '../../../images/Pedro.jpg';
import Leo from '../../../images/leo.jpg';
import Robert from '../../../images/robert.jpg';
import Marcos from '../../../images/marcos.jpeg';

export default function CheckPoints() {
    const pessoal = [
        { id: 1, nome: 'Heitor Ortega', foto: HeitorOrtega },
        { id: 2, nome: 'Pedro Cardoso', foto: Pedro },
        { id: 3, nome: 'Marcos Lourenço', foto: Marcos },
        { id: 4, nome: 'Leonardo Bianchi', foto: Leo },
        { id: 5, nome: 'Robert Daniel', foto: Robert },
    ];

    return (
        <div className="max-w-2xl mx-auto p-4">
            <h2 className="text-3xl font-bold mb-6 text-center">Informações sobre os Check Points</h2>
            <ul className="space-y-4">
                {pessoal.map((person) => (
                    <li key={person.id} className="flex items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                        <Image
                            src={person.foto}
                            alt={person.nome}
                            width={100}
                            height={100}
                            className="rounded-full mr-4"
                        />
                        <span className="text-lg font-semibold">{person.nome}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}