// 超级手机网站 - 主入口文件
// 包含所有模式定义、功能配置和交互逻辑

// 模式数据定义
interface Mode {
  id: string;
  name: string;
  icon: string;
  description: string;
  features: Feature[];
}

interface Feature {
  id: string;
  name: string;
  icon: string;
  description: string;
  content: string;
  type: 'app' | 'tool' | 'info';
}

// 所有模式定义
const MODES: Mode[] = [
  {
    id: 'home',
    name: '首页',
    icon: '🏠',
    description: '快速访问和概览',
    features: [
      { id: 'home-1', name: '天气', icon: '🌤️', description: '实时天气信息', content: 'weather', type: 'app' },
      { id: 'home-2', name: '日历', icon: '📅', description: '日程管理', content: 'calendar', type: 'app' },
      { id: 'home-3', name: '时钟', icon: '🕐', description: '世界时钟', content: 'clock', type: 'app' },
      { id: 'home-4', name: '计算器', icon: '🧮', description: '多功能计算器', content: 'calculator', type: 'tool' },
      { id: 'home-5', name: '搜索', icon: '🔍', description: '全局搜索', content: 'search', type: 'tool' },
    ]
  },
  {
    id: 'profile',
    name: '个人中心',
    icon: '👤',
    description: '用户信息和设置',
    features: [
      { id: 'profile-1', name: '头像编辑', icon: '📷', description: '修改头像', content: 'avatar', type: 'app' },
      { id: 'profile-2', name: '昵称修改', icon: '✏️', description: '修改昵称', content: 'nickname', type: 'tool' },
      { id: 'profile-3', name: '个人简介', icon: '📝', description: '编辑简介', content: 'bio', type: 'tool' },
      { id: 'profile-4', name: '账户安全', icon: '🔐', description: '安全设置', content: 'security', type: 'tool' },
      { id: 'profile-5', name: '隐私设置', icon: '🛡️', description: '隐私控制', content: 'privacy', type: 'tool' },
    ]
  },
  {
    id: 'social',
    name: '社交',
    icon: '💬',
    description: '聊天和动态',
    features: [
      { id: 'social-1', name: '朋友圈', icon: '📱', description: '发动态', content: 'moments', type: 'app' },
      { id: 'social-2', name: '私信', icon: '✉️', description: '聊天消息', content: 'messages', type: 'app' },
      { id: 'social-3', name: '群聊', icon: '👥', description: '群组聊天', content: 'groups', type: 'app' },
      { id: 'social-4', name: '好友列表', icon: '👫', description: '管理好友', content: 'friends', type: 'tool' },
      { id: 'social-5', name: '添加好友', icon: '➕', description: '搜索添加', content: 'addfriend', type: 'tool' },
    ]
  },
  {
    id: 'ecommerce',
    name: '电商',
    icon: '🛒',
    description: '购物和订单',
    features: [
      { id: 'ecommerce-1', name: '商品浏览', icon: '🛍️', description: '浏览商品', content: 'products', type: 'app' },
      { id: 'ecommerce-2', name: '购物车', icon: '🛒', description: '购物车管理', content: 'cart', type: 'app' },
      { id: 'ecommerce-3', name: '我的订单', icon: '📦', description: '订单列表', content: 'orders', type: 'tool' },
      { id: 'ecommerce-4', name: '优惠券', icon: '🎟️', description: '优惠券中心', content: 'coupons', type: 'tool' },
      { id: 'ecommerce-5', name: '收藏商品', icon: '❤️', description: '我的收藏', content: 'favorites', type: 'tool' },
    ]
  },
  {
    id: 'tools',
    name: '工具',
    icon: '🛠️',
    description: '实用工具集',
    features: [
      { id: 'tools-1', name: '计算器', icon: '🧮', description: '基础计算', content: 'calculator-basic', type: 'app' },
      { id: 'tools-2', name: '科学计算器', icon: '🔬', description: '高级计算', content: 'calculator-sci', type: 'app' },
      { id: 'tools-3', name: '单位转换', icon: '📐', description: '单位转换器', content: 'converter', type: 'tool' },
      { id: 'tools-4', name: '汇率转换', icon: '💱', description: '货币汇率', content: 'currency', type: 'tool' },
      { id: 'tools-5', name: '二维码', icon: '📱', description: '生成/扫描', content: 'qrcode', type: 'tool' },
    ]
  },
  {
    id: 'media',
    name: '媒体',
    icon: '📷',
    description: '照片和视频',
    features: [
      { id: 'media-1', name: '图片浏览', icon: '🖼️', description: '相册浏览', content: 'gallery', type: 'app' },
      { id: 'media-2', name: '图片编辑', icon: '🎨', description: '图片处理', content: 'editor', type: 'app' },
      { id: 'media-3', name: '音乐播放', icon: '🎵', description: '音乐播放器', content: 'music', type: 'app' },
      { id: 'media-4', name: '视频播放', icon: '🎬', description: '视频播放器', content: 'video', type: 'app' },
      { id: 'media-5', name: 'GIF制作', icon: '🎞️', description: 'GIF工具', content: 'gifmaker', type: 'tool' },
    ]
  },
  {
    id: 'games',
    name: '游戏',
    icon: '🎮',
    description: '休闲小游戏',
    features: [
      { id: 'games-1', name: '2048', icon: '🔢', description: '益智游戏', content: 'game-2048', type: 'app' },
      { id: 'games-2', name: '俄罗斯方块', icon: '🧱', description: '经典游戏', content: 'tetris', type: 'app' },
      { id: 'games-3', name: '贪吃蛇', icon: '🐍', description: '经典游戏', content: 'snake', type: 'app' },
      { id: 'games-4', name: '消消乐', icon: '💎', description: '消除游戏', content: 'match3', type: 'app' },
      { id: 'games-5', name: '飞行棋', icon: '✈️', description: '桌游', content: 'ludo', type: 'app' },
    ]
  },
  {
    id: 'learning',
    name: '学习',
    icon: '📚',
    description: '知识学习',
    features: [
      { id: 'learning-1', name: '背单词', icon: '📖', description: '英语单词', content: 'vocabulary', type: 'app' },
      { id: 'learning-2', name: '听力练习', icon: '🎧', description: '听力训练', content: 'listening', type: 'app' },
      { id: 'learning-3', name: '词典', icon: '📚', description: '词典查询', content: 'dictionary', type: 'tool' },
      { id: 'learning-4', name: '翻译', icon: '🌐', description: '翻译工具', content: 'translator', type: 'tool' },
      { id: 'learning-5', name: '百科', icon: '🔍', description: '知识百科', content: 'wiki', type: 'tool' },
    ]
  },
  {
    id: 'health',
    name: '健康',
    icon: '❤️',
    description: '健康生活',
    features: [
      { id: 'health-1', name: '步数记录', icon: '👟', description: '运动计步', content: 'steps', type: 'app' },
      { id: 'health-2', name: '喝水提醒', icon: '💧', description: '饮水记录', content: 'water', type: 'app' },
      { id: 'health-3', name: '睡眠追踪', icon: '😴', description: '睡眠分析', content: 'sleep', type: 'app' },
      { id: 'health-4', name: '体重记录', icon: '⚖️', description: '体重管理', content: 'weight', type: 'tool' },
      { id: 'health-5', name: 'BMI计算', icon: '📊', description: '体质指数', content: 'bmi', type: 'tool' },
    ]
  },
  {
    id: 'finance',
    name: '金融',
    icon: '💰',
    description: '财务记账',
    features: [
      { id: 'finance-1', name: '记账本', icon: '📒', description: '收支记录', content: 'ledger', type: 'app' },
      { id: 'finance-2', name: '预算管理', icon: '📈', description: '预算设置', content: 'budget', type: 'tool' },
      { id: 'finance-3', name: '股票行情', icon: '📉', description: '股票数据', content: 'stocks', type: 'tool' },
      { id: 'finance-4', name: '货币转换', icon: '💱', description: '汇率换算', content: 'forex', type: 'tool' },
      { id: 'finance-5', name: '保险服务', icon: '🛡️', description: '保险产品', content: 'insurance', type: 'tool' },
    ]
  },
  {
    id: 'travel',
    name: '旅行',
    icon: '✈️',
    description: '出行规划',
    features: [
      { id: 'travel-1', name: '机票预订', icon: '🎫', description: '机票查询', content: 'flights', type: 'app' },
      { id: 'travel-2', name: '酒店预订', icon: '🏨', description: '酒店查询', content: 'hotels', type: 'app' },
      { id: 'travel-3', name: '景点门票', icon: '🎟️', description: '门票购买', content: 'tickets', type: 'tool' },
      { id: 'travel-4', name: '旅行攻略', icon: '📔', description: '旅行指南', content: 'guides', type: 'tool' },
      { id: 'travel-5', name: '行程规划', icon: '🗺️', description: '路线规划', content: 'itinerary', type: 'tool' },
    ]
  },
  {
    id: 'food',
    name: '美食',
    icon: '🍜',
    description: '美食菜谱',
    features: [
      { id: 'food-1', name: '菜谱大全', icon: '👨‍🍳', description: '菜谱搜索', content: 'recipes', type: 'app' },
      { id: 'food-2', name: '今日推荐', icon: '🍽️', description: '每日推荐', content: 'recommend', type: 'tool' },
      { id: 'food-3', name: '食物热量', icon: '🔥', description: '卡路里查询', content: 'calories', type: 'tool' },
      { id: 'food-4', name: '外卖订餐', icon: '🍔', description: '外卖平台', content: 'delivery', type: 'app' },
      { id: 'food-5', name: '餐厅预订', icon: '🍽️', description: '餐厅预约', content: 'booking', type: 'tool' },
    ]
  },
  {
    id: 'news',
    name: '新闻',
    icon: '📰',
    description: '资讯阅读',
    features: [
      { id: 'news-1', name: '热点新闻', icon: '🔥', description: '热门资讯', content: 'hot', type: 'app' },
      { id: 'news-2', name: '科技新闻', icon: '🚀', description: '科技动态', content: 'tech', type: 'tool' },
      { id: 'news-3', name: '财经新闻', icon: '💹', description: '财经资讯', content: 'finance-news', type: 'tool' },
      { id: 'news-4', name: '体育新闻', icon: '⚽', description: '体育资讯', content: 'sports', type: 'tool' },
      { id: 'news-5', name: '娱乐新闻', icon: '🎭', description: '娱乐资讯', content: 'entertainment', type: 'tool' },
    ]
  },
  {
    id: 'work',
    name: '工作',
    icon: '💼',
    description: '办公效率',
    features: [
      { id: 'work-1', name: '待办事项', icon: '✅', description: '任务管理', content: 'todo', type: 'app' },
      { id: 'work-2', name: '日程管理', icon: '📅', description: '日程安排', content: 'schedule', type: 'app' },
      { id: 'work-3', name: '邮件', icon: '📧', description: '邮件收发', content: 'email', type: 'app' },
      { id: 'work-4', name: '云文档', icon: '📄', description: '文档协作', content: 'docs', type: 'tool' },
      { id: 'work-5', name: '团队协作', icon: '👥', description: '团队管理', content: 'teamwork', type: 'tool' },
    ]
  },
  {
    id: 'creative',
    name: '创意',
    icon: '🎨',
    description: '创意设计',
    features: [
      { id: 'creative-1', name: '画板', icon: '🖌️', description: '绘画工具', content: 'canvas', type: 'app' },
      { id: 'creative-2', name: '头像制作', icon: '👤', description: '头像设计', content: 'avatar-maker', type: 'tool' },
      { id: 'creative-3', name: '海报设计', icon: '🖼️', description: '海报制作', content: 'poster', type: 'tool' },
      { id: 'creative-4', name: '表情包', icon: '😀', description: '表情制作', content: 'emoji-maker', type: 'tool' },
      { id: 'creative-5', name: '壁纸制作', icon: '🖼️', description: '壁纸生成', content: 'wallpaper', type: 'tool' },
    ]
  },
  {
    id: 'tech',
    name: '科技',
    icon: '🔬',
    description: '科技资讯',
    features: [
      { id: 'tech-1', name: '新品评测', icon: '📱', description: '产品评测', content: 'review', type: 'app' },
      { id: 'tech-2', name: '参数对比', icon: '📊', description: '产品对比', content: 'compare', type: 'tool' },
      { id: 'tech-3', name: '选购指南', icon: '🛒', description: '购买建议', content: 'guide', type: 'tool' },
      { id: 'tech-4', name: '科技视频', icon: '🎥', description: '视频评测', content: 'videos', type: 'tool' },
      { id: 'tech-5', name: '科技社区', icon: '💬', description: '讨论交流', content: 'community', type: 'tool' },
    ]
  },
  {
    id: 'entertainment',
    name: '娱乐',
    icon: '🎬',
    description: '影音娱乐',
    features: [
      { id: 'entertainment-1', name: '电影', icon: '🎬', description: '电影推荐', content: 'movies', type: 'app' },
      { id: 'entertainment-2', name: '电视剧', icon: '📺', description: '剧集推荐', content: 'tvshows', type: 'app' },
      { id: 'entertainment-3', name: '综艺', icon: '🎤', description: '综艺节目', content: 'variety', type: 'app' },
      { id: 'entertainment-4', name: '小说', icon: '📚', description: '阅读小说', content: 'novels', type: 'app' },
      { id: 'entertainment-5', name: '动漫', icon: '🎭', description: '动漫推荐', content: 'anime', type: 'app' },
    ]
  },
  {
    id: 'life',
    name: '生活',
    icon: '🌟',
    description: '日常生活',
    features: [
      { id: 'life-1', name: '天气预报', icon: '🌤️', description: '天气信息', content: 'weather-life', type: 'app' },
      { id: 'life-2', name: '闹钟', icon: '⏰', description: '闹钟设置', content: 'alarm', type: 'app' },
      { id: 'life-3', name: '日历', icon: '📅', description: '日历查看', content: 'calendar-life', type: 'app' },
      { id: 'life-4', name: '便签', icon: '📝', description: '随手笔记', content: 'notes', type: 'app' },
      { id: 'life-5', name: '提醒', icon: '🔔', description: '事项提醒', content: 'reminders', type: 'tool' },
    ]
  },
  {
    id: 'community',
    name: '社区',
    icon: '🌐',
    description: '社区论坛',
    features: [
      { id: 'community-1', name: '话题广场', icon: '💬', description: '热门话题', content: 'topics', type: 'app' },
      { id: 'community-2', name: '讨论组', icon: '👥', description: '兴趣小组', content: 'groups', type: 'app' },
      { id: 'community-3', name: '问答', icon: '❓', description: '知识问答', content: 'qa', type: 'tool' },
      { id: 'community-4', name: '投票', icon: '📊', description: '发起投票', content: 'poll', type: 'tool' },
      { id: 'community-5', name: '签到', icon: '✅', description: '每日签到', content: 'checkin', type: 'tool' },
    ]
  },
  {
    id: 'settings',
    name: '设置',
    icon: '⚙️',
    description: '系统设置',
    features: [
      { id: 'settings-1', name: '主题', icon: '🎨', description: '主题切换', content: 'theme', type: 'tool' },
      { id: 'settings-2', name: '语言', icon: '🌐', description: '语言设置', content: 'language', type: 'tool' },
      { id: 'settings-3', name: '通知', icon: '🔔', description: '通知设置', content: 'notifications', type: 'tool' },
      { id: 'settings-4', name: '隐私', icon: '🔐', description: '隐私设置', content: 'privacy-settings', type: 'tool' },
      { id: 'settings-5', name: '关于', icon: 'ℹ️', description: '关于我们', content: 'about', type: 'info' },
    ]
  }
];

