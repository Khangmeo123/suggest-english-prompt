import { useState } from 'react';
import SelectionCard from './components/SelectionCard';
import PromptDisplay from './components/PromptDisplay';
import InitialPrompt from './components/InitialPrompt';
import { situations, levels, difficulties, styles } from './data/promptData';
import type { Situation, Level, Difficulty, Style, PromptSelection } from './types';
import './index.css';

function App() {
  const [selection, setSelection] = useState<PromptSelection>({
    situation: null,
    level: null,
    difficulty: null,
    style: null,
  });

  const handleReset = () => {
    setSelection({
      situation: null,
      level: null,
      difficulty: null,
      style: null,
    });
  };

  // Filter out category headers (items with single letter IDs like 'A', 'B', 'C', 'D')
  const situationOptions = situations.filter(s => s.id.length > 1);

  return (
    <div className="app">
      <header className="header">
        <h1>🎯 English Learning Prompt Generator</h1>
        <p>Tạo prompt học giao tiếp tiếng Anh theo nhu cầu của bạn</p>
      </header>

      <InitialPrompt />

      <div className="selection-grid">
        <SelectionCard<Situation>
          title="📍 Tình huống"
          options={situationOptions}
          selectedOption={selection.situation}
          onSelect={(situation) => setSelection({ ...selection, situation })}
          getOptionLabel={(option) => option.name}
          getOptionId={(option) => option.id}
        />

        <SelectionCard<Level>
          title="📊 Trình độ tiếng Anh"
          options={levels}
          selectedOption={selection.level}
          onSelect={(level) => setSelection({ ...selection, level })}
          getOptionLabel={(option) => option.name}
          getOptionId={(option) => option.id}
        />

        <SelectionCard<Difficulty>
          title="⚡ Độ khó"
          options={difficulties}
          selectedOption={selection.difficulty}
          onSelect={(difficulty) => setSelection({ ...selection, difficulty })}
          getOptionLabel={(option) => option.name}
          getOptionId={(option) => option.id}
        />

        <SelectionCard<Style>
          title="🎨 Phong cách"
          options={styles}
          selectedOption={selection.style}
          onSelect={(style) => setSelection({ ...selection, style })}
          getOptionLabel={(option) => option.name}
          getOptionId={(option) => option.id}
        />
      </div>

      <PromptDisplay selection={selection} onReset={handleReset} />
    </div>
  );
}

export default App;
