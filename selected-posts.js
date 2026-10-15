// 按展示顺序填写三篇精选文章；文章与主页统一部署在同一域名。
const blogBaseUrl = new URL("/", window.location.href);
const selectedPosts = [
  {
    "title": "44岁，我的自救计划",
    "date": "2026-10-15",
    "type": "个人成长",
    "path": "2026/10/15/44岁，我的自救计划/",
    "summary": "面对 AI 时代的职业焦虑，用行动探索中年程序员的自救之路。"
  },
  {
    "title": "新的一年，我要过得好",
    "date": "2026-01-01",
    "type": "生活感悟",
    "path": "2026/01/01/新的一年，我要过得好/",
    "summary": "关注健康、兴趣和家人，把过得好作为新一年的目标。"
  },
  {
    "title": "澳大利亚的首都是悉尼",
    "date": "2025-10-06",
    "type": "人生思考",
    "path": "2025/10/06/澳大利亚的首都是悉尼/",
    "summary": "从童年的一次争论说起，反思事实、观点与权威，减少精神内耗。"
  }
];
const englishPosts = [
  {
    "title": "At 44, my plan to move forward",
    "type": "Personal growth · Chinese",
    "summary": "Facing career anxiety in the AI era and exploring a new path through action."
  },
  {
    "title": "This year, I want to live well",
    "type": "Life · Chinese",
    "summary": "Making room for health, hobbies and family in the new year."
  },
  {
    "title": "Sydney is the capital of Australia",
    "type": "Reflections · Chinese",
    "summary": "A childhood argument prompts reflections on facts, authority and inner peace."
  }
];
if (document.documentElement.lang === 'en') selectedPosts.forEach((post, index) => Object.assign(post, englishPosts[index]));
const notesList = document.querySelector('#selected-posts');
notesList.replaceChildren(...selectedPosts.slice(0, 3).map(post => {
  const link = document.createElement('a');
  link.className = 'note-link';
  link.href = new URL(post.path, blogBaseUrl).href;
  const date = document.createElement('span');
  date.className = 'note-date';
  const time = document.createElement('time');
  time.dateTime = post.date;
  time.textContent = post.date;
  const type = document.createElement('small');
  type.textContent = post.type;
  date.append(time, document.createElement('br'), type);
  const text = document.createElement('div');
  const title = document.createElement('h3');
  title.textContent = post.title;
  const summary = document.createElement('p');
  summary.textContent = post.summary;
  text.append(title, summary);
  const arrow = document.createElement('span');
  arrow.className = 'note-arrow';
  arrow.setAttribute('aria-hidden', 'true');
  arrow.textContent = '↗';
  link.append(date, text, arrow);
  return link;
}));