// 生成更多功能（扩展到每个模式50+功能）
function generateExtendedFeatures(modeId: string, baseFeatures: any[]): any[] {
  const extensions: { [key: string]: any[] } = {
    home: [
      { id: 'home-6', name: '快捷方式', icon: '⚡', description: '常用功能', content: 'shortcuts', type: 'tool' },
      { id: 'home-7', name: '最近使用', icon: '🕐', description: '最近使用', content: 'recent', type: 'tool' },
      { id: 'home-8', name: '收藏夹', icon: '⭐', description: '我的收藏', content: 'favorites-home', type: 'tool' },
    ],
    tools: [
      { id: 'tools-6', name: '密码生成', icon: '🔑', description: '随机密码', content: 'password-gen', type: 'tool' },
      { id: 'tools-7', name: '颜色选择', icon: '🎨', description: '取色器', content: 'color-picker', type: 'tool' },
      { id: 'tools-8', name: '时间戳', icon: '⏱️', description: '时间转换', content: 'timestamp', type: 'tool' },
      { id: 'tools-9', name: 'JSON格式化', icon: '📄', description: 'JSON工具', content: 'json-formatter', type: 'tool' },
      { id: 'tools-10', name: 'Base64编码', icon: '🔤', description: '编码解码', content: 'base64', type: 'tool' },
    ],
    // 其他模式的扩展功能...
  };

  return [...baseFeatures, ...(extensions[modeId] || [])];
}

