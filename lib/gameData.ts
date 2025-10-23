import { PhaseData, Achievement } from '../types/game';

export const GAME_VERSION = '2.0.0';

export const PHASES: PhaseData[] = [
  {
    id: 1,
    title: 'Giai đoạn 1: Hậu COVID (2025-2030)',
    description: 'Kinh tế khó khăn, công nghệ thay đổi nhanh. Bạn cần cân bằng giữa tăng trưởng và bảo vệ lao động.',
    yearStart: 2025,
    yearEnd: 2030,
    gameType: 'budget-allocation',
    challenge: {
      title: '💰 Phân bổ ngân sách quốc gia',
      description: 'Phân bổ ngân sách 100 tỷ USD cho các lĩnh vực. Kéo thả để điều chỉnh:',
      lesson: 'Cân bằng đầu tư giữa các lĩnh vực quyết định hướng phát triển của đất nước.',
    },
  },
  {
    id: 2,
    title: 'Giai đoạn 2: Bùng nổ công nghệ (2030-2035)',
    description: 'AI, IoT, xe điện, năng lượng tái tạo bùng nổ. Lựa chọn công nghệ ưu tiên phát triển.',
    yearStart: 2030,
    yearEnd: 2035,
    gameType: 'tech-tree',
    challenge: {
      title: '🚀 Cây công nghệ quốc gia',
      description: 'Chọn và phát triển các công nghệ ưu tiên. Click để nghiên cứu:',
      lesson: 'Lựa chọn công nghệ đúng đắn tạo nền tảng cho sự phát triển bền vững.',
    },
  },
  {
    id: 3,
    title: 'Giai đoạn 3: Khoảng cách số (2035-2040)',
    description: 'Khoảng cách số giữa đô thị - nông thôn gia tăng. Đưa nông thôn vào kỷ nguyên số.',
    yearStart: 2035,
    yearEnd: 2040,
    gameType: 'network-building',
    challenge: {
      title: '📡 Kết nối mạng toàn quốc',
      description: 'Xây dựng mạng lưới 5G cho nông thôn. Click vào các vùng để kết nối:',
      lesson: 'Công nghệ chỉ có ý nghĩa khi kết nối và phục vụ mọi người dân.',
    },
  },
  {
    id: 4,
    title: 'Giai đoạn 4: Thử thách 2045 (2040-2045)',
    description: 'Việt Nam đứng trước ngưỡng quốc gia sáng tạo. Cân bằng phát triển và bảo vệ môi trường.',
    yearStart: 2040,
    yearEnd: 2045,
    gameType: 'sustainability',
    challenge: {
      title: '⚖️ Cân bằng bền vững',
      description: 'Cân bằng giữa tăng trưởng kinh tế và bảo vệ môi trường:',
      lesson: 'Phát triển bền vững là chìa khóa cho tương lai thịnh vượng.',
    },
  },
];

export const INITIAL_ACHIEVEMENTS: Achievement[] = [
  {
    id: 'first_play',
    name: 'Bước đầu tiên',
    description: 'Bắt đầu cuộc hành trình đầu tiên',
    icon: '🚀',
    unlocked: false,
  },
  {
    id: 'balanced_budget',
    name: 'Quản lý tài chính',
    description: 'Phân bổ ngân sách cân bằng',
    icon: '💰',
    unlocked: false,
  },
  {
    id: 'tech_master',
    name: 'Bậc thầy công nghệ',
    description: 'Chọn đúng 3+ công nghệ chiến lược',
    icon: '🔬',
    unlocked: false,
  },
  {
    id: 'unity_builder',
    name: 'Người kết nối',
    description: 'Kết nối cả 3 miền',
    icon: '🤝',
    unlocked: false,
  },
  {
    id: 'green_leader',
    name: 'Lãnh đạo xanh',
    description: 'Ưu tiên môi trường > 70%',
    icon: '🌱',
    unlocked: false,
  },
  {
    id: 'economic_boom',
    name: 'Phát triển kinh tế',
    description: 'Đạt chỉ số kinh tế > 85%',
    icon: '📈',
    unlocked: false,
  },
  {
    id: 'social_harmony',
    name: 'Hòa hợp xã hội',
    description: 'Đạt chỉ số xã hội > 85%',
    icon: '👥',
    unlocked: false,
  },
  {
    id: 'tech_innovation',
    name: 'Đổi mới sáng tạo',
    description: 'Đạt chỉ số công nghệ > 85%',
    icon: '🚀',
    unlocked: false,
  },
  {
    id: 'perfect_balance',
    name: 'Cân bằng hoàn hảo',
    description: 'Tất cả chỉ số > 70%',
    icon: '⚖️',
    unlocked: false,
  },
  {
    id: 'speed_runner',
    name: 'Học nhanh',
    description: 'Hoàn thành game < 10 phút',
    icon: '⚡',
    unlocked: false,
  },
  {
    id: 'completionist',
    name: 'Người hoàn thiện',
    description: 'Mở khóa tất cả thành tựu khác',
    icon: '🏆',
    unlocked: false,
  },
  {
    id: 'vietnam_2045',
    name: 'Việt Nam 2045',
    description: 'Đạt kịch bản thành công tốt nhất',
    icon: '🇻🇳',
    unlocked: false,
  },
];

export const GRADE_THRESHOLDS: Record<string, number> = {
  'A+': 90,
  A: 85,
  'B+': 75,
  B: 65,
  'C+': 55,
  C: 45,
  D: 0,
};

export const STAT_COLORS = {
  economy: {
    bg: 'bg-blue-500',
    text: 'text-blue-700',
    light: 'bg-blue-100',
  },
  social: {
    bg: 'bg-green-500',
    text: 'text-green-700',
    light: 'bg-green-100',
  },
  technology: {
    bg: 'bg-purple-500',
    text: 'text-purple-700',
    light: 'bg-purple-100',
  },
  environment: {
    bg: 'bg-emerald-500',
    text: 'text-emerald-700',
    light: 'bg-emerald-100',
  },
};

export const STAT_LABELS = {
  economy: '📊 Kinh tế',
  social: '👥 Xã hội',
  technology: '🔬 Công nghệ',
  environment: '🌱 Môi trường',
};
