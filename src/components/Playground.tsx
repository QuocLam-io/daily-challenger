import { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';

interface ChallengeFormData {
  challenge: string;
  type: 'NUMERICAL' | 'BOOLEAN';
  quantity?: number;
  description: string;
  deadline?: string;
}

export default function ChallengeForm() {
  const [challenge, setChallenge] = useState<string>('');
  const [type, setType] = useState<'NUMERICAL' | 'BOOLEAN'>('NUMERICAL');
  const [quantity, setQuantity] = useState<number | undefined>(0);
  const [description, setDescription] = useState<string>('');
  const [deadline, setDeadline] = useState<string>('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData: ChallengeFormData = {
      challenge,
      type,
      quantity: type === 'NUMERICAL' ? quantity : undefined,
      description,
      deadline: deadline ? deadline : undefined,
    };

    try {
      const response = await axios.post('/api/challenges', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        alert('Challenge created successfully!');
      } else {
        alert('Failed to create challenge.');
      }
    } catch (error) {
      console.error('Error creating challenge:', error);
      alert('Failed to create challenge.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Challenge:
        <input
          type="text"
          value={challenge}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setChallenge(e.target.value)
          }
          required
        />
      </label>

      <label>
        Type:
        <select
          value={type}
          onChange={(e: ChangeEvent<HTMLSelectElement>) =>
            setType(e.target.value as 'NUMERICAL' | 'BOOLEAN')
          }
        >
          <option value="NUMERICAL">Numerical</option>
          <option value="BOOLEAN">Boolean</option>
        </select>
      </label>

      {type === 'NUMERICAL' && (
        <label>
          Quantity:
          <input
            type="number"
            value={quantity}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setQuantity(parseInt(e.target.value))
            }
          />
        </label>
      )}

      <label>
        Description:
        <textarea
          value={description}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
            setDescription(e.target.value)
          }
        />
      </label>

      <label>
        Deadline:
        <input
          type="date"
          value={deadline}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setDeadline(e.target.value)
          }
        />
      </label>

      <button type="submit">Create Challenge</button>
    </form>
  );
}