// 当前页面状态
let currentPage = 'home';
let currentMode: Mode | null = null;
let currentFeature: any = null;

// 初始化应用
function init() {
  renderModeGrid();
  setupNavigation();
}

// 渲染模式网格
function renderModeGrid() {
  const grid = document.getElementById('mode-grid');
  if (!grid) return;

  grid.innerHTML = MODES.map(mode => `
    <div class="mode-card" onclick="openMode('${mode.id}')">
      <div class="mode-icon">${mode.icon}</div>
      <div class="mode-name">${mode.name}</div>
      <div class="mode-count">${mode.features.length}+功能</div>
    </div>
  `).join('');
}

// 打开模式详情
function openMode(modeId: string) {
  currentMode = MODES.find(m => m.id === modeId);
  if (!currentMode) return;

  // 更新模式页面
  const title = document.getElementById('mode-title');
  const subtitle = document.getElementById('mode-subtitle');
  const featureList = document.getElementById('feature-list');

  if (title) title.textContent = `${currentMode.icon} ${currentMode.name}`;
  if (subtitle) subtitle.textContent = `${currentMode.features.length}个功能`;

  if (featureList) {
    featureList.innerHTML = currentMode.features.map(feature => `
      <div class="feature-item" onclick="openFeature('${feature.id}')">
        <div class="feature-icon">${feature.icon}</div>
        <div class="feature-content">
          <div class="feature-title">${feature.name}</div>
          <div class="feature-desc">${feature.description}</div>
        </div>
        <div class="feature-arrow">›</div>
      </div>
    `).join('');
  }

  // 显示模式页面
  showPage('mode');
}

