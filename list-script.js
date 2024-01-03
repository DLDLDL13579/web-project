/* jshint esversion: 6 */

(function() {
  "use strict";
document.addEventListener('DOMContentLoaded', function () {
    const cardsContainer = document.getElementById('cardsContainer');
    const categoryDropdown = document.getElementById('category');
    const backgroundDropdown = document.getElementById('background');
    const body = document.body;
    const header = document.querySelector('header');

    // 示例数据，实际项目中从后端获取
    const services = [
        { category: 'registration', title: '学生注册', description: '完成学生注册手续，助你顺利融入校园生活。', image: '截屏2024-01-01 20.56.09.png' },
        // 添加更多服务数据

    ];

    // 初始化页面
    function initPage() {
        renderCards(services);
        categoryDropdown.addEventListener('change', filterCards);
        backgroundDropdown.addEventListener('change', changeBackground);
    }

    // 渲染卡片
    function renderCards(services) {
        cardsContainer.innerHTML = '';

        services.forEach(service => {
            const card = createCard(service);
            cardsContainer.appendChild(card);
        });
    }

    // 创建卡片元素
    function createCard(service) {
        const card = document.createElement('div');
        card.classList.add('card');
        card.setAttribute('data-category', service.category);

        const image = document.createElement('img');
        image.src = service.image;
        image.alt = `${service.title}图标`;

        const cardContent = document.createElement('div');
        cardContent.classList.add('card-content');

        const title = document.createElement('h3');
        title.textContent = service.title;

        const description = document.createElement('p');
        description.textContent = service.description;

        const applyButton = document.createElement('button');
        applyButton.textContent = '申请';
        applyButton.addEventListener('click', () => applyService(service.title));

        cardContent.appendChild(title);
        cardContent.appendChild(description);
        cardContent.appendChild(applyButton);

        card.appendChild(image);
        card.appendChild(cardContent);

        return card;
    }

    // 申请服务的逻辑
    function applyService(serviceName) {
        // 处理申请服务的逻辑，可以跳转到相应的申请页面或触发相关操作
        alert('申请' + serviceName);
    }

    // 根据选择的类别过滤卡片
    function filterCards() {
        const selectedCategory = categoryDropdown.value;
        const filteredServices = selectedCategory === 'all' ? services : services.filter(service => service.category === selectedCategory);

        renderCards(filteredServices);
    }

    // 更改背景
    function changeBackground() {
        const selectedBackground = backgroundDropdown.value;

        switch (selectedBackground) {
            case 'default':
                body.style.backgroundColor = '#dee2e5';
                header.style.backgroundColor = '#c3b2e5';
                break;
            case 'gradient':

                body.style.backgroundColor = '#1d1926';
                header.style.backgroundColor = '#cfbbf0';
                break;
            case 'pattern':
                body.style.backgroundColor = '#dcdadb';
                header.style.backgroundColor = '#f5bc2d';
                // 添加其他图案背景样式
                break;
            default:
                break;
        }
    }
// 获取<select>元素
const servicesDropdown = document.getElementById('category');

// 获取按钮容器
const buttonGrid = document.getElementById('buttonGrid');

// 创建按钮函数
function createButtonGrid() {
    // 清空之前可能存在的按钮
    buttonGrid.innerHTML = '';
    // 定义按钮名称数组
    const buttonNames = [
        '请假申请', '我的处分', '常用附件',
        '通知公告', '申请贷学金', '我的助学金'
    ];

 // 创建6个按钮，并设置不同的文本内容
    for (let i = 0; i < buttonNames.length; i++) {
        const button = document.createElement('button');
        button.className = 'button';
        button.textContent = buttonNames[i];
        // 添加索引属性，用于在点击事件中获取按钮索引
        button.setAttribute('data-index', i);
        button.addEventListener('click', function () {
    // 如果点击的是按钮2（我的处分），则跳转到Details-page.html
    if (i === 1) {
        window.location.href = 'Details-page.html';
    } else {
        // 其他按钮的点击逻辑
        // 可根据需要添加相应的处理代码
        console.log(`Button ${i + 1} clicked.`);
    }
});


        buttonGrid.appendChild(button);
    }

    // 显示按钮容器
    buttonGrid.classList.remove('hidden');
}


// 监听<select>元素的变化事件
servicesDropdown.addEventListener('change', function () {
    const selectedService = servicesDropdown.value;

    // 如果选择了"学工系统"，则创建按钮网格
    if (selectedService === 'servie3') {
        createButtonGrid();
    } else {
        // 如果选择了其他服务，隐藏按钮容器
        buttonGrid.classList.add('hidden');
    }
});
    // 初始化页面
    initPage();
});
})();
