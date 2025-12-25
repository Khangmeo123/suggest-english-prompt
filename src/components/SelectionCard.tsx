

interface SelectionCardProps<T> {
    title: string;
    options: T[];
    selectedOption: T | null;
    onSelect: (option: T) => void;
    getOptionLabel: (option: T) => string;
    getOptionId: (option: T) => string;
}

function SelectionCard<T>({
    title,
    options,
    selectedOption,
    onSelect,
    getOptionLabel,
    getOptionId,
}: SelectionCardProps<T>) {
    return (
        <div className="selection-card">
            <h3>{title}</h3>
            <div className="options-grid">
                {options.map((option) => {
                    const isActive = selectedOption && getOptionId(selectedOption) === getOptionId(option);
                    return (
                        <button
                            key={getOptionId(option)}
                            className={`option-btn ${isActive ? 'active' : ''}`}
                            onClick={() => onSelect(option)}
                        >
                            {getOptionLabel(option)}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}

export default SelectionCard;
