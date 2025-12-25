import React from 'react';
import type { PromptSelection } from '../types';

interface PromptDisplayProps {
    selection: PromptSelection;
    onReset: () => void;
}

const PromptDisplay: React.FC<PromptDisplayProps> = ({ selection, onReset }) => {
    const { situation, level, difficulty, style } = selection;

    // Check if all selections are made
    const isComplete = situation && level && difficulty && style;

    const generatePrompt = () => {
        if (!isComplete) return '';

        return `1/ Tình huống: ${situation.name}

2/ Trình độ tiếng Anh: ${level.name}

3/ Độ khó: ${difficulty.name}

4/ Phong cách: ${style.name}`;
    };

    const handleCopy = async () => {
        const prompt = generatePrompt();
        try {
            await navigator.clipboard.writeText(prompt);
            // Show a temporary success message
            const btn = document.querySelector('.btn-primary') as HTMLButtonElement;
            if (btn) {
                const originalText = btn.textContent;
                btn.textContent = '✓ Đã sao chép!';
                setTimeout(() => {
                    btn.textContent = originalText;
                }, 2000);
            }
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    if (!isComplete) {
        return (
            <div className="prompt-display">
                <div className="empty-state">
                    <div className="empty-state-icon">📝</div>
                    <p>Vui lòng chọn đầy đủ 4 mục để tạo prompt học tiếng Anh</p>
                </div>
            </div>
        );
    }

    return (
        <div className="prompt-display">
            <h2>✨ Prompt của bạn</h2>
            <div className="prompt-content">{generatePrompt()}</div>
            <div className="prompt-actions">
                <button className="btn btn-primary" onClick={handleCopy}>
                    📋 Sao chép Prompt
                </button>
                <button className="btn btn-secondary" onClick={onReset}>
                    🔄 Đặt lại
                </button>
            </div>
        </div>
    );
};

export default PromptDisplay;