// 打开功能详情
function openFeature(featureId: string) {
  if (!currentMode) return;

  currentFeature = currentMode.features.find(f => f.id === featureId);
  if (!currentFeature) return;

  const title = document.getElementById('feature-title');
  const content = document.getElementById('feature-content');

  if (title) title.textContent = `${currentFeature.icon} ${currentFeature.name}`;

  if (content) {
    content.innerHTML = generateFeatureContent(currentFeature);
  }

  showPage('feature');
}

// 生成功能内容
function generateFeatureContent(feature: any): string {
  const templates: { [key: string]: string } = {
    weather: `
      <div class="glass-card" style="padding: var(--space-xxl); text-align: center;">
        <div style="font-size: 80px; margin-bottom: var(--space-xl);">🌤️</div>
        <div style="font-size: var(--font-size-xxxl); font-weight: 700; margin-bottom: var(--space-md);">25°C</div>
        <div style="font-size: var(--font-size-lg); color: var(--text-secondary); margin-bottom: var(--space-xl);">晴 · 空气质量良好</div>
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--space-lg); margin-top: var(--space-xl);">
          <div class="glass-card" style="padding: var(--space-lg);">
            <div style="font-size: 24px;">💧</div>
            <div style="font-size: var(--font-size-sm); color: var(--text-secondary); margin-top: var(--space-sm);">湿度</div>
            <div style="font-size: var(--font-size-lg); font-weight: 600;">65%</div>
          </div>
          <div class="glass-card" style="padding: var(--space-lg);">
            <div style="font-size: 24px;">💨</div>
            <div style="font-size: var(--font-size-sm); color: var(--text-secondary); margin-top: var(--space-sm);">风速</div>
            <div style="font-size: var(--font-size-lg); font-weight: 600;">3级</div>
          </div>
          <div class="glass-card" style="padding: var(--space-lg);">
            <div style="font-size: 24px;">🌡️</div>
            <div style="font-size: var(--font-size-sm); color: var(--text-secondary); margin-top: var(--space-sm);">体感</div>
            <div style="font-size: var(--font-size-lg); font-weight: 600;">27°C</div>
          </div>
        </div>
      </div>
    `,
    calculator: `
      <div class="glass-card" style="padding: var(--space-lg);">
        <input type="text" class="glass-input" id="calc-display" readonly value="0" style="text-align: right; font-size: var(--font-size-xxl); margin-bottom: var(--space-lg);">
        <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: var(--space-md);">
          <button class="glass-button" onclick="calcInput('C')">C</button>
          <button class="glass-button" onclick="calcInput('±')">±</button>
          <button class="glass-button" onclick="calcInput('%')">%</button>
          <button class="glass-button primary" onclick="calcInput('÷')">÷</button>
          <button class="glass-button" onclick="calcInput('7')">7</button>
          <button class="glass-button" onclick="calcInput('8')">8</button>
          <button class="glass-button" onclick="calcInput('9')">9</button>
          <button class="glass-button primary" onclick="calcInput('×')">×</button>
          <button class="glass-button" onclick="calcInput('4')">4</button>
          <button class="glass-button" onclick="calcInput('5')">5</button>
          <button class="glass-button" onclick="calcInput('6')">6</button>
          <button class="glass-button primary" onclick="calcInput('-')">−</button>
          <button class="glass-button" onclick="calcInput('1')">1</button>
          <button class="glass-button" onclick="calcInput('2')">2</button>
          <button class="glass-button" onclick="calcInput('3')">3</button>
          <button class="glass-button primary" onclick="calcInput('+')">+</button>
          <button class="glass-button" onclick="calcInput('0')" style="grid-column: span 2;">0</button>
          <button class="glass-button" onclick="calcInput('.')">.</button>
          <button class="glass-button primary" onclick="calcResult()">=</button>
        </div>
      </div>
    `,
    calendar: `
      <div class="glass-card" style="padding: var(--space-xl); text-align: center;">
        <div style="font-size: var(--font-size-xxxl); font-weight: 700; margin-bottom: var(--space-xl);">
          ${new Date().toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' })}
        </div>
        <div style="display: grid; grid-template-columns: repeat(7, 1fr); gap: var(--space-sm); margin-top: var(--space-xl);">
          ${['日', '一', '二', '三', '四', '五', '六'].map(d => `
            <div style="padding: var(--space-sm); font-weight: 600; color: var(--text-secondary);">${d}</div>
          `).join('')}
          ${generateCalendarDays()}
        </div>
      </div>
    `,
    default: `
      <div class="glass-card" style="padding: var(--space-xxl); text-align: center;">
        <div style="font-size: 80px; margin-bottom: var(--space-xl);">${feature.icon}</div>
        <h2 style="font-size: var(--font-size-xl); margin-bottom: var(--space-lg);">${feature.name}</h2>
        <p style="color: var(--text-secondary); margin-bottom: var(--space-xl);">${feature.description}</p>
        <div class="glass-button primary" style="width: 100%;">
          即将上线 · 敬请期待
        </div>
      </div>
    `
  };

  return templates[feature.content] || templates.default;
}

