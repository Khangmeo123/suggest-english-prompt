import type { Situation, Level, Difficulty, Style } from '../types';

export const situations: Situation[] = [
    // A - Cuộc sống thường ngày
    { id: 'A', name: 'Cuộc sống thường ngày', category: 'A' },
    { id: 'A1', name: 'Đặt món tại quán ăn nhanh', category: 'A' },
    { id: 'A2', name: 'Hỏi đường đến trạm xe buýt', category: 'A' },
    { id: 'A3', name: 'Kể về lịch trình một ngày của bạn', category: 'A' },
    { id: 'A4', name: 'Hẹn gặp bạn đi cà phê cuối tuần', category: 'A' },
    { id: 'A5', name: 'Nói chuyện với hàng xóm mới chuyển đến', category: 'A' },

    // B - Công việc
    { id: 'B', name: 'Công việc', category: 'B' },
    { id: 'B1', name: 'Gọi điện đặt lịch họp với đối tác', category: 'B' },
    { id: 'B2', name: 'Trình bày kết quả công việc trong cuộc họp', category: 'B' },
    { id: 'B3', name: 'Gửi lời xin lỗi vì trễ deadline', category: 'B' },
    { id: 'B4', name: 'Nhờ đồng nghiệp giúp đỡ khi quá tải', category: 'B' },
    { id: 'B5', name: 'Báo cáo sự cố kỹ thuật qua điện thoại', category: 'B' },

    // C - Du lịch - Dịch vụ
    { id: 'C', name: 'Du lịch - Dịch vụ', category: 'C' },
    { id: 'C1', name: 'Đặt phòng khách sạn qua điện thoại', category: 'C' },
    { id: 'C2', name: 'Hỏi thông tin tại sân bay (gate, boarding time)', category: 'C' },
    { id: 'C3', name: 'Thuê xe du lịch và hỏi về chi phí', category: 'C' },
    { id: 'C4', name: 'Gọi taxi và mô tả điểm đến', category: 'C' },
    { id: 'C5', name: 'Khai báo thất lạc hành lý', category: 'C' },

    // D - Giao tiếp xã hội
    { id: 'D', name: 'Giao tiếp xã hội', category: 'D' },
    { id: 'D1', name: 'Giới thiệu bản thân trong một buổi tiệc', category: 'D' },
    { id: 'D2', name: 'Bắt chuyện với người lạ ở công viên', category: 'D' },
    { id: 'D3', name: 'Khen ngợi ai đó và đáp lại lời khen', category: 'D' },
    { id: 'D4', name: 'Chia sẻ một kỷ niệm hài hước', category: 'D' },
    { id: 'D5', name: 'Chúc mừng sinh nhật đồng nghiệp', category: 'D' },
];

export const levels: Level[] = [
    { id: 'A1', name: 'A1' },
    { id: 'A2', name: 'A2' },
    { id: 'B1', name: 'B1' },
    { id: 'B2', name: 'B2' },
    { id: 'C1', name: 'C1' },
    { id: 'C2', name: 'C2' },
];

export const difficulties: Difficulty[] = [
    { id: 'very-easy', name: 'Rất dễ' },
    { id: 'easy', name: 'Dễ' },
    { id: 'medium', name: 'Trung bình' },
    { id: 'light-challenge', name: 'Thử thách nhẹ' },
    { id: 'hard', name: 'Khó' },
    { id: 'very-hard', name: 'Rất khó' },
    { id: 'unimaginable', name: 'Khó khổng tưởng' },
];

export const styles: Style[] = [
    { id: 'natural', name: 'Tự nhiên' },
    { id: 'friendly', name: 'Thân thiện' },
    { id: 'simple', name: 'Đơn giản' },
    { id: 'formal', name: 'Trang trọng' },
    { id: 'professional', name: 'Chuyên nghiệp' },
    { id: 'academic', name: 'Học thuật' },
    { id: 'humorous', name: 'Hài hước' },
    { id: 'inspiring', name: 'Truyền cảm' },
    { id: 'dynamic', name: 'Năng động' },
    { id: 'confident', name: 'Tự tin' },
];
