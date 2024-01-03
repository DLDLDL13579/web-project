/* jshint esversion: 6 */

(function() {
  "use strict";

  // 获取页面中的元素
  const dynamicText = document.getElementById('dynamicText');
  const actionButton = document.querySelector('.action-button');
  const customImage = document.querySelector('.custom-image');
  const footer = document.querySelector('footer');

  // 创建动态文本的内容数组
  const textArray = ["Y", "i", "b", "i", "n", " ", "S", "n", "a", "k", "e", " ", "G", "a", "r", "d", "e", "n"];
  let index = 0;

  // 定义动画效果
  function pulseAnimation(element) {
    // 文字颜色渐变
    const colors = [ "#ffffff", "#636e6e", "#1c4f4c", ];
    const currentColor = colors[index % colors.length];
    element.style.color = currentColor;

    // 放大缩小效果
    element.style.transform = 'scale(1.1)';
    setTimeout(() => {
      element.style.transform = 'scale(1)';
    }, 500);
  }

  // 旋转按钮效果
  function rotateButton() {
    // 随机生成旋转角度，持续时间在1秒到3秒之间
    const rotationDegree = Math.random() * 720;
    const rotationDuration = Math.random() * 3000 + 8000;
    actionButton.style.transition = `transform ${rotationDuration}ms ease-in-out`;
    actionButton.style.transform = `rotate(${rotationDegree}deg)`;
  }

  // 更新动态文本的内容
  function updateDynamicText() {
    dynamicText.textContent = textArray.slice(0, index + 1).join("    ");
    index = (index + 1) % textArray.length;
  }

  // 启动按钮点击事件
  actionButton.addEventListener('click', () => {
    pulseAnimation(dynamicText);
    updateDynamicText();
    rotateButton();

    // 添加平滑滚动效果
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  });

  // 添加定时器，定时更新动态文本
  setInterval(() => {
    pulseAnimation(dynamicText);
    updateDynamicText();
  }, 500);  // 0.5秒更新一次

  // 添加定时器，定时旋转按钮
  setInterval(() => {
    rotateButton();
  }, 8000);  // 5秒旋转一次

  // 图片悬浮效果
  customImage.addEventListener('mouseover', () => {
    pulseAnimation(customImage);
  });

  // Footer 淡入效果
  window.addEventListener('scroll', () => {
    const footerPosition = footer.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (footerPosition < windowHeight) {
      footer.style.opacity = 1;
    }
  });
})();