// 生成日历天数
function generateCalendarDays(): string {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const todayDate = today.getDate();

  let html = '';
  for (let i = 0; i < firstDay; i++) {
    html += '<div></div>';
  }
  for (let i = 1; i <= daysInMonth; i++) {
    const isToday = i === todayDate;
    html += `
      <div style="
        padding: var(--space-sm);
        border-radius: var(--radius-md);
        background: ${isToday ? 'var(--primary)' : 'transparent'};
        color: ${isToday ? 'white' : 'var(--text-primary)'};
        font-weight: ${isToday ? '600' : '400'};
        cursor: pointer;
        transition: all 0.2s;
      ">${i}</div>
    `;
  }
  return html;
}

// 计算器逻辑
let calcValue = '0';
let calcOperator = '';
let calcPrevious = '';

function calcInput(value: string) {
  const display = document.getElementById('calc-display') as HTMLInputElement;
  if (!display) return;

  if (value === 'C') {
    calcValue = '0';
    calcOperator = '';
    calcPrevious = '';
  } else if (['+', '-', '×', '÷'].includes(value)) {
    calcOperator = value;
    calcPrevious = calcValue;
    calcValue = '0';
  } else if (value === '=') {
    if (calcOperator && calcPrevious) {
      const prev = parseFloat(calcPrevious);
      const curr = parseFloat(calcValue);
      let result = 0;
      switch (calcOperator) {
        case '+': result = prev + curr; break;
        case '-': result = prev - curr; break;
        case '×': result = prev * curr; break;
        case '÷': result = curr !== 0 ? prev / curr : 'Error'; break;
      }
      calcValue = String(result);
      calcOperator = '';
      calcPrevious = '';
    }
  } else {
    if (calcValue === '0' && value !== '.') {
      calcValue = value;
    } else {
      calcValue += value;
    }
  }

  display.value = calcValue;
}

