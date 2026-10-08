// 个人信息；英文主页使用 englishName。
const profile = { name: '郁利吉', chineseName: '极客吉', englishName: 'Lee G', email: 'yuliji101@gmail.com' };
const articles = {
 garden: {label:'项目示例 / 个人知识库',title:'数字花园',body:['一处收藏想法、整理笔记和连接知识的个人空间。这个项目示例探索：如何让记录变得轻盈，让旧笔记在新的问题里重新发挥作用。','设计重点是清晰的阅读体验、主题关联与渐进整理。先记录一个问题，再逐步补上观察、尝试和答案。','你可以在 script.js 中把这段介绍换成真实项目的背景、你的职责、实现过程和结果。']},
 focus: {label:'项目示例 / 效率工具',title:'专注此刻',body:['一个以番茄工作法为灵感的工具概念：减少视觉噪声，把注意力留给当前任务。','界面只呈现最重要的信息：这一刻要做什么，以及留给它多少时间。温和的配色和清晰的数字，让工具安静地陪伴工作。','这里是项目介绍示例，并非已经接入的计时应用。将你的真实作品链接和开发故事放在这里。']},
 daily: {label:'项目示例 / 视觉实验',title:'日常之间',body:['从窗外的一束光、傍晚的山影、书页的留白中，寻找视觉设计的起点。','这个设计示例用简单的几何形状、朴素的文字和自然色彩，表达日常生活里的安静时刻。','作品不一定需要宏大的主题。认真观察一件小事，也能成为创造的开始。']},
 start: {label:'示例笔记 / 创造与行动',title:'先做一个很小、但完整的东西',body:['面对一个新想法，我们很容易把计划写得越来越大。更多功能，更完整的架构，更漂亮的界面。可真正重要的一步，往往是让它第一次被使用。','试着把问题缩小：它能不能只帮助一个人，解决一件具体的事？今天能不能做出一个完整的流程？从输入到结果，从开始到结束。','小而完整的作品会带来真实的反馈。你开始知道哪些假设成立，哪些细节需要修改。下一步不再依靠想象，而是来自观察。','完成一个小东西，给它一个真实的使用场景。然后，再做得好一点。']},
 ai: {label:'示例笔记 / 技术与工具',title:'有了 AI，我们更需要自己的问题',body:['工具让获取答案的过程变快了，但并没有替我们决定什么问题值得问。','一个好的问题，常常来自具体的体验：某一步为什么如此麻烦？某个结果为什么和预期不同？我们真正想改变的是什么？','在使用工具之前，把问题写清楚，把约束讲明白，把判断结果的标准列出来。工具能够协助探索，而方向仍需要我们从生活中发现。','保持观察，保留怀疑，也愿意亲手验证。这些习惯，会让新的工具真正成为帮助。']},
 slow: {label:'示例笔记 / 学习与生活',title:'允许一些事情，慢慢发生',body:['不是所有成长，都能在当天被看见。有些理解，需要经历几次困惑，读过几本书，再遇到一个合适的问题，才会连成一条线。','为长期的事情留一点固定的时间。每天读几页，写几句，或者改进一个小细节。不必每一次都有惊人的成果。','偶尔回看过去的记录，你会发现，那些看似重复的日子，其实已经把你带到了新的地方。']}
};
const isEnglish = document.documentElement.lang === 'en';
const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('#nav');
function closeMenu(){nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label',isEnglish ? 'Open menu' : '打开导航');}
menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',isEnglish ? (open ? 'Close menu' : 'Open menu') : (open ? '关闭导航' : '打开导航'));});
nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu();});
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('[data-filter]').forEach(item=>{item.classList.toggle('active',item===button);item.setAttribute('aria-pressed',String(item===button));});document.querySelectorAll('.project').forEach(project=>{project.hidden=button.dataset.filter!=='all'&&project.dataset.category!==button.dataset.filter;});}));
const reader=document.querySelector('#reader');
function showArticle(article){document.querySelector('#reader-label').textContent=article.label;document.querySelector('#reader-title').textContent=article.title;document.querySelector('#reader-body').replaceChildren(...article.body.map(text=>{const p=document.createElement('p');p.textContent=text;return p;}));reader.showModal();document.body.style.overflow='hidden';reader.scrollTop=0;}
document.querySelectorAll('[data-article]').forEach(button=>button.addEventListener('click',()=>showArticle(articles[button.dataset.article])));
document.querySelector('#close-dialog').addEventListener('click',()=>reader.close());
reader.addEventListener('click',event=>{if(event.target===reader){const rect=reader.getBoundingClientRect();if(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom)reader.close();}});
reader.addEventListener('close',()=>document.body.style.overflow='');
document.querySelector('#year').textContent=new Date().getFullYear();

const languageSwitch = document.querySelector('.language-switch');
function updateLanguageLink() {
  if (languageSwitch) {
    const hash = !isEnglish && window.location.hash === '#notes' ? '' : window.location.hash;
    languageSwitch.href = (isEnglish ? '/zh/' : '/') + hash;
  }
}
updateLanguageLink();
window.addEventListener('hashchange', updateLanguageLink);
