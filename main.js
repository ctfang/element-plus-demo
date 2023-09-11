function component(remoteComponentPath) {
    return {
        // 异步加载远程组件
        functional: true,
        render(h, { data, children }) {
            return Vue.h(
                'div',
                data,
                children
            );
        },
        beforeCreate() {
            // 使用fetch加载远程组件的内容
            fetch(remoteComponentPath)
                .then(response => response.text())
                .then(remoteComponentContent => {
                    // 将远程组件内容动态添加到文档中
                    const script = document.createElement('script');
                    script.textContent = remoteComponentContent;
                    document.body.appendChild(script);

                    // 将远程组件注册为全局组件
                    const componentName = 'remote-component'; // 远程组件的名称
                    app.component(componentName, window[componentName]);
                })
                .catch(error => {
                    console.error('加载远程组件失败：', error);
                });
        },
    }
}