function calcResult() {
  calcInput('=');
}

// 页面导航
function showPage(pageName: string) {
  const pages = document.querySelectorAll('.page');
  const navItems = document.querySelectorAll('.nav-item');

  pages.forEach(page => {
    page.classList.remove('active');
    if (page.id === `page-${pageName}`) {
      page.classList.add('active');
    }
  });

  navItems.forEach(item => {
    item.classList.remove('active');
    const itemPage = item.getAttribute('data-page');
    if (itemPage === pageName) {
      item.classList.add('active');
    }
  });

  currentPage = pageName;
}

// 设置导航
function setupNavigation() {
  // 底部导航已经通过 HTML 的 onclick 设置
}

// 计算器结果
function showPageAndBack(pageName: string) {
  showPage(pageName);
}

// 切换模式（通过顶部工具栏）
function switchMode(modeId: string) {
  const mode = MODES.find(m => m.id === modeId);
  if (mode) {
    openMode(modeId);
  }
}

// 收藏功能
function toggleFavorite(featureId: string) {
  const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
  const index = favorites.indexOf(featureId);

  if (index > -1) {
    favorites.splice(index, 1);
  } else {
    favorites.push(featureId);
  }

  localStorage.setItem('favorites', JSON.stringify(favorites));
}

// 主题切换
function toggleTheme() {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  document.documentElement.setAttribute('data-theme', isDark ? 'light' : 'dark');
}

// 初始化
document.addEventListener('DOMContentLoaded', init);
