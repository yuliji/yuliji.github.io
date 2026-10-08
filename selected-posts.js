// 按展示顺序填写三篇精选文章；文章与主页统一部署在同一域名。
const blogBaseUrl = new URL("/", window.location.href);
const selectedPosts = [
  {
    "title": "当年导致以太坊分叉的The DAO事件是怎么回事？",
    "date": "2021-11-20",
    "type": "视频记录",
    "path": "2021/11/20/当年导致以太坊分叉的The-DAO事件是怎么回事？/",
    "summary": "回顾 The DAO 事件与以太坊分叉。"
  },
  {
    "title": "我来教大家如何开土矿割韭菜",
    "date": "2021-11-20",
    "type": "视频记录",
    "path": "2021/11/20/我来教大家如何开土矿割韭菜/",
    "summary": "关于区块链项目的 B 站与 YouTube 视频记录。"
  },
  {
    "title": "TITAN币是如何一夜归零的？",
    "date": "2021-08-08",
    "type": "区块链",
    "path": "2021/08/08/TITAN币是如何一夜归零的？/",
    "summary": "回顾 IRON Finance 代币崩盘事件，理解算法稳定币的风险。"
  }
];
const englishPosts = [
 {title: 'The DAO incident that split Ethereum', type: 'Video · Chinese', summary: 'A look back at The DAO incident and the Ethereum fork.'},
 {title: 'How yield-farming schemes are created', type: 'Video · Chinese', summary: 'A video exploring how these blockchain projects work.'},
 {title: 'How TITAN collapsed overnight', type: 'Blockchain · Chinese', summary: 'The IRON Finance collapse and the risks of algorithmic stablecoins.'}
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
