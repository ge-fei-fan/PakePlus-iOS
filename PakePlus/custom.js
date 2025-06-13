console.log(
    '%cbuild from PakePlus： https://github.com/Sjj1024/PakePlus',
    'color:orangered;font-weight:bolder'
)
console.log(window.location.port)
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
        console.log('handle origin', origin)
        location.href = origin.href
    } else {
        console.log('not handle origin', origin)
    }
}

document.addEventListener('click', hookClick, { capture: true })

// ====== 添加导航按钮组 ====== //
// 新增部分：只在 192.168.2.80:3002 页面上显示按钮
if (window.location.hostname === '192.168.2.80' && window.location.port === '3002') {
    // 创建按钮容器
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
		
		// 创建返回按钮
		//const backBtn = document.createElement('button');
		//backBtn.innerHTML = '← 返回';
		//backBtn.style.padding = '10px 15px';
		//backBtn.style.backgroundColor = '#ff4500'; // 橙红色
		//backBtn.style.color = 'white';
		//backBtn.style.border = 'none';
		//backBtn.style.borderRadius = '5px';
		//backBtn.style.cursor = 'pointer';
		//backBtn.style.fontWeight = 'bold';
		//backBtn.style.boxShadow = '0 2px 10px rgba(0,0,0,0.3)';
		
		// 创建刷新按钮
		const refreshBtn = document.createElement('button');
		refreshBtn.innerHTML = '↻ 刷新';
		refreshBtn.style.padding = '10px 15px';
		refreshBtn.style.backgroundColor = '#4169E1'; // 皇家蓝
		refreshBtn.style.color = 'white';
		refreshBtn.style.border = 'none';
		refreshBtn.style.borderRadius = '5px';
		refreshBtn.style.cursor = 'pointer';
		refreshBtn.style.fontWeight = 'bold';
		refreshBtn.style.boxShadow = '0 2px 10px rgba(0,0,0,0.3)';
		
		// 按钮通用样式
		const buttonStyle = (btn) => {
			btn.style.transition = 'all 0.3s ease';
			btn.style.fontFamily = 'system-ui, sans-serif';
			btn.style.fontSize = '14px';
			btn.addEventListener('mouseenter', () => {
				btn.style.opacity = '0.9';
				btn.style.transform = 'translateY(-2px)';
			});
			btn.addEventListener('mouseleave', () => {
				btn.style.opacity = '1';
				btn.style.transform = 'translateY(0)';
			});
		};
		
		// 应用样式
		//buttonStyle(backBtn);
		buttonStyle(refreshBtn);
		
		// 添加功能
		//backBtn.addEventListener('click', () => history.back());
		refreshBtn.addEventListener('click', () => location.reload());
		
		// 添加到容器
		//navContainer.appendChild(backBtn);
		navContainer.appendChild(refreshBtn);
		
		// 添加到页面
		document.body.appendChild(navContainer);
		
		console.log('导航按钮组已添加');
	});
}else{
	// 创建按钮容器
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
		
		// 创建返回按钮
		const backBtn = document.createElement('button');
		backBtn.innerHTML = '← 返回';
		backBtn.style.padding = '10px 15px';
		backBtn.style.backgroundColor = '#ff4500'; // 橙红色
		backBtn.style.color = 'white';
		backBtn.style.border = 'none';
		backBtn.style.borderRadius = '5px';
		backBtn.style.cursor = 'pointer';
		backBtn.style.fontWeight = 'bold';
		backBtn.style.boxShadow = '0 2px 10px rgba(0,0,0,0.3)';
		
		
		// 按钮通用样式
		const buttonStyle = (btn) => {
			btn.style.transition = 'all 0.3s ease';
			btn.style.fontFamily = 'system-ui, sans-serif';
			btn.style.fontSize = '14px';
			btn.addEventListener('mouseenter', () => {
				btn.style.opacity = '0.9';
				btn.style.transform = 'translateY(-2px)';
			});
			btn.addEventListener('mouseleave', () => {
				btn.style.opacity = '1';
				btn.style.transform = 'translateY(0)';
			});
		};
		
		// 应用样式
		buttonStyle(backBtn);
		
		
		// 添加功能
		backBtn.addEventListener('click', () => history.back());
	
		
		// 添加到容器
		navContainer1.appendChild(backBtn);
		
		
		// 添加到页面
		document.body.appendChild(navContainer1);
		
		console.log('导航按钮组已添加');
	});
}