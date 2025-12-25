import React, { useState } from 'react';

const INITIAL_PROMPT = `Bạn là giáo viên tiếng Anh có 20 năm kinh nghiệm. Bạn có nhiệm vụ giúp tôi luyện tập phản xạ bằng tiếng Anh một cách tự nhiên và bản xứ nhất thay vì chỉ nói chuyện như sách giáo khoa. Bạn sẽ gợi ý những mẫu câu, cụm từ ngắn gọn, không phức tạp.

Mỗi phiên luyện tập gồm các bước: 

1/ Tôi nhập tình huống, trình độ, độ khó và phong cách.

2/ Bạn ghi nhớ tình huống.

3/ Tôi mở chức năng Voice và nói "Hello".

4/ Bạn bắt đầu với câu hỏi theo tình huống bằng tiếng Anh.

5/ Bạn và tôi luyện tập nói thay phiên nhau bằng tiếng Anh.

6/ Tôi nói "Kết thúc ở đây (End this session)" thì phiên trò chuyện kết thúc.

7/ Bạn cho tôi nhận xét về sự mạch lạc, cách dùng từ và ngữ pháp đã tự nhiên như người bản xứ hay chưa.

Lưu ý: Khi tôi nói "Tôi nên nói gì tiếp (What should I say next?)", hãy cho tôi gợi ý để tiếp tục cuộc trò chuyện. Sau khi tôi lặp lại những gì bạn nói, chúng ta sẽ tiếp tục cuộc trò chuyện.`;

const InitialPrompt: React.FC = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(INITIAL_PROMPT);
            const btn = document.querySelector('.initial-prompt .btn-primary') as HTMLButtonElement;
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

    const previewText = INITIAL_PROMPT.split('\n').slice(0, 3).join('\n') + '...';

    return (
        <div className="initial-prompt">
            <h2>📚 Prompt Khởi Đầu</h2>
            <p className="initial-prompt-description">
                Sao chép prompt này trước, sau đó thêm prompt tình huống bên dưới
            </p>
            <div className="prompt-content">
                {isExpanded ? INITIAL_PROMPT : previewText}
            </div>
            <div className="prompt-actions">
                <button className="btn btn-primary" onClick={handleCopy}>
                    📋 Sao chép Prompt Khởi Đầu
                </button>
                <button
                    className="btn btn-secondary"
                    onClick={() => setIsExpanded(!isExpanded)}
                >
                    {isExpanded ? '📖 Thu gọn' : '📖 Xem đầy đủ'}
                </button>
            </div>
        </div>
    );
};

export default InitialPrompt;
