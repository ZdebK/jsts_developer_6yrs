import { Link, useParams } from 'react-router-dom';
import { getAllFlashcards } from '../../data/flashcards';
import { SectionHeader } from '../SectionHeader';

export function FlashcardDetails() {
  const { id } = useParams();
  const card = getAllFlashcards().find(c => c.id === id);

  if (!card) {
    return (
      <section className="container--large py-16" style={{ paddingTop: '80px' }}>
        <SectionHeader title="Flashcard Not Found" />
        <p className="text--muted">No flashcard with id: {id}</p>
        <div className="mt-6">
          <Link to="/learn" className="text--vs-blue hover:underline">Back to Learn</Link>
        </div>
      </section>
    );
  }

  return (
    <section className="container--large py-16" style={{ paddingTop: '80px' }}>
      <SectionHeader title="Flashcard Details" />

      <div className="mt-6 p-6 rounded-lg border border--default bg-[rgba(45,45,48,0.7)]">
        <div>
          <h3 className="text--muted text-xs uppercase tracking-wider">Question</h3>
          <p className="text--vs-light text-xl mt-2">{card.question}</p>
        </div>

        <div className="mt-6">
          <h3 className="text--vs-blue text-xs uppercase tracking-wider">Answer</h3>
          <p className="text--vs-light text-lg mt-2">{card.answer}</p>
        </div>
      </div>

      <div className="mt-8 p-6 rounded-lg border border--default bg-[rgba(45,45,48,0.7)]">
        <h3 className="text--muted text-sm uppercase tracking-wider">Resources</h3>
        <p className="text--muted mt-2">Add a link to a better description here (coming soon).</p>
      </div>

      <div className="mt-8">
        <Link to="/learn" className="text--vs-blue hover:underline">Back to Learn</Link>
      </div>
    </section>
  );
}
