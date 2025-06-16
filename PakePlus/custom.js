console.log(
    '%cbuild from PakePlus： https://github.com/Sjj1024/PakePlus',
    'color:orangered;font-weight:bolder'
)
console.log(window.location.port)

// 创建并插入加载动画的函数
function showLoading() {
  if (document.getElementById('custom-loading-mask')) return;
  const mask = document.createElement('div');
  mask.id = 'custom-loading-mask';
  mask.style.position = 'fixed';
  mask.style.top = 0;
  mask.style.left = 0;
  mask.style.width = '100vw';
  mask.style.height = '100vh';
  mask.style.background = 'rgba(255,255,255,0.85)';
  mask.style.zIndex = 100000;
  mask.style.display = 'flex';
  mask.style.alignItems = 'center';
  mask.style.justifyContent = 'center';

  // 简单的 loading 动画（CSS 动画的圆圈）
  mask.innerHTML = `
    <div style="display:flex;flex-direction:column;align-items:center;">
      <div style="width:48px;height:48px;border:5px solid #bbb;border-top:5px solid #4169e1;border-radius:50%;animation:spin 1s linear infinite;"></div>
      <div style="margin-top:16px;color:#333;font-size:18px;">正在加载...</div>
    </div>
    <style>
      @keyframes spin {
        0% { transform: rotate(0deg);}
        100% { transform: rotate(360deg);}
      }
    </style>
  `;
  document.body.appendChild(mask);
}
// very important, if you don't know what it is, don't touch it
// 非常重要，不懂代码不要动，这里可以解决80%的问题，也可以生产1000+的bug
const hookClick = (e) => {
    const origin = e.target.closest('a')
    const isBaseTargetBlank = document.querySelector(
        'head base[target="_blank"]'
    )
    console.log('origin', origin, isBaseTargetBlank)
    if (
        (origin && origin.href && origin.target === '_blank') ||
        (origin && origin.href && isBaseTargetBlank)
    ) {
        e.preventDefault()
        showLoading()
        console.log('handle origin', origin)
        // location.href = origin.href
        // 延迟一下，确保动画渲染出来
        setTimeout(() => {
          location.href = origin.href
        }, 300)
    } else {
        console.log('not handle origin', origin)
    }
}

document.addEventListener('click', hookClick, { capture: true })

// ====== 添加导航按钮组 ====== //
// 新增部分：只在 192.168.2.80:3002 页面上显示按钮
if (window.location.hostname === '192.168.2.80' && window.location.port === '3002') {
    document.addEventListener('DOMContentLoaded', () => {
        // 创建按钮容器
        const navContainer = document.createElement('div');
        navContainer.style.position = 'fixed';
        navContainer.style.bottom = '20px';
        navContainer.style.right = '20px';
        navContainer.style.zIndex = '10000';
        navContainer.style.display = 'flex';
        navContainer.style.flexDirection = 'row';
        navContainer.style.gap = '10px';
        navContainer.style.alignItems = 'center';
        
        // 创建刷新按钮
        const refreshBtn = document.createElement('button');
        // 使用 SVG 图标替代文字
        refreshBtn.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.3"/>
            </svg>`;
        refreshBtn.style.padding = '12px';
        refreshBtn.style.backgroundColor = '#4169E1';
        refreshBtn.style.color = 'white';
        refreshBtn.style.border = 'none';
        refreshBtn.style.borderRadius = '50%';  // 改为圆形
        refreshBtn.style.cursor = 'pointer';
        refreshBtn.style.display = 'flex';
        refreshBtn.style.alignItems = 'center';
        refreshBtn.style.justifyContent = 'center';
        refreshBtn.style.width = '44px';
        refreshBtn.style.height = '44px';
        refreshBtn.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';
        
        // 按钮通用样式
        const buttonStyle = (btn) => {
            btn.style.transition = 'all 0.3s ease';
            btn.addEventListener('mouseenter', () => {
                btn.style.transform = 'translateY(-2px) scale(1.05)';
                btn.style.boxShadow = '0 4px 15px rgba(0,0,0,0.3)';
            });
            btn.addEventListener('mouseleave', () => {
                btn.style.transform = 'translateY(0) scale(1)';
                btn.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';
            });
        };
        
        buttonStyle(refreshBtn);
        refreshBtn.addEventListener('click', () => location.reload());
        navContainer.appendChild(refreshBtn);
        document.body.appendChild(navContainer);
    });
} else {
    document.addEventListener('DOMContentLoaded', () => {
        // 创建按钮容器
        const navContainer1 = document.createElement('div');
        navContainer1.style.position = 'fixed';
        navContainer1.style.bottom = '20px';
        navContainer1.style.right = '20px';
        navContainer1.style.zIndex = '10000';
        navContainer1.style.display = 'flex';
        navContainer1.style.flexDirection = 'row';
        navContainer1.style.gap = '10px';
        navContainer1.style.alignItems = 'center';
        
        // 创建首页按钮（原返回按钮）
        const homeBtn = document.createElement('button');
        // 使用房子形状的 SVG 图标
        homeBtn.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                <polyline points="9 22 9 12 15 12 15 22"/>
            </svg>`;
        homeBtn.style.padding = '12px';
        homeBtn.style.backgroundColor = '#ff4500';
        homeBtn.style.color = 'white';
        homeBtn.style.border = 'none';
        homeBtn.style.borderRadius = '50%';  // 改为圆形
        homeBtn.style.cursor = 'pointer';
        homeBtn.style.display = 'flex';
        homeBtn.style.alignItems = 'center';
        homeBtn.style.justifyContent = 'center';
        homeBtn.style.width = '44px';
        homeBtn.style.height = '44px';
        homeBtn.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';
        
        // 按钮通用样式
        const buttonStyle = (btn) => {
            btn.style.transition = 'all 0.3s ease';
            btn.addEventListener('mouseenter', () => {
                btn.style.transform = 'translateY(-2px) scale(1.05)';
                btn.style.boxShadow = '0 4px 15px rgba(0,0,0,0.3)';
            });
            btn.addEventListener('mouseleave', () => {
                btn.style.transform = 'translateY(0) scale(1)';
                btn.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';
            });
        };
        
        buttonStyle(homeBtn);
        // 跳转到百度
        homeBtn.addEventListener('click', () => window.location.href = 'http://192.168.2.80:3002');
        navContainer1.appendChild(homeBtn);
        document.body.appendChild(navContainer1);
    });
